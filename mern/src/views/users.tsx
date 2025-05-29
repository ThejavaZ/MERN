import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
import UserList from "../components/users/UsersList";

const Users = () => {
  return (
    <>
      <AddUser />
      <UserList />
      <EditUser />
    </>
  );
};

export default Users;
