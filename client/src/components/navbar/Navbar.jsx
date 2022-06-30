import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const { dispatch } = useContext(AuthContext);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<span className="logo">TRIXI</span>
					<Link to="/" className="link">
						<span>Homepage</span>
					</Link>
					<Link to="/series" className="link">
						<span className="navbarmainLinks">Series</span>
					</Link>
					<Link to="/movies" className="link">
						<span className="navbarmainLinks">Movies</span>
					</Link>
					{/* <span>New and Popular</span>
					<span>My List</span> */}
				</div>
				<div className="right">
					<SearchIcon className="icon" />
					<span>KID</span>
					<NotificationsIcon className="icon" />
					<img
						src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
						alt=""
					/>
					<div className="profile">
						<ArrowDropDownIcon className="icon" />
						<div className="options">
							<span>Settings</span>
							<span onClick={() => dispatch(logout())}>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
