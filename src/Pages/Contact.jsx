import React from "react";
import styles from "./Styles/Contact.module.css";

const Contact = () => {
	return (
		<div className={styles.contactUs}>
			<h2>Contact Us</h2>
			<div className={styles.contactInfo}>
				<div className={styles.contactItem}>
					<i className="fas fa-map-marker-alt"></i>
					<p>123 Main Street, Anytown USA</p>
				</div>
				<div className={styles.contactItem}>
					<i className="fas fa-envelope"></i>
					<p>info@smarthelmets.com</p>
				</div>
				<div className={styles.contactItem}>
					<i className="fas fa-phone-alt"></i>
					<p>(123) 456-7890</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
