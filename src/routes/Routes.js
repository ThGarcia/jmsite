import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Admin from '../pages/Admin';
import Quote from '../pages/Quote';
import Links from '../pages/Links';

const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/links" element={<Links />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </HashRouter>
)

export default AppRoutes;
