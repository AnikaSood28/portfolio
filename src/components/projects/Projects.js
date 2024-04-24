import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Blood Bank Management System"
          des=" • Full-stack blood bank management system using the MERN stack.
          • Backend API with Express.js for managing blood inventory, donor information, and user authentication.
          • Frontend with React for a user-friendly interface and access to analytics.
          • Integrated authentication features for secure access.
          • Used MVC Architecture Pattern to ensure separation of data and functionality.
          • Successfully deployed for real-world usage."
          src={projectOne}
          githubLink={'https://github.com/AnikaSood28/Bloodmanager'}
        />
        <ProjectsCard
          title="Chat App"
          des=" • Authentication and Authorization using JSON Web Tokens (JWT) ensures secure access.
          • Real-time messaging functionality powered by Socket.io enables instant communication.
          • Display of online user status using Socket.io and React Context enhances user experience.
          • Global state management with Zustand ensures efficient handling of application state.
          • Comprehensive error handling ensures a smooth and robust user experience.
          • An improved version of the application is available on GitHub, where users can log into specific rooms and
          share their live location."
          src={projectTwo}
          githubLink={'https://github.com/AnikaSood28/ChatApp'}
        />
        <ProjectsCard
          title="Weather App"
          des=" • Accurate Location-Based Forecasts: Get precise weather info for your location.
          • Real-Time Updates: Instantly access the latest weather data.
          • Interactive Weather Maps: Visualize weather patterns easily.
          • Hourly/Daily Forecasts: Plan ahead with detailed predictions.
          • Severe Weather Alerts: Stay safe with timely notifications.
          • Customization Options: Personalize the app to your liking.
          "
          src={projectThree}
        />
        
        <ProjectsCard
          title="Task Manager App"
          des=" • Task Organization: Efficiently manage tasks with intuitive organization features.
          • Priority Settings: Set priorities to focus on urgent tasks first.
          • Deadline Reminders: Stay on track with timely reminders for task deadlines.
          • Collaboration Tools: Collaborate with team members by assigning and tracking tasks.
          • Progress Tracking: Monitor task progress to ensure goals are met effectively.
          • Customization Options: Tailor the app to your workflow with customizable features."
          src={projectOne}
          githubLink={'https://github.com/AnikaSood28/task-manager-api'}
        />
        
      </div>
    </section>
  );
}

export default Projects