import Form from "../components/Form";
import "../styles/Form.css";

function Register() {
    return <Form route="api/user/register/" method="register" />;
}

export default Register;