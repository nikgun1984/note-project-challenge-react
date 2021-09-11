import React from "react";

const NoteItem = (props) => (
	<li onClick={() => props.handleClick(props.id)}>
		<h2>{props.title}</h2>
		<p>{props.body}</p>
	</li>
);

export default NoteItem;
