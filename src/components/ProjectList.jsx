import ProjectCard from './ProjectCard';

function ProjectList() {
  const projects = [
    {
      title: 'JATE Text Editor',
      image: 'path/to/image1.jpg',
      description: 'A Text Editor app built with Javascript and utilizing PWA technologies, including Webpack, a Service Worker, and IndexedDB for use and storage offline, deployed on Render.'
    },
    {
      title: 'Project 2',
      image: 'path/to/image2.jpg',
      description: 'Description of Project 2...',
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
        />
      ))}
    </div>
  );
}

export default ProjectList;