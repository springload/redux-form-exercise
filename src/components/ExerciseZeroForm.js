import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';
import SelectField from './Form/SelectField';

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    weather: PropTypes.string,
    mood: PropTypes.string,
};

const options = [
    {
        label: '',
        value: '',
    },
    {
        label: 'Happy :)',
        value: 'happy',
    },
    {
        label: 'Sad :(',
        value: 'sad',
    },
];

const ExerciseZeroForm = ({ handleSubmit, submitSucceeded, weather, mood }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Exercise 0</legend>
                <div>
                    <Field
                        name="weather"
                        component={InputField}
                        type="text"
                        label="What's the weather like today?"
                    />
                    <Field
                        name="mood"
                        component={SelectField}
                        options={options}
                        label="How do you feel about it?"
                    />
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
        {submitSucceeded && (
            <div style={{ marginLeft: '10px', marginTop: '10px', color: 'green' }}>
                The weather is {weather} and you are {mood} about it. Good on you!
            </div>
        )}
    </div>
);

ExerciseZeroForm.propTypes = propTypes;

export default ExerciseZeroForm;
