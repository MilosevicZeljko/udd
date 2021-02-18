import React from 'react';

const renderError = ({ error, touched }) => {
	if (touched && error)
		return (
			<div className='ui error message'>
				<div className='header'>{error}</div>
			</div>
		);
};

export default function DropDownAutocomplete(props) {
	const { input, meta } = props;

	return (
		<div>
			<div>
				<div className='item'>
					<h4>{props.label}</h4>
					<select className='ui search dropdown' {...input}>
						<option value={null} />
						{props.list &&
							props.list.map((i) => {
								return (
									<option key={i} value={i}>
										{i}
									</option>
								);
							})}
					</select>
				</div>
			</div>
			<div>{renderError(meta)}</div>
		</div>
	);
}
