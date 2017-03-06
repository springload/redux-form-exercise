// TODO: Exercise 2 Modify me

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
        <div>
            <h3>Exercise 2</h3>
            <p>
                I need to be a form that takes an input (using InputField component) name
                and a checkbox (using a CheckboxField component that you have to create).<br />
                Label for input is "Your name:" and label for checkbox is
                "I agree with these Terms and Conditions?"<br />
                Please make sure the name is required. It must be displayed with a "awesome" at the beginning of the string in the input.
                But it must be stored with the "awesome" shifted to the end of the string in the state.<br />
                For instance entering "myname" will be shown as "awesomemyname" inside the input but "mynameawesome" in the result message.<br />
                Also raise a warning if it is not only alphabetic string.
            </p>
            <p>
                Note: There is no need to modify the reducers or the actions.<br />
                Note 2: You should check http://redux-form.com/6.5.0/docs/api/Field.md/#props-you-can-pass-to-field- for the field formatting ;)
            </p>
            <p>
                TODO: Implement me in /components/Form/CheckboxField.js &amp;<br />
                Modify /components/ExerciseTwoForm.js &amp; /components/Form/InputField.js
            </p>
        </div>
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
    </div>
);

ExerciseTwoForm.propTypes = propTypes;
ExerciseTwoForm.defaultProps = defaultProps;

export default ExerciseTwoForm;
