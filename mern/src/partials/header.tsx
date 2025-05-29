import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <header className="bg-blue-800 py-5 text-white flex justify-between">
        <h1>Curso de MERN</h1>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
