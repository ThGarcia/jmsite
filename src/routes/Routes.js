import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Admin from '../pages/Admin';
import Quote from '../pages/Quote';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<Error />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;
