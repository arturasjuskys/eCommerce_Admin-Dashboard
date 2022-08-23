import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import User from "./pages/User";
import UserList from './pages/UserList';

const Container = styled.div`
  display: flex;
`;

export default function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </Container>
    </Router>
  );
}
