import React from 'react';

import './components/CourseGoals/CourseGoalList';
import './components/CourseGoals/CourseInput';
import './App.css';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

function App() {
  return (
    <div className="App">
      <CourseInput />
      <CourseGoalList />
    </div>
  );
}

export default App;
