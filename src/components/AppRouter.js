import React from "react";
import { Route, Routes } from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router/Routes';
import { AuthContext } from '../context/Context'
import { useContext } from "react";

const AppRouter = () => {
	const {isAuth} = useContext(AuthContext)
  return (
		isAuth
		?
		<Routes>
			{privateRoutes.map(route =>
				<Route key={route.path} Component={route.component} path={route.path} exact={route.exact}/>
			)}
		</Routes>
		:
		<Routes>
			{publicRoutes.map(route =>
				<Route key={route.path} Component={route.component} path={route.path} exact={route.exact}/>
			)}
		</Routes>
  );
};

export default AppRouter;

//<Route path="/posts" element={<Posts />} />
//<Route path="/about" element={<About />} />
//<Route path="/posts/:id" element={<PostIdPage />} />
//<Route path="*" element={<Error />} />
//<Route path="/" element={<Navigate replace to="/posts" />} />