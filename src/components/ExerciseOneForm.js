import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    numberSubmitted: PropTypes.string,
    frenchNumber: PropTypes.string,
};

const defaultProps = {
    number: '',
};


const ExerciseOneForm = ({ handleSubmit, submitSucceeded, numberSubmitted, frenchNumber }) => (
    <div>
        <div>
            <h3>Exercise 1</h3>
            <p>
                Create a form that takes one input (using InputField component) with a type=number and translates this number into french. <br />
                Make sure to validate the number so it is not empty and is between 1 and 3 (included).
            </p>
            <p>
                <i>TODO: Implement form in /components/ExerciseOneForm.js &amp; /containers/IntelligentExerciseOneForm.js</i>
            </p>
        </div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <Field
                        name="number"
                        component={InputField} // Type of component to render
                        type="text"
                        label="Choose a number between 1 and 3"
                    />
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        {submitSucceeded && (
            <div style={{ marginLeft: '10px', marginTop: '10px', color: 'green' }}>
                The number {numberSubmitted} is {frenchNumber} in French
            </div>
        )}
        {
            // Add your form here...
            // Result must be displayed as "[numberSubmitted] is '[frenchNumber]' in French."
            // Example: 2 is 'deux' in French.
        }
        <div style={{ marginTop: '15px', borderBottom: '3px dotted black' }} />
    </div>
);

ExerciseOneForm.propTypes = propTypes;
ExerciseOneForm.defaultProps = defaultProps;

export default ExerciseOneForm;
