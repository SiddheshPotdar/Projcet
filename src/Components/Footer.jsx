import React from "react";
import styles from "./Styles/Footer.module.css";
//*Icon imports
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.msg}>
				<h2>Message to Users</h2>
				<p className={styles.msgPara}>
					"Thank you for visiting our Smart Helmet website. We hope
					that you have found the information and products that you
					need to make your next ride safer and more enjoyable. Our
					team is dedicated to providing you with the latest
					information about smart helmets and helping you find the
					perfect product for your needs. If you have any questions or
					concerns about our products, please do not hesitate to
					contact us. We are always happy to assist you and provide
					you with the information that you need. Don't forget to
					follow us on social media to stay updated on the latest
					smart helmet technology, news, and promotions. You can find
					us on Facebook, Twitter, and Instagram. Thank you for
					choosing our Smart Helmet website, and we look forward to
					serving you again in the future."
				</p>
			</div>
			<div className={styles.content}>
				<div className={styles.col}>
					<h2>Site Links</h2>
					<li>Contact Us</li>
					<li>About Us</li>
					<li>Blog</li>
				</div>
				<div className={styles.col}>
					<h2>About</h2>
					<li>Our Story</li>
					<li>Benefits</li>
					<li>Team</li>
				</div>

				<div className={styles.col}>
					<h2>Legal</h2>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
					<li>Terms of use</li>
				</div>
			</div>
			<div className={styles.social}>
				<span>Follow us on</span>
				<InstagramIcon
					color="secondary"
					className={styles.socialIcon}
					sx={{ cursor: "pointer" }}
				/>
				<FacebookIcon
					color="primary"
					className={styles}
					sx={{ cursor: "pointer" }}
				/>
				<TwitterIcon
					color="info"
					className={styles}
					sx={{ cursor: "pointer" }}
				/>
			</div>
		</div>
	);
};

export default Footer;
