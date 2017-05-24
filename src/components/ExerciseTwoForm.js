import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';
import CheckboxField from './Form/CheckboxField';

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    ticked: PropTypes.bool,
    name: PropTypes.string,
};

const defaultProps = {
    ticked: false,
    name: '',
};

const ExerciseTwoForm = ({ handleSubmit, submitSucceeded, ticked, name }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Exercise 2</legend>
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
                            name="ticked"
                            type="checkbox"
                            component={CheckboxField}
                            label="I agree with these Terms and Conditions?"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        {submitSucceeded && (
            <div style={{ marginLeft: '10px', marginTop: '10px', color: 'green' }}>
                {ticked ?
                    `Congrats ${name || 'Unnamed'}, you just ticked the box for that exercise! (PUN INTENDED)`
                    :
                    `Come on ${name || 'Unnamed'}... tick that box...`
                }
            </div>
        )}
        <div style={{ marginTop: '15px', borderBottom: '3px dotted black' }} />
    </div>
);

ExerciseTwoForm.propTypes = propTypes;
ExerciseTwoForm.defaultProps = defaultProps;

export default ExerciseTwoForm;
