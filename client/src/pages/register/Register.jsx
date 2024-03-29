import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const history = useHistory();
	const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });

	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();

	const handleStart = () => {
		setEmail(emailRef.current.value);
	};
	const handleFinish = async (e) => {
		e.preventDefault();
		setPassword(passwordRef.current.value);
		setUsername(usernameRef.current.value);
		try {
			await axiosInstance.post("/auth/register", {
				email,
				username,
				password,
			});
			history.push("/login");
		} catch (err) {}
	};
	return (
		<div className="register">
			<div className="top">
				<div className="wrapper">
					<span className="logo">TRIXI</span>					
					<button className="loginButton">
						<Link to={{ pathname: "https://trixiadmin.chinmay.tech" }} target="_blank"  className="link">
							Admin
						</Link>
					</button>
					<button className="loginButton">
						<Link to="/login" className="link">
							Sign In
						</Link>
					</button>
				</div>
			</div>
			<div className="container">
				<h1>Unlimited movies, TV shows, and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				{!email ? (
					<div className="input">
						<input type="email" placeholder="email address" ref={emailRef} />
						<button className="registerButton" onClick={handleStart}>
							Get Started
						</button>
					</div>
				) : (
					<form className="input">
						<input type="username" placeholder="username" ref={usernameRef} />
						<input type="password" placeholder="password" ref={passwordRef} />
						<button className="registerButton" onClick={handleFinish}>
							Start
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
