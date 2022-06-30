import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { UserContextProvider } from "./context/userContext/UserContext";
import { ListContextProvider } from "./context/listContext/ListContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<MovieContextProvider>
				<ListContextProvider>
					<UserContextProvider>
						<App />
					</UserContextProvider>
				</ListContextProvider>
			</MovieContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
