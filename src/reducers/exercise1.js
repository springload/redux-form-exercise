import actionTypes from '../actions/constants';

const initialState = {
    initialFormValues: {
        number: '',
    },
};

const exerciseOneFormSubmit = (state, payload) => {
    const translation = {
        1: 'un',
        2: 'deux',
        3: 'trois',
    };
    return Object.assign({}, state, {
        numberSubmitted: payload.number,
        frenchNumber: translation[payload.number],
    });
};

const exercise1 = (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.EXERCISE_ONE_FORM_SUBMIT:
        return exerciseOneFormSubmit(state, action.payload);
    default:
        return state;
    }
};

export default exercise1;
