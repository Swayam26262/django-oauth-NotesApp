from django.contrib.auth.models import User  # Import the built-in User model from Django's authentication system
from rest_framework import serializers  # Import serializers from Django REST framework
from .models import Note

# Define a serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    """
    This serializer is used to convert the User model instances into JSON format and vice versa.
    """
    class Meta:
        model = User  # Specify the model to serialize (Django's User model)
        fields = ["id", "username", "password"]  # Specify the fields to include in the serialized output
        extra_kwargs = {"password": {"write_only": True}}  # Make the password field write-only (not included in responses)

    # Override the create method to handle user creation
    def create(self, validated_data):
        # Use Django's create_user method to create a new user with the validated data
        user = User.objects.create_user(**validated_data)
        return user  # Return the created user instance

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'author']
        extra_kwargs = {'author': {"read_only": True}}

        
