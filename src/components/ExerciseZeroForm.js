// This is the rendering part of your redux-form
import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import InputField from './Form/InputField';
import SelectField from './Form/SelectField';

// The "onSubmit dispatchToProps method" from the container is given as handleSubmit props in here.
// Why? I don't know. I agree it's a bit confusing but once you get used to it, it's all good.
// You can access to a lot of other props. Please refer to: http://redux-form.com/6.5.0/docs/api/Props.md/
// Keep in mind that to access them you will have to specify them in the container ;)
const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    weather: PropTypes.string,
    mood: PropTypes.string,
};

const defaultProps = {
    weather: 'Windy',
    mood: '',
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

// Here comes the JSX part
// The form is a stateless component in which we just plug the onSubmit (handleSubmit) method
// and display the right fields/results
// Fields are generated using the redux-form component <Field>
// To see more details about what you can do with it please refer to: http://redux-form.com/6.5.0/docs/api/Field.md/
// It basically requires at least a name and a rendering component eg. InputField or SelectField.
const ExerciseZeroForm = ({ handleSubmit, submitSucceeded, weather, mood }) => (
    <div>
        <div style={{ marginBottom: '10px' }}>
            <i>
                Use this exercise as a reference for a working example.
                Follow me through the file comments.<br />
                To start meet me in /src/index.js
            </i>
        </div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Exercise 0</legend>
                <div>
                    <Field
                        name="weather"
                        component={InputField} // Type of component to render
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
ExerciseZeroForm.defaultProps = defaultProps;

export default ExerciseZeroForm;

// That's what we are up to now. Meet me in /component/Form/InputField.js

