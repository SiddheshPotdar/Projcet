import React from "react";
import styles from "./Styles/Card.module.css";
import "./Styles/Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
	const navigate = useNavigate();
	const id = `card-${props.id}`;

	return (
		<div className={styles.card}>
			<div className={styles.img} id={id}></div>
			<div className={styles.content}>
				<h2 className={styles.title}>{props.title}</h2>
				<p className={styles.text}>{props.content}</p>
				<button
					className={styles.button}
					onClick={() => {
						if (props.to === "accidentInfo") {
							navigate("/accidentInfo");
						} else {
							navigate(`/about#${props.to}`);
						}
					}}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
};

export default Card;
