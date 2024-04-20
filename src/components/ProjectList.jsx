import ProjectCard from './ProjectCard';

function ProjectList() {
  const projects = [
    {
      title: 'PWA Text Editor',
      image: 'path/to/image1.jpg',
      description: 'A Text Editor app built with Javascript and utilizing PWA technologies, including Webpack, a Service Worker, and IndexedDB for use and storage offline, deployed on Render.',
      projectUrl: 'https://jate-text-editor-10.onrender.com/', 
      projectGitUrl: 'https://github.com/sifzerda/JATE-text-editor',  
    },

      {
        title: 'MVC Tech Blog',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://young-brushlands-11834-82a452c6a69a.herokuapp.com/',
        projectGitUrl: 'https://github.com/sifzerda/Tech-Blog',    
      },

      {
        title: 'Express Note Taker',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://mysterious-ravine-39693-dea3bc4026fc.herokuapp.com/', 
        projectGitUrl: 'https://github.com/sifzerda/note-taker',   
      },

      {
        title: 'Server-Side API Weather Dashboard',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://sifzerda.github.io/weather-dashboard/',  
        projectGitUrl: 'https://github.com/sifzerda/weather-dashboard',  
      },

      {
        title: 'Third Party API Work Day Scheduler',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://sifzerda.github.io/workday-scheduler/',  
        projectGitUrl: 'https://github.com/sifzerda/workday-scheduler',  
      },

      {
        title: 'Web API Coding Quiz',
        image: 'path/to/image2.jpg',
        description: 'Description of Project 2...',
        projectUrl: 'https://sifzerda.github.io/coding-quiz/',   
        projectGitUrl: 'https://github.com/sifzerda/coding-quiz', 
      },

//      {
//        title: 'JavaScript Password Generator',
//        image: 'path/to/image2.jpg',
//        description: 'Description of Project 2...',
//        projectUrl: 'https://sifzerda.github.io/password-generator/',   
//        projectGitUrl: 'https://github.com/sifzerda/js-password-generator',
//      },

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
          projectGitUrl={project.projectGitUrl}
        />
      ))}
    </div>
  );
}

export default ProjectList;