import React from 'react';

const propTypes = {};

const defaultProps = {};

const ExerciseOneForm = () => (
    <div>
        <div>
            <h3>Exercise 1</h3>
            <p>
                I need to be a form that takes an input (using InputField component) of type
                number and translates this number into french.<br />
                Please make sure the number is not empty and between 1 and 3 (included).
            </p>
            <p>
                Result must be displayed as "[numberSubmitted] is '[frenchNumber]' in French."<br />
                Example: 2 is 'deux' in French.
            </p>
            <p>
                TODO: Implement me in /components/ExerciseOneForm.js &amp; /containers/IntelligentExerciseOneForm.js
            </p>
        </div>
        {
            // Some code here probably ;)
        }
    </div>
);

ExerciseOneForm.propTypes = propTypes;
ExerciseOneForm.defaultProps = defaultProps;

export default ExerciseOneForm;
