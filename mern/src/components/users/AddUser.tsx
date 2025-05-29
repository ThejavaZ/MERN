import { useState } from "react";
import uniqueid from "uniqueid";

const AddUser = () => {
  // adding hooks
  const [userName, SetUserName] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [userPhone, SetUserPhone] = useState("");

  const addUser = () => {
    const user = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      id: uniqueid(),
    };
  };

  return (
    <>
      <h1>Agregar Usuario</h1>
      <form
        method="POST"
        action=""
        className="bg-gray-200 border-0.5 flex flex-col p-4 m-4 rounded-lg"
      >
        <label htmlFor="name">Nombre:</label>
        <input
          className="focus:border-gray-400 p-2 rounded-lg"
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          id="name"
          value={userName}
          onChange={(e) => {
            SetUserName(e.target.value);
          }}
        />

        <label htmlFor="name">Correo:</label>
        <input
          className="focus:border-gray-400 p-2 rounded-lg"
          type="email"
          placeholder="Ingrese su nombre"
          name="email"
          id="email"
          value={userEmail}
          onChange={(e) => {
            SetUserEmail(e.target.value);
          }}
        />

        <label htmlFor="phone">Celular:</label>
        <input
          className="focus:border-gray-400 p-2 rounded-lg"
          type="text"
          placeholder="Ingrese su numero celular"
          name="name"
          id="name"
          value={userPhone}
          onChange={(e) => {
            SetUserPhone(e.target.value);
          }}
        />

        <input
          type="button"
          value="Guardar"
          onSubmit={addUser}
          className="bg-blue-300 w-30 h-10 px-2 py-2 rounded-lg justify-center hover:cursor-pointer hover:bg-blue-400"
        />
      </form>
    </>
  );
};

export default AddUser;
