import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { ENV_CONFIG } from '../../configuration';
import _ from 'lodash';

const { ALERT_DANGER, ALERT_INFO, ALERT_SUCCESS, ERROR_FILE_MISSING, ERROR_FILE_TYPE, FILE_ID, FILE_TYPE, MESSAGE, MESSAGE_TEXT, URL_SCAN } = ENV_CONFIG;

export default function Upload() {
	const [file, setFile] = useState<any>();
	const [imageData, setImageData] = useState<any>([MESSAGE]);
	const [alertVarient, setAlertVarient] = useState<any>(ALERT_INFO);

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	function handleSubmit(event) {
		setAlertVarient(ALERT_INFO);
		event.preventDefault();
		if (!file) {
			setAlertVarient(ALERT_DANGER);
			setImageData([{ ...MESSAGE, text: ERROR_FILE_MISSING }]);
			return console.error(ERROR_FILE_MISSING);
		}
		if (file.type !== FILE_TYPE) {
			setAlertVarient(ALERT_DANGER);
			setImageData([{ ...MESSAGE, text: ERROR_FILE_TYPE }]);
			return console.error(ERROR_FILE_TYPE);
		}
		const formdata = new FormData();
		formdata.append(FILE_ID, file, file.name);
		const requestOptions: any = {
			method: 'POST',
			body: formdata
		};
		setImageData([{ ...MESSAGE, text: MESSAGE_TEXT }]);
		fetch(URL_SCAN, requestOptions)
			.then((response) => response.text())
			.then((result) => {
				const { mac, serialNo } = JSON.parse(result);
				setAlertVarient(ALERT_SUCCESS);
				setImageData([
					{ ...MESSAGE, text: `MAC ADDRESS: ${mac}` },
					{ ...MESSAGE, text: `SERIAL NUMBER: ${serialNo}` }
				]);
			})
			.catch((error) => console.log('error', error));
	}
	return (
		<div className="m-3">
			<form className='row border' onSubmit={handleSubmit}>
				<div className="col-6 p-5">
					<h3 className="mb-4">React File Upload</h3>
					<input type="file" className="form-control mb-3" onChange={handleChange} />
					<button type="submit" className="btn btn-primary">
						Upload
					</button>
				</div>
				<div className="col-6 p-5">
					{imageData.map((nv: any) => {
						return (
							<Alert className="mt-3" key={alertVarient} variant={alertVarient}>
								{nv.text}
							</Alert>
						);
					})}
				</div>
			</form>
		</div>
	);
}
