import React, { useEffect, useRef, useState } from "react";
import styles from "./Styles/AccidentInfo.module.css";
// ! firebaes imports
import { db } from "../Context/FirebaseConfig";
import { collection, getDocs, orderBy } from "firebase/firestore";

const AccidentInfo = () => {
	const [accidents, setAccidents] = useState([]);
	const [accidentCount, setAccidentCount] = useState(0);
	const [recentAccident, setRecentAccident] = useState(null);

	const dataFetchRef = useRef(false);

	const getAccidents = async () => {
		const querySnapshot = await getDocs(
			collection(db, "accidents"),
			orderBy("Time", "desc")
		);
		querySnapshot.forEach((doc) => {
			// console.log(doc.data());
			setAccidents((prevAccidents) => [...prevAccidents, doc.data()]);
			setAccidentCount((prevAccidentCount) => prevAccidentCount + 1);
			setRecentAccident(doc.data());
		});
	};

	useEffect(() => {
		if (dataFetchRef.current) return;
		dataFetchRef.current = true;
		getAccidents();
	}, []);

	if (dataFetchRef.current) {
		return (
			<section className={styles.info}>
				<h2>Accident Info</h2>
				<div className={styles.cards}>
					{accidents.map((accident) => {
						const time = accident.Time.toDate().toString();
						return (
							<div className={styles.card}>
								<h5>
									{" "}
									<span>Location : </span> {accident.Location}
								</h5>
								<h5>
									{" "}
									<span>Time : </span>
									{time}
								</h5>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return (
			<section className={styles.info}>
				<h1 className={styles.loading}>Loading...</h1>;
			</section>
		);
	}
};

export default AccidentInfo;
