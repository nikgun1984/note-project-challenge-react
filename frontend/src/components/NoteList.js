import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, handleClick }) => {
	return (
		<ul>
			{notes.map((note) => (
				<NoteItem
					key={note.id}
					id={note.id}
					title={note.title}
					body={`${note.body.slice(0, 15)}...`}
					handleClick={handleClick}
				/>
			))}
		</ul>
	);
};

export default NoteList;
