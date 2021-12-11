import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
        <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;