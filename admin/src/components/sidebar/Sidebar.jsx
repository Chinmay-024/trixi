import "./sidebar.css";

// import TimelineIcon from "@mui/icons-material/Timeline";
import LineStyleIcon from "@mui/icons-material/LineStyle";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import LogoutIcon from "@mui/icons-material/Logout";

import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Sidebar() {
	const { dispatch } = useContext(AuthContext);
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyleIcon className="sidebarIcon" />
								Home
							</li>
						</Link>
						{/* <li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUpIcon className="sidebarIcon" />
							Sales
						</li> */}
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								<PermIdentityIcon className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/movies" className="link">
							<li className="sidebarListItem">
								<PlayCircleOutlineIcon className="sidebarIcon" />
								Movies
							</li>
						</Link>
						<Link to="/lists" className="link">
							<li className="sidebarListItem">
								<ListIcon className="sidebarIcon" />
								Lists
							</li>
						</Link>
						<Link to="/newMovie" className="link">
							<li className="sidebarListItem">
								<AddToQueueIcon className="sidebarIcon" />
								Add Movie
							</li>
						</Link>
						<Link to="/newList" className="link">
							<li className="sidebarListItem">
								<QueuePlayNextIcon className="sidebarIcon" />
								Add List
							</li>
						</Link>
						<li className="sidebarListItem">
							<LogoutIcon />
							<span onClick={() => dispatch(logout())}>Logout</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
