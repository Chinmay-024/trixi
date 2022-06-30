import "./listItem.scss";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});
	// axios = axios.create({ baseURL: process.env.API_URL });

	useEffect(() => {
		const getMovie = async () => {
			try {
				const res = await axios.get(
					"http://localhost:8800/api/movies/find/" + item,
					{
						headers: {
							token:
								"Bearer " +
								JSON.parse(localStorage.getItem("user")).accessToken,
						},
					}
				);
				setMovie(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getMovie();
	}, [item]);

	return (
		<Link to={{ pathname: "/watch", movie: movie }}>
			<div
				className="listItem"
				style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie?.imgSm} alt="" />
				{isHovered && (
					<>
						<video src={movie.trailer} autoPlay={true} loop />
						<div className="itemInfo">
							<div className="icons">
								<PlayArrowIcon className="icon" />
								<AddIcon className="icon" />
								<ThumbUpAltOutlinedIcon className="icon" />
								<ThumbDownOutlinedIcon className="icon" />
							</div>
							<div className="itemInfoTop">
								<span>{movie.duration}</span>
								<span className="limit">+{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className="desc">{movie.desc}</div>
							<div className="genre">{movie.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
}