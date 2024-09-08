import React from 'react';
import './HomePage.css'; // Ensure this path is correct

const HomePage = () => (
  <div>
    <h1 className="main-heading">Welcome to the Project Management Tool</h1>
    <div className="content-wrapper">
      <div className="section">
        <h2 className="bold-text">Efficient Management</h2>
        <p>
          Our tool provides a seamless experience for managing projects efficiently. 
          Keep track of tasks, milestones, and deadlines with ease.
        </p>
        <p>
          Whether you are a team leader or a member, our platform is designed to enhance 
          productivity and streamline your workflow.
        </p>
      </div>
      <div className="section">
        <h2 className="bold-text">Get Started Today</h2>
        <p>
          Sign up now to start managing your projects and teams more effectively. 
          Our user-friendly interface makes onboarding simple and quick.
        </p>
        <p>
          Explore features tailored to your needs and experience a new level of project 
          management.
        </p>
        {/* <button>Get Started</button> */}
      </div>
    </div>
  </div>
);

export default HomePage;
