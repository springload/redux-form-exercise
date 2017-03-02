// Ok, let's say the user submitted the ExerciseZeroForm
// The onSubmit function from IntelligentExerciseZeroForm is triggered.
// It dispatches an action
// This action (exerciseZeroFormSubmit) is defined here
import actionTypes from './constants';

// After validation passed, redux-form gives to the onSubmit function
// all the values it has for this form.
// Then we get them through the action creator.
// I decided to parse the values in here and set them inside the payload.
// As it has passed the validation, I know that all these values are correct.
// NB: The action creator is following the FSA convention: https://github.com/acdlite/flux-standard-action#flux-standard-action
export const exerciseZeroFormSubmit = (submit) => {
    return {
        type: actionTypes.EXERCISE_ZERO_FORM_SUBMIT,
        payload: {
            weather: submit.weather,
            mood: submit.mood,
        },
    };
};

// Meet me in ../reducers/exercise0.js once you've understood this file
