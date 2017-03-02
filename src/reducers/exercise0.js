// Nothing really different from a usual reducer in here
// We only catch the form submission action
// But we could catch some default redux-form actions
// like for instance "@@redux-form/BLUR", etc.
// and update the state on the fly of these actions.
// You can see the list of action creators here: http://redux-form.com/6.5.0/docs/api/ActionCreators.md/
import actionTypes from '../actions/constants';

const initialState = {
    initialFormValues: {
        weather: 'Windy',
        mood: '',
    },
};

const exerciseZeroFormSubmit = (state, payload) => {
    return Object.assign({}, state, {
        weather: payload.weather,
        mood: payload.mood,
    });
};

const exercise0 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.EXERCISE_ZERO_FORM_SUBMIT:
        return exerciseZeroFormSubmit(state, action.payload);
    default:
        return state;
    }
};

export default exercise0;
// Ok let's check how this has been set up. Meet me in /store/configureStore.js
