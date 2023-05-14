import React from "react";
import styles from "./Styles/Main.module.css";
import Card from "../Components/Card";
import { CardContext } from "../Components/CardContext";

const Main = () => {
	return (
		<section className={styles.main}>
			{CardContext.map((card) => {
				console.log(card);
				return (
					<Card
						key={card.id}
						id={card.id}
						title={card.title}
						content={card.content}
						buttonText={card.buttonText}
						to={card.to}
					/>
				);
			})}
		</section>
	);
};

export default Main;
