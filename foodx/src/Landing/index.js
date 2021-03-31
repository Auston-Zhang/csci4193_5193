import React, { useState } from 'react';
import './Landing.scss';
import Nav from '../../shared/Nav';
import Button from '../../shared/Button';
import db from '../../../firebase/db';

function Landing(props) {
  const[mealplan, setMealplan] = useState(null);

  return (
    <div>
      <Nav />
      <div className="Landing">
        <div className="Landing__banner">
        </div>
        <div className="Landing__data">
          <div className="Landing__data__content">
            <h1 style={{ fontSize: 37 }} >A Meal Planner that helps you reach your goals</h1>
            <ul>
              <li>Wasted a lot of time thinking about what I should make for dinner today</li>
              <li>Want to watch what I eat but don't know how?</li>
              <li>Not good at pre-planning meals</li>
              <li>Want to track my weight and calorie intake</li>
            </ul>
            <Button type="accent" path="/meal-plan" link={true} className="Landing__data__button">
              Make your meal plan now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;

