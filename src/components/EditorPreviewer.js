import React, { Component } from 'react';
import marked from 'marked';
import {PLACEHOLDER} from '../shared/placeholder';

marked.setOptions(
	{breaks:true}
);

class EditorPreviewer extends Component{
	constructor(props){
		super(props);

		this.state = {
			editorText : PLACEHOLDER
		};

		this.handleChange=this.handleChange.bind(this);
	};

	handleChange(event){
		this.setState(
			{editorText : event.target.value}
		)
	}

	render(){
		return(
			<React.Fragment>
				<div className="block" id="editorBlock">
					<div className="headerBlock">
						<h1>EDITOR</h1>
						<p>Type your markdown here</p>
					</div>
					<textarea id="editor" value={this.state.editorText}  onChange={this.handleChange}>
					</textarea>
				</div>
				<div className="block" id="previewerBlock">
					<div className="headerBlock">
						<h1>PREVIEWER</h1>
						<p>It will be rendered here</p>
					</div>
					<div id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.editorText)}}/>
				</div>
			</React.Fragment>
		);
	}
}

export default EditorPreviewer; 