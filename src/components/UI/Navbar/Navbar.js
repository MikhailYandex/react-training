import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import MyButton from "../button/MyButton";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
	let navigate = useNavigate();

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
		navigate('/login')
	}

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link className="navbar__link" to="/posts">
          Посты
        </Link>
        <Link className="navbar__link" to="/about">
          О сайте
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
