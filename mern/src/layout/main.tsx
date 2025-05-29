import { Routes, Route } from "react-router-dom";
import Users from "../views/users";
import AddUser from "../components/users/AddUser";
const Main = () => {
  return (
    <main className="bg-gray-100">
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/create" element={<AddUser />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
