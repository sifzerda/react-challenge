import ProjectCard from './ProjectCard';

function ProjectList() {
  const projects = [
    {
      title: 'PWA Text Editor',
      image: 'path/to/image1.jpg',
      description: 'A Text Editor app built with Javascript and utilizing PWA technologies, including Webpack, a Service Worker, and IndexedDB for use and storage offline, deployed on Render.',
      projectUrl: 'https://jate-text-editor-10.onrender.com/',   
    },
    {
      title: 'MongoDB Social Network API',
      image: 'path/to/image2.jpg',
      description: 'Description of Project 2...',
      projectUrl: 'https://github.com/sifzerda/social-network-api',   
    },
    {
        title: 'Regex Tutorial: Hex Code',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/regex-tutorial',   
      },
      {
        title: 'MVC Tech Blog',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://young-brushlands-11834-82a452c6a69a.herokuapp.com/',   
      },
      {
        title: 'ORM E-commerce Back End',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/e-commerce-back-end',   
      },
      {
        title: 'MySQL Employee Tracker',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/SQL-employee-tracker',   
      },
      {
        title: 'Express Note Taker',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://mysterious-ravine-39693-dea3bc4026fc.herokuapp.com/',   
      },
      {
        title: 'OOP SVG Logo Maker',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/svg-logo-maker',   
      },
      {
        title: 'Node Professional README Generator',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/professional-README-generator',   
      },
      {
        title: 'Server-Side API Weather Dashboard',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/weather-dashboard',   
      },
      {
        title: 'Third Party API Work Day Scheduler',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://sifzerda.github.io/workday-scheduler',   
      },
      {
        title: 'Web API Coding Quiz',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/coding-quiz',   
      },
      {
        title: 'JavaScript Password Generator',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/js-password-generator',   
      },
      {
        title: 'CSS Professional Portfolio',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/professional-portfolio',   
      },
      {
        title: 'HTML CSS Git Code Refactor',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://github.com/sifzerda/horiseon-SEO-project',   
      },
    // Add more projects as needed
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
}

export default ProjectList;