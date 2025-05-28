import { Routes, Route } from "react-router-dom";
import Users from "../views/users";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </>
  );
};

export default Main;
