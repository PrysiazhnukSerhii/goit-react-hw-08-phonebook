import { Routes, Route, Navigate } from 'react-router-dom';
import { Contacts } from '../contacts/contacts';
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

// зробити додатковий запит на отримання інформації про юзере, якщо немає токіна в локал то вертати на логін сторінку

// можна створити один фаіл на стилі для форм

// - оформити сторінку нот фаунд (взагалі це сторінка  чи кмопонент подумать, більшість всього сторінка)

// повтикать як в будстрап скидувати ці говно стилі
