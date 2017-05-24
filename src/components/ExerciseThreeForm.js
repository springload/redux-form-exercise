import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';
import TextField from './Form/TextField';

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    name: PropTypes.string,
    text: PropTypes.string,
};

const defaultProps = {
    text: '',
    name: '',
};


const ExerciseThreeForm = ({ handleSubmit, submitSucceeded, name, text }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <div style={{ marginBottom: '10px' }}>
                        <Field
                            name="name"
                            type="text"
                            component={InputField}
                            label="Your name:"
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <Field
                            name="text"
                            type="textfield"
                            component={TextField}
                            label="Your text:"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        {submitSucceeded && (
            <div style={{ marginLeft: '10px', marginTop: '10px', color: 'green' }}>
                <p>{`${name || 'Unnamed'} has written this:` }</p>
                <p>{`${text}`}</p>
            </div>
        )}
    </div>
);


ExerciseThreeForm.propTypes = propTypes;
ExerciseThreeForm.defaultProps = defaultProps;

export default ExerciseThreeForm;
