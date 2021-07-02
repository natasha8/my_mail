import { Button, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import AddRounded from "@material-ui/icons/AddRounded";
import InboxRoundedIcon from "@material-ui/icons/InboxRounded";
import React from "react";
import SidebarOption from "./SidebarOption";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccessTimeRoundedIcon from "@material-ui/icons/AccessTimeRounded";
import LabelImportantRoundedIcon from "@material-ui/icons/LabelImportantRounded";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import NoteRoundedIcon from "@material-ui/icons/NoteRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import DuoRoundedIcon from "@material-ui/icons/DuoRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Button
				className="sidebar__compose"
				startIcon={<AddRounded fontSize="large" />}
			>
				COMPOSE
			</Button>
			<SidebarOption
				Icon={InboxRoundedIcon}
				title="Inbox"
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={StarRoundedIcon} title="Starred" number={4} />
			<SidebarOption
				Icon={AccessTimeRoundedIcon}
				title="Snoozed"
				number={5}
			/>
			<SidebarOption
				Icon={LabelImportantRoundedIcon}
				title="Important"
				number={8}
			/>
			<SidebarOption Icon={NearMeRoundedIcon} title="Sent" number={23} />
			<SidebarOption Icon={NoteRoundedIcon} title="Draft" number={0} />
			<SidebarOption
				Icon={ExpandMoreRoundedIcon}
				title="More"
				number={0}
			/>
			<div className="sidebar__footer">
				<div className="sidebar__footerIcons">
					<IconButton>
						<PersonRoundedIcon />
					</IconButton>
					<IconButton>
						<DuoRoundedIcon />
					</IconButton>
					<IconButton>
						<PhoneIphoneRoundedIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
