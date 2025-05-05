import Form from "../components/Form";
import "../styles/Form.css";

function Login() {
    return <Form route="api/token/" method="login" />;
}

export default Login;