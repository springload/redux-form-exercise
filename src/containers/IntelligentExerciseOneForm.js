import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExerciseOneForm from '../components/ExerciseOneForm';
import * as actions from '../actions';

const formName = 'numberToFrench';

// Exercise 1 TODO: Implement validate method and use it

const mapStateToProps = (state) => {
    return {
        initialValues: state.exercise1.initialFormValues,
        frenchNumber: state.exercise1.frenchNumber,
        numberSubmitted: state.exercise1.numberSubmitted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => { // Has to be named onSubmit here and will be given to Form as handleSubmit property
            dispatch(actions.exerciseOneFormSubmit(submit));
        },
    };
};

const IntelligentExerciseOneForm = reduxForm({
    form: formName,
})(ExerciseOneForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseOneForm);
