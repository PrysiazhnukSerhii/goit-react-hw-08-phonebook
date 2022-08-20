import { Routes, Route, NavLink } from 'react-router-dom';
import { Contacts } from '../contacts/contacts';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { NotFound } from '../notFound/notFound';
import { Container, Nav } from './app.styled';

export const App = () => {
  return (
    <Container>
      <h1>Міняйся або здохни сука!!!</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<>заповнить</>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

// - оформити сторінку нот фаунд (взагалі це сторінка  чи кмопонент подумать, більшість всього сторінка)
