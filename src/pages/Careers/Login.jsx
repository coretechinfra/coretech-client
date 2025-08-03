import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await login(formData.email, formData.password);
      if (result.success) {
        navigate("/careers/jobs/positions");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid"
      // style={{
      //   backgroundImage:
      //     "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   height: "100vh",
      // }}
    >
     <Row className="justify-content-center px-0">
          <Col md={6} lg={7} className="px-0 d-none d-md-block">
            <img src='https://images.pexels.com/photos/7979605/pexels-photo-7979605.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Login" style={{width: '100%', height: "500px", objectFit: 'cover'}} />
          </Col>
          <Col md={6} lg={5}>
            <Card className="border-0">
              <Card.Body>
                <h2 className="mb-4">Login</h2>

                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      variant="outline-dark"
                      disabled={loading}
                      className="mb-3 "
                      style={{borderRadius: '20px'}}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </div>

                  <div className="text-center">
                    <Link
                      to="/careers/jobs/forgot-password"
                      className="text-decoration-none"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/careers/jobs/register"
                      className="text-decoration-none"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default Login;
