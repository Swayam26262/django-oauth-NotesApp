# OAuth Notes Application



A full-stack note-taking application with OAuth authentication, built using Django REST Framework and React.

## 🚀 Features

- **Secure Authentication**: JWT-based authentication system
- **Note Management**: Create, read, and delete notes
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly across all devices
- **Real-time Updates**: Instant reflection of changes

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Axios
- JWT Decode
- CSS3
- Vite

### Backend
- Django
- Django REST Framework
- Simple JWT
- SQLite3
- CORS Headers

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Python 3.8+
- Node.js 14+
- npm or yarn

## 🔧 Installation

### Backend Setup

```sh
# Clone the repository
git clone <repository-url>

# Navigate to backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
.\venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the server
python manage.py runserver
```

### Frontend Setup

```sh
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🌐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://127.0.0.1:8000
```

### Backend (settings.py)
Default configuration is set for development. For production, update:
- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- Database settings

## 📁 Project Structure

```
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   └── backend/
│       ├── settings.py
│       └── urls.py
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles/
    │   └── App.jsx
    └── package.json
```

## 🔒 API Endpoints

- `POST /api/user/register/`: Register new user
- `POST /api/token/`: Obtain JWT token
- `POST /api/token/refresh/`: Refresh JWT token
- `GET /api/notes/`: List all notes
- `POST /api/notes/`: Create new note
- `DELETE /api/notes/delete/<id>/`: Delete note

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
1. User logs in with credentials
2. Server returns access and refresh tokens
3. Access token is used for API requests
4. Refresh token is used to obtain new access tokens

## 💡 Usage

1. Register a new account
2. Login with credentials
3. Create, view, and delete notes
4. Toggle dark mode as needed
5. Automatic token refresh handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Swayam Patil**
