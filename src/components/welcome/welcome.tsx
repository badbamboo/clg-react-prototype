import React, { Component } from 'react';
import MdTemplate from '../md-template/md-template';
import { APP_CONFIG } from '../../configuration';

export default class Welcome extends Component<{}, { tmplPath; tmplData }> {
	constructor(props) {
		super(props);
		const { tmplPath, tmplData } = APP_CONFIG.tmpl.welcomePage;
		this.state = { tmplPath, tmplData };
	}

	render() {
		const { tmplPath, tmplData } = this.state;
		return <MdTemplate tmplData={tmplData} tmplPath={tmplPath}></MdTemplate>;
	}
}
