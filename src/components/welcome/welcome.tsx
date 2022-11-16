import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { HtmlRenderer, Parser } from 'commonmark'
import tmplPath from '../../template/welcome.md'
export default class Welcome extends Component {
  private tmpl: string
	constructor(props) {
		super(props);
    let parser = new Parser()
    let renderer = new HtmlRenderer()
    this.tmpl = renderer.render(parser.parse("**works** like a charm!"))
	}

  componentWillMount() {
    fetch(`../../template/welcome.md`).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

	render () {
    return (
      <div dangerouslySetInnerHTML={ {__html: this.tmpl} } />
    )
  }
}

// export default Welcome;
