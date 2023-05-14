import React from "react";
// import "./Styles/NavigationBar.css";
// * Css module imoport
import styles from "./Styles/NavigationBar.module.css";
// todo: Icons Import
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import logo from "../Images/logo2.png";

const NavigationBar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				{/* <img src={logo} alt="" /> */}
				<h3>UselessWebsite</h3>
			</div>
			<div className={styles.links}>
				<li>
					<a class={styles.link} href="/">
						Home
					</a>{" "}
				</li>
				<li>
					<a class={styles.link} href="/accidentInfo">
						Accident Info
					</a>{" "}
				</li>
				<li>
					<a class={styles.link} href="/about">
						About
					</a>{" "}
				</li>
				<li>
					<a class={styles.link} href="/contact">
						{" "}
						Contact
					</a>{" "}
				</li>
			</div>
			<div className={styles.options}>
				<div className={styles.searchBar}>
					<input type="text" placeholder="Search" />
					<SearchIcon className={styles.searchIcon} />
				</div>
				<ShoppingCartOutlinedIcon className={styles.icon} />
				<PersonOutlineOutlinedIcon className={styles.icon} />
			</div>
		</nav>
	);
};

export default NavigationBar;
