import React from 'react';
import IntelligentExerciseZeroForm from '../containers/IntelligentExerciseZeroForm';
import IntelligentExerciseOneForm from '../containers/IntelligentExerciseOneForm';

// This is where we call the form containers
// It works like any other containers
// Note that I like to have a clear naming i.e. adding the 'Form' suffix
// to identify straight that the component is a form.
// Yes, it's a long name but at least you know what's going on.
// Meet me in /containers/IntelligentExerciseZeroForm.js
const App = () => (
    <div>
        <IntelligentExerciseZeroForm />
        <IntelligentExerciseOneForm />
    </div>
);

export default App;
