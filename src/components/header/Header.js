import React from "react";
import "./Header.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import { Avatar, IconButton } from "@material-ui/core";
import Logo from "./logo.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuRoundedIcon />
				</IconButton>
				<img src={Logo} alt="logo" />
			</div>
			<div className="header__middle">
				<SearchSharpIcon />
				<input placeholder="Search mail" type="text" />
				<KeyboardArrowDownRoundedIcon className="header__inputCaret" />
			</div>
			<div className="header__right">
				<IconButton>
					<AppsRoundedIcon />
				</IconButton>
				<IconButton>
					<NotificationsRoundedIcon />
				</IconButton>
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
