import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ExerciseTwoForm from '../components/ExerciseTwoForm';
import * as actions from '../actions';

const formName = 'exercise2';

const validate = (values) => {
    const errors = {};

    if (values.name === '') { errors.name = 'Required'; }

    return errors;
};

const warn = (values) => {
    const warnings = {};

    const regex = new RegExp(/^[A-z]+$/);
    if (values.name && regex.test(values.name) === false) { warnings.name = 'Name should be only alphabetical'; }

    return warnings;
};

const mapStateToProps = (state) => {
    return {
        initialValues: state.exercise2.initialFormValues,
        ticked: state.exercise2.ticked,
        name: state.exercise2.name,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (submit) => { // Has to be named onSubmit here and will be given to Form as handleSubmit property
            dispatch(actions.exerciseTwoFormSubmit(submit));
        },
    };
};

const IntelligentExerciseTwoForm = reduxForm({
    form: formName,
    validate,
    warn,
})(ExerciseTwoForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IntelligentExerciseTwoForm);
