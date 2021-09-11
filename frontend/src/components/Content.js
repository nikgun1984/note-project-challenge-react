import React, { Component } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends React.Component {
	// ({ note, handleEditNote, editActivated, changeEdit })
	renderContent = () => {
		if (this.props.editActivated) {
			return (
				<NoteEditor
					handleEditNote={this.props.handleEditNote}
					editActivated={this.props.editActivated}
					note={this.props.note}
				/>
			);
		} else if (this.props.note && !this.props.editActivated) {
			return (
				<NoteViewer note={this.props.note} changeEdit={this.props.changeEdit} />
			);
		} else {
			return <Instructions />;
		}
	};
	render() {
		return (
			<div className="master-detail-element detail">{this.renderContent()}</div>
		);
	}
}

export default Content;
