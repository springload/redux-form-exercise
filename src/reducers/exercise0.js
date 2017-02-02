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
