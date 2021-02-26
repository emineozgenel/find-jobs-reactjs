import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Alert } from 'react-bootstrap';
import image from '../assets/register.png';
import Parse from "parse";
import {JobContext} from "../context/JobContext";


const Register = () => {
  const wrapper = {
    height: 'calc(100vh - 82px)',
  };
  const h1 = {
    fontSize: '30px',
    fontWeight: '600'
  }
  const {setCurrentUser} = useContext(JobContext);
  const history = useHistory();

  const [formError, setformError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    try {
      const response = await user.signUp();
      setCurrentUser(response);
      history.push("/");
    } catch (error) {
      setformError(e.message);
    }
  }

  return (
    <div className="page-login">
      <Container>
        <div style={wrapper} className="d-flex align-items-center justify-content-center">
          <div className="col-6 login-img pr-5">
            <img src={image} alt="login" className="img-fluid"/>
          </div>
          <div className="col-4 login-form">
            <h1 style={h1} className="pb-3">Hesap Oluştur</h1>
            <Alert variant="danger" hidden={!formError}>{formError}</Alert>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="px-0">
                <Form.Label className="text-secondary">Kullanıcı Adı</Form.Label>
                <Form.Control
                  required 
                  type="text" 
                  className="py-2 border-light"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email" className="px-0">
                <Form.Label className="text-secondary">E-posta adresi</Form.Label>
                <Form.Control 
                  required
                  type="email" 
                  className="py-2 border-light"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">Lütfen geçerli e-posta adresi girin!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password" className="px-0">
                <Form.Label className="text-secondary">Şifre</Form.Label>
                <Form.Control 
                  required
                  type="password" 
                  className="py-2 border-light"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" className="col">Kayıt Ol</Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;