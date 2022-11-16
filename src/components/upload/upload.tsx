import React, { Component, useState } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../../configuration';
import _ from 'lodash';

export default function Upload() {
	const [file, setFile] = useState<any>();

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	function handleSubmit(event) {
		const { IMAGE_SCAN_URL, ERROR_FILE_MISSING, ERROR_FILE_TYPE, FILE_TYPE } = ENV_CONFIG;
		event.preventDefault();
		location;
		const url = IMAGE_SCAN_URL;
		console.log('url', url);
		console.log('file', file);
		if (!file) {
			return console.error(ERROR_FILE_MISSING);
		}
		if (file.type !== FILE_TYPE) {
			return console.error(ERROR_FILE_TYPE);
		}

		var formdata = new FormData();
		formdata.append('imageFile', file, file.name);

		var requestOptions: any = {
			method: 'POST',
			body: formdata,
			redirect: 'follow'
		};

		fetch('http://localhost:10200/scan', requestOptions)
			.then((response) => response.text())
			.then((result) => console.log(`result`,result))
			.catch((error) => console.log('error', error));
	}

	return (
		<div className="col-5 m-3">
			<form onSubmit={handleSubmit}>
				<h1>React File Upload</h1>
				<input type="file" className="form-control mb-3" onChange={handleChange} />
				<button type="submit" className="btn btn-primary">
					Upload
				</button>
			</form>
		</div>
	);
}
// https://www.filestack.com/fileschool/react/react-file-upload/
