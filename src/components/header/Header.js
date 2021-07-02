import React from "react";
import "./Header.css";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import NotificationsTwoToneIcon from "@material-ui/icons/NotificationsTwoTone";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import Logo from "./logo.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuSharpIcon />
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
					<AppsIcon />
				</IconButton>
				<IconButton>
					<NotificationsTwoToneIcon />
				</IconButton>
				<Avatar />
			</div>
		</div>
	);
};

export default Header;
