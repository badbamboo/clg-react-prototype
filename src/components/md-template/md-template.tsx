import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import _ from 'lodash';

interface MdState {
	tmpl: string;
	[key: string]: any;
}

interface MdProps {
	tmplData: any;
	tmplPath: string;
}

export default class MdTemplate extends Component<MdProps, MdState> {
	state = {
		tmpl: ``
	};
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { tmplPath, tmplData } = this.props;
		console.log('tmplData', tmplData)
		fetch(tmplPath)
			.then((response) => response.text())
			.then((text) => {
				const compiled = _.template(text);
				const tmpl = compiled(tmplData);
				this.setState({ tmpl });
			});
	}

	render() {
		const { tmpl } = this.state;
		return (
			<div className="table-container">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{tmpl}</ReactMarkdown>
			</div>
		);
	}
}
