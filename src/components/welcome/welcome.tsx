import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { HtmlRenderer, Parser } from 'commonmark';
import remarkGfm from 'remark-gfm';

export default class Welcome extends Component<{}, { tmpl: string }> {
	constructor(props) {
		super(props);
		this.state = { tmpl: '' };
	}

	componentDidMount() {
		const { PUBLIC_URL } = process.env;
		console.log('PUBLIC_URL', PUBLIC_URL);
		fetch(`template/welcome.md`)
			.then((response) => response.text())
			.then((tmpl) => {
				// console.log('text', text);
				// let parser = new Parser();
				// let renderer = new HtmlRenderer();
				// const tmpl = renderer.render(parser.parse(text));
				// console.log('tmpl', tmpl);
				this.setState({ tmpl });
			});
	}

	render() {
		const { tmpl } = this.state;
		return (
			<div className="table-container">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{tmpl}</ReactMarkdown>
			</div>
		)
	}
}

// export default Welcome;
