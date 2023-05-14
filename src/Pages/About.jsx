import React from "react";
import styles from "./Styles/About.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.intro} id="introduction">
				<h1>Introduction</h1>
				<p>
					Our smart helmet is more than just a helmet. It's a complete
					safety system that is designed to keep you safe on the road,
					no matter where your adventures take you. With advanced
					features like real-time accident detection, location
					tracking, and emergency alerts, our smart helmet provides
					unparalleled safety and peace of mind. Whether you're
					commuting to work, cruising around town, or exploring the
					open road, you can ride with confidence, knowing that you're
					protected by the latest in safety technology. But our smart
					helmet is more than just safe - it's also stylish and
					comfortable. Our designers have worked hard to create a
					helmet that looks great and feels great to wear, with a
					sleek, modern design that is sure to turn heads. And with
					easy-to-use controls and a simple, intuitive interface, our
					smart helmet is a joy to use. Whether you're adjusting the
					volume of your music, checking your speed, or reviewing your
					ride history, everything is just a touch away. So why settle
					for a traditional helmet when you can upgrade to the future
					of riding? Experience the safety, style, and convenience of
					our smart helmet today.
				</p>
			</div>
			<div className={styles.benefits} id="benefits">
				<h1>Benefits</h1>
				<p>
					<li>
						Real-time accident detection: Our smart helmet is
						equipped with sensors that detect accidents in
						real-time, alerting you and your emergency contacts
						immediately so that you can get the help you need as
						quickly as possible.
					</li>
					<li>
						Location tracking: Our smart helmet uses GPS technology
						to track your location in real-time, making it easy for
						your emergency contacts to find you in case of an
						accident or emergency.
					</li>
					<li>
						Emergency alerts: With the push of a button, you can
						send an emergency alert to your designated contacts,
						letting them know that you need help right away.
					</li>
					<li>
						Convenient controls: Our smart helmet features
						easy-to-use controls that make it simple to adjust the
						volume of your music, check your speed, or perform other
						actions, all without taking your hands off the
						handlebars.
					</li>
					<li>
						Improved safety: With real-time accident detection and
						emergency alerts, our smart helmet helps keep you safe
						while riding, giving you peace of mind and allowing you
						to enjoy your ride with confidence.
					</li>
					<li>
						Convenience: The smart helmet is easy to use and can be
						customized to fit your needs, with features like
						location tracking and emergency alerts.
					</li>
					<li>
						Cost-effective: Our smart helmet is an affordable way to
						improve your safety while riding, providing you with a
						high level of protection without breaking the bank.
					</li>
					<li>
						Stylish and comfortable: Designed with both style and
						comfort in mind, our smart helmet is sleek and modern,
						and can be customized to fit your personal style.
					</li>
				</p>
			</div>
			<div className={styles.aboutUs}>
				<h1>About Us</h1>
				<p>
					Welcome to our website, dedicated to smart helmets designed
					for a safer and more connected riding experience. <br /> Our
					smart helmets combine innovative technology with sleek
					design to provide riders with an unmatched level of comfort,
					protection, and convenience. Equipped with state-of-the-art
					features, our helmets are designed to make your ride safer,
					more comfortable, and more enjoyable. <br /> At the heart of
					our smart helmets is our advanced sensor technology, which
					enables us to provide riders with real-time data about their
					surroundings, including traffic, weather, and road
					conditions. With this information, riders can make informed
					decisions about their route and stay safe on the road.{" "}
					<br /> Our helmets also come equipped with integrated
					communication systems, allowing riders to stay connected
					with other riders, friends, and family members. With our
					helmets, you can make and receive calls, listen to music,
					and even navigate using voice commands, all without ever
					having to take your hands off the handlebars. In addition to
					our cutting-edge technology, our helmets are also designed
					with comfort in mind. Our helmets are lightweight and
					aerodynamic, providing a comfortable fit that won't weigh
					you down on long rides. And with our adjustable ventilation
					systems, you can easily regulate airflow to keep cool and
					comfortable in any weather. <br /> At our company, we are
					committed to providing our customers with the best possible
					experience on the road. Whether you're a casual rider or a
					professional racer, our smart helmets are designed to meet
					your needs and exceed your expectations. So why wait?
					Explore our website today to learn more about our products
					and find the perfect smart helmet for your needs!
				</p>
			</div>
		</div>
	);
};

export default About;
