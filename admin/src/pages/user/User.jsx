import {
	CalendarToday,
	// LocationSearching,
	MailOutline,
	PermIdentity,
	// PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";

export default function User() {
	const location = useLocation();
	const user = location.user;
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src={
								user.profilePic ||
								"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
							}
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">{user.username}</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">{user.username}</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">10.12.1999</span>
						</div>
						<span className="userShowTitle">Contact Details</span>

						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">{user.email}</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="annabeck99@gmail.com"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									className="userUpdateImg"
									src={
										user.profilePic ||
										"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
									}
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<input type="file" id="file" style={{ display: "none" }} />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
