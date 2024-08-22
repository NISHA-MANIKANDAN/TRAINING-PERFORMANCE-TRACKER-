import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Axios for HTTP requests
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      // Handle successful login
      if (response.status === 200) {
        // Save token or user data to localStorage or context if needed
        // localStorage.setItem("token", response.data.token);

        // Redirect to the dashboard or another protected route
        navigate("/dashboard");
      }
    } catch (error) {
      // Handle errors such as invalid credentials or server errors
      setError(error.response ? error.response.data.message : "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <FormRow orientation="vertical">
        <Button size="large" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
