import React, { Component } from "react";
import NoteList from "./NoteList";

const Sidebar = ({ notes, handleClick }) => {
	return (
		<div className="master-detail-element sidebar">
			<NoteList notes={notes} handleClick={handleClick} />
			<button>New</button>
		</div>
	);
};

export default Sidebar;
