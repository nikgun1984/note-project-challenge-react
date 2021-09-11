import React, { Fragment, Component } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			currentNote: null,
			editActivated: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.getData();
	}

	// componentDidUpdate(prevProps, prevState) {
	//  const nextState = this.state;
	// 	this.getData();
	// }

	getData = () => {
		fetch("http://localhost:3000/api/v1/notes")
			.then((response) => response.json())
			.then((nts) => this.setState({ notes: nts }));
	};

	handleClick(id) {
		console.log("IN HREERRERE");
		const obj = this.state.notes.find((note) => note.id === id);
		console.log(obj);
		this.setState((prevState) => ({
			...prevState,
			editActivated: false,
			currentNote: obj,
		}));
	}

	handleEditNote(id, title, body) {
		const noteId = this.state.notes.findIdx((note) => note.id === id);
		this.setState((prevState) => ({
			...prevState,
			notes: this.state.notes.map((note) => {
				if (note.id === noteId) {
					return {
						...note,
						body: note.body,
						title: note.title,
					};
				}
				return note;
			}),
		}));
	}

	changeEdit = () => {
		console.log("inhere lols");
		this.setState((prevState) => ({
			...prevState,
			editActivated: true,
		}));
	};

	render() {
		return (
			<Fragment>
				<Search />
				<div className="container">
					<Sidebar notes={this.state.notes} handleClick={this.handleClick} />
					<Content
						note={this.state.currentNote}
						handleEditNote={this.handleEditNote}
						editActivated={this.state.editActivated}
						changeEdit={this.changeEdit}
					/>
				</div>
			</Fragment>
		);
	}
}

export default NoteContainer;
