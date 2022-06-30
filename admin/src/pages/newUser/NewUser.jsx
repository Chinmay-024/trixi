import "./newUser.css";
import { useContext, useState } from "react";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { useHistory } from "react-router-dom";

export default function NewUser() {
	const [user, setUser] = useState(null);
	const history = useHistory();

	const { dispatch } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser(user, dispatch);
		history.push("/users");
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setUser({ ...user, [e.target.name]: value });
	};

	return (
		<div className="newUser">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label>Username</label>
					<input
						type="text"
						placeholder="john"
						name="username"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Email</label>
					<input
						type="email"
						placeholder="john@gmail.com"
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div className="newUserItem">
					<label>Password</label>
					<input
						type="password"
						placeholder="password"
						name="password"
						onChange={handleChange}
					/>
				</div>
				<button className="newUserButton" onClick={handleSubmit}>
					Create
				</button>
			</form>
		</div>
	);
}
