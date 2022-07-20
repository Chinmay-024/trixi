import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export default function WidgetSm() {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getNewUsers = async () => {
			try {
				const res = await axiosInstance.get(
					"/users?new=true",
					{
						headers: {
							token:
								"Bearer " +
								JSON.parse(localStorage.getItem("user")).accessToken,
						},
					}
				);
				setNewUsers(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getNewUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{newUsers.map((user) => (
					<li className="widgetSmListItem">
						<img
							src={
								user.profilePic ||
								"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
							}
							alt=""
							className="widgetSmImg"
						/>
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
						</div>
						<span className="widgetSmdetail">{user.email}</span>
						<button className="widgetSmButton">
							<VisibilityIcon className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
