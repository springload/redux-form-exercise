import actionTypes from '../actions/constants';

const initialState = {
    initialFormValues: {
        name: '',
        text: '',
    },
};

const exerciseThreeFormSubmit = (state, payload) => {
    return Object.assign({}, state, {
        text: payload.text,
        name: payload.name,
    });
};

const exercise3 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.EXERCISE_THREE_FORM_SUBMIT:
        return exerciseThreeFormSubmit(state, action.payload);
    default:
        return state;
    }
};

export default exercise3;
