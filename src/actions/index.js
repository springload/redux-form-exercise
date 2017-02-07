// Ok, let's say the user started typing something in the input of ExerciseZero
// The onClick function is triggered.
// This one comes from IntelligentExerciseZero
// and it dispatches an action
// This action (changeValue) is defined here
// Meet me in ../reducers/exercise0.js once you've understood this file
import actionTypes from './constants';

// This is a function that creates an action
// it get some data (here an event)
// and then returns an object with a type (mandatory)
// and some other params which will be used inside the reducer
// It's following the FSA convention: https://github.com/acdlite/flux-standard-action#flux-standard-action
export const exerciseZeroFormSubmit = (submit) => {
    return {
        type: actionTypes.EXERCISE_ZERO_FORM_SUBMIT,
        payload: {
            weather: submit.weather,
            mood: submit.mood,
        },
    };
};

export const exerciseTwoFormSubmit = (submit) => {
    return {
        type: actionTypes.EXERCISE_TWO_FORM_SUBMIT,
        payload: {
            ticked: submit.ticked,
            name: submit.name,
        },
    };
};
