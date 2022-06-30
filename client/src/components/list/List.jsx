import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ list }) {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = Math.round(listRef.current.getBoundingClientRect().x - 50);
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber((prev) => prev - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 9 - clickLimit) {
			setSlideNumber((prev) => prev + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
		console.log(clickLimit, slideNumber, distance);
	};
	return (
		<div className="list">
			<span className="listTitle">{list.title}</span>
			<div className="wrapper">
				<ArrowBackIosOutlinedIcon
					className="sliderArrow left"
					onClick={() => handleClick("left")}
					style={{ display: !isMoved && "none" }}
				/>
				<div className="container" ref={listRef}>
					{list.content.map((item, i) => (
						<ListItem key={i} index={i} item={item} />
					))}
				</div>
				<ArrowForwardIosOutlinedIcon
					className="sliderArrow right"
					onClick={() => handleClick("right")}
				/>
			</div>
		</div>
	);
}
