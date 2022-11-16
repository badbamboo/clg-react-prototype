import React, { Component, useState } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../../configuration';
import _ from 'lodash';

export default function Upload() {

	const [file, setFile] = useState<any>();
	const [imageData, setImageData] = useState<any>();

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	function handleSubmit(event) {
		const { IMAGE_SCAN_URL, ERROR_FILE_MISSING, ERROR_FILE_TYPE, FILE_TYPE } = ENV_CONFIG;
		event.preventDefault();
		location;
		const url = IMAGE_SCAN_URL;
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
			body: formdata
		};

		fetch(url, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				console.log(`result`,result)
				setImageData(JSON.stringify(result));
			})
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
				<textarea  className="form-control mt-5" defaultValue={imageData} ></textarea>
			</form>
		</div>
	);
}
