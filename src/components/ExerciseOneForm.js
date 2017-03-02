import React  from 'react';

const propTypes = {};

const defaultProps = {};

const ExerciseOneForm = () => (
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
        {
            // Add your form here...
            // Result must be displayed as "[numberSubmitted] is '[frenchNumber]' in French."
            // Example: 2 is 'deux' in French.
        }
        <hr />
    </div>
);

ExerciseOneForm.propTypes = propTypes;
ExerciseOneForm.defaultProps = defaultProps;

export default ExerciseOneForm;
