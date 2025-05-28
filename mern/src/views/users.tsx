import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
import UserList from "../components/users/UsersList";

const Users = () => {
  return (
    <>
      <UserList />
      <AddUser />
      <EditUser />
    </>
  );
};

export default Users;
