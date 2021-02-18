import React from 'react';

const renderError = ({ error, touched }) => {
	if (touched && error)
		return (
			<div className='ui error message'>
				<div className='header'>{error}</div>
			</div>
		);
};

export default function InputField(props) {
	const { input, label, meta, type } = props;
	return (
		<div>
			<div>
				<div className='item'>
					<h4>{label} </h4>

					<input
						placeholder={label}
						type={type}
						{...input}
						// onFocus={this.props.removeCreateCarError}
					/>
				</div>
			</div>
			<div>{renderError(meta)}</div>
		</div>
	);
}
