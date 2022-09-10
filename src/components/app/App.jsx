import { Routes, Route, Navigate } from 'react-router-dom';
import { Contacts } from '../contacts/contactsApp/contacts';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { Container } from './app.styled';
import PrivatRoutes from '../privatRoutes';
import PublicRoutes from '../publicRouts';

import { AppBar } from '../appBar/appBar';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivatRoutes />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  );
};

// можна зробити щоб коли сохраняеться контакт не можна було писати в інпут нічого

// можна створити один фаіл на стилі для форм
