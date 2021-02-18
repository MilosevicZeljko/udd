import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Divider, Header, Segment } from 'semantic-ui-react';
import { createReader } from '../../actions/readerActions';
import InputField from '../InputField';
import Map from '../Map';
const regExpName = RegExp('^[a-zA-Z]{1,100}$');
const regExpMail = RegExp(
	"^[a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-z0-9]@[a-z0-9][-.]{0,1}([a-z][-.]{0,1})*[a-z0-9].[a-z0-9]{1,}([.-]{0,1}[a-z]){0,}[a-z0-9]{0,}$"
);
export const CreateReader = (props) => {
	const [ latitude, setLatitude ] = useState(45.254093);
	const [ longitude, setLongitude ] = useState(19.842483);
	const onSubmit = (formValues) => {
		console.log('submit', formValues);
		formValues.lat = latitude;
		formValues.lon = longitude;
		props.createReader(formValues);
	};

	return (
		<div className='ui container'>
			<Segment>
				<form onSubmit={props.handleSubmit(onSubmit)} className='ui form error'>
					<Divider horizontal>
						<Header as='h2'>Направите Читаоца</Header>
					</Divider>

					<div className='three fields'>
						<div className='field'>
							<Segment>
								<Field
									name='firstName'
									component={InputField}
									label='Име'
									type='text'
								/>
							</Segment>
						</div>
						<div className='field'>
							<Segment>
								<Field
									name='lastName'
									component={InputField}
									label='Презиме'
									type='text'
								/>
							</Segment>
						</div>

						<div className='field'>
							<Segment>
								<Field
									name='email'
									component={InputField}
									label='Меј'
									type='text'
								/>
							</Segment>
						</div>
					</div>
					<div className='two fields'>
						<div className='field'>
							<Segment>
								<h4>Географска ширина</h4>
								<input type='text' disabled value={latitude} />
							</Segment>
						</div>
						<div className='field'>
							<Segment>
								<h4>Географска дужина</h4>
								<input type='text' disabled value={longitude} />
							</Segment>
						</div>
					</div>
					<div className='field'>
						<div
							className='ui green fluid button'
							onClick={props.handleSubmit(onSubmit)}
						>
							Направи
						</div>
					</div>
					<Segment>
						<Map
							lat={latitude}
							long={longitude}
							setLatitude={setLatitude}
							setLongitude={setLongitude}
						/>
					</Segment>
				</form>
			</Segment>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { createReader };

const validate = (values) => {
	const errors = {};

	if (!regExpName.test(values.firstName) || values.firstName == null) {
		errors.firstName = 'Морате унети име';
	}
	if (!regExpName.test(values.lastName) || values.lastName == null) {
		errors.lastName = 'Морате унети презиме';
	}
	if (!regExpMail.test(values.email) || values.email == null) {
		errors.email = 'Морате унети мејл';
	}

	return errors;
};
const wrappedForm = reduxForm({ form: 'createReader', validate })(CreateReader);

export default connect(mapStateToProps, mapDispatchToProps)(wrappedForm);
