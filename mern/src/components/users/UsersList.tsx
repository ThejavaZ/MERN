import ShowUser from "./ShowUser";
import { Link } from "react-router-dom";
const UserList = () => {
  return (
    <>
      <h1 className="text-center font-bold uppercase">Lista de usuarios</h1>
      <Link to="/users/create">Agregar</Link>
      <ShowUser />
    </>
  );
};

export default UserList;
