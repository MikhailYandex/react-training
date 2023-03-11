import "./styles/App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/Context";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	const [isAuth, setIsAuth] = useState(false)

	useEffect(() => {
		if(localStorage.getItem('auth')) {
			setIsAuth(true)
		}
	}, [])

	return (
		<AuthContext.Provider value={{isAuth, setIsAuth}}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default App;
