import React from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

function App() {
  return (
    <div>
      <CourseInput />
      <CourseGoalList />
    </div>
  );
}

export default App;
