import "./styles/Projects.css";

const projects = [
  {
    title: "Security Camera System using YOLO",
    date: "2023",
    description: "Designed and developed a real-time security camera system using the YOLO object detection algorithm. Implemented live video streaming and frame-by-frame processing using OpenCV. Enabled real-time detection and tracking of multiple objects with high accuracy. Optimized detection speed and handled model integration using pre-trained YOLO weights.",
    tools: "Python, YOLO, OpenCV, Anaconda"
  },
  {
    title: "Grammar and Spell Checker",
    date: "2024",
    description: "Developed a responsive web-based grammar and spell checker application using React. Implemented real-time spell checking and basic grammar correction for user input text. Used efficient client-side logic to highlight incorrect words and sentences, providing instant correction suggestions. Designed a clean, user-friendly interface.",
    tools: "React, JavaScript"
  },
  {
    title: "VitalAI: Diet and Health Aide",
    date: "2025",
    description: "Developed an AI-driven health and diet recommendation system. Built a responsive frontend using React and Vite. Implemented a backend using Flask to process user data and generate personalized recommendations via RESTful APIs. Deployed backend using Gunicorn for improved performance.",
    tools: "React, Vite, Flask, Python"
  }
];

const Projects = () => {
  return (
    <div className="projects-section section-container" id="work">
      <div className="projects-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-tools"><strong>Tools:</strong> {project.tools}</p>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
