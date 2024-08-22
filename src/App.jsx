import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import TechnicalSkills from "./pages/TechnicalSkills";
import Cabins from "./pages/Projects";

import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import NewAddition from "./pages/NewAddition";
import Achievements from "./features/achievements/Achievements";

import NewAchievements from "./pages/Achievements";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="technicalskills" element={<TechnicalSkills/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="achievements" element={<NewAchievements/>} />
            <Route path="newaddition" element={<NewAddition />} />
            <Route path="account" element={<Account />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
