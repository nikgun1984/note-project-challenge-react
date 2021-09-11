import React, { Component } from "react";

class NoteEditor extends Component {
	constructor(props) {
		super();
		this.state = {
			title: props.note.title,
			body: props.note.body,
		};
	}
	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	render() {
		return (
			<form className="note-editor">
				<input
					type="text"
					name="title"
					value={this.state.title}
					onChange={this.handleOnChange}
				/>
				<textarea
					name="body"
					value={this.state.body}
					onChange={this.handleOnChange}
				/>
				<div className="button-row">
					<input className="button" type="submit" value="Save" />
					<button type="button">Cancel</button>
				</div>
			</form>
		);
	}
}

export default NoteEditor;
