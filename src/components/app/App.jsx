import { Routes, Route } from 'react-router-dom';
import { Contacts } from '../contacts/contacts';
import { Register } from '../register/register';
import { Login } from '../login/login';
import { NotFound } from '../notFound/notFound';
import { Container } from './app.styled';

import { AppBar } from '../appBar/appBar';

export const App = () => {
  return (
    <Container>
      <h1>Міняйся або здохни сука!!!</h1>
      <AppBar />
      <Routes>
        {/* <Route path="/" element={<>заповнить</>} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

// зробити додатковий запит на отримання інформації про юзере, якщо немає токіна в локал то вертати на логін сторінку

// можна створити один фаіл на стилі для форм

// - оформити сторінку нот фаунд (взагалі це сторінка  чи кмопонент подумать, більшість всього сторінка)
