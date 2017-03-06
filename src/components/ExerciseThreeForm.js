// TODO: Exercise 3 Modify me

import React from 'react';


const ExerciseThreeForm = () => (
    <div>
        <div>
            <h3>Exercise 3</h3>
            <p>
                I need to be a form that takes an input (using InputField component) name
                and a textarea (using a TextareaField component that you have to create).<br />
                Label for input is "Your name:" and label for textarea is
                "Your text:"<br />
                Please make sure the name is required and raise a warning if it is not only alphabetic string.<br />
                The textarea field is required, must be alphanumeric and allow spaces, "'" and "." characters. Raise an error if one of these conditions isn't respected.<br />
                You will raise a warning if the text doesn't contain the sentence 'This is super cool.'<br />
                Result must show something like that:<br />
            </p>
            <div style={{ border: '1px solid black', paddingLeft: '10px' }}>
                <p>TheGuyWhoMadeThisExercise has written this:</p>
                <p>Probably the best example I've ever seen on the internet. This is super cool. 34 is a number.</p>
            </div>
            <p>
                TODO: Implement me in actions, reducers, containers, /components/Form/TextareaField.js &amp;<br />
                Modify /components/ExerciseThreeForm.js
            </p>
        </div>
        {
            // Add your form here...
        }
    </div>
);

export default ExerciseThreeForm;
