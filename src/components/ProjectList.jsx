import ProjectCard from './ProjectCard';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import JATEpic from '../assets/jate.jpg';
import notePic from '../assets/notetaker.jpg';
import techPic from '../assets/techblog.jpg';
import weatherPic from '../assets/weatherdashboard.jpg';
import schedulerPic from '../assets/workdayscheduler.jpg';
import quizPic from '../assets/codingquiz.jpg';
//import passwordPic from '../assets/passwordgenerator.jpg';
import tourdeforcePic from '../assets/tourdeforcePic.jpg';
import ficMap from '../assets/fictionmap.jpg';
import horrorMap from '../assets/horrormap.jpg';
import minePic from '../assets/mine.jpg';
import solPic from '../assets/solPic.jpg';
import asterPic from '../assets/aster.jpg';
import poolPic from '../assets/poolPic.jpg';
import musicPic from '../assets/musicPic.jpg';
import snakePic from '../assets/snakePic.jpg';
import paintPic from '../assets/paintPic.jpg';
import imagePic from '../assets/imagePic.jpg';
import gamePic from '../assets/gamePic.jpg';
import bandPic from '../assets/bandpic.jpg';

// https://www.npmjs.com/package/@tippyjs/react

function ProjectList() {
  const projects = [

    {
      title: 'Band Page',
      image: bandPic, 
      description: 'Made for my band to arrange jams and suggest songs. A fullstack app built with React, node, express, MongoDB, and graphql. Rehearsal availability calendar, music player, youtube audio search.',   
      projectUrl: 'https://bandpage-c5ed89244375.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/bandpage',    
    },

    {
      title: 'Game of Life',
      image: gamePic, 
      description: 'Plays out simulations of Game of Life (Conway). A frontend app built with React, and node. Play/pause/reset timed simulation, alter group size and quantity.',   
      projectUrl: 'https://game-of-life-49sl.vercel.app/',
      projectGitUrl: 'https://github.com/sifzerda/game-of-life',    
    },

    {
      title: 'ImageUp',
      image: imagePic, 
      description: 'Image uploading and hosting in cloud. A fullstack app built with React, node, mongoDB, graphql and hosted on MS Azure Cloud Storage. Users can save uploaded image URLs to profile or local storage for later retrieval.',   
      projectUrl: 'https://imageup-10-2401032e81d0.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/ImageUp',    
    },

    {
      title: 'Paint',
      image: paintPic, 
      description: 'MS Paint style app (Front end only). Built with React, node, and bootstrap. Users can draw with several different tools, make shapes, select, zoom, transform images, erase, delete, change colors, and save work as a jpg file. Deployed on Vercel.',   
      projectUrl: 'https://paint-sandy.vercel.app/',
      projectGitUrl: 'https://github.com/sifzerda/paint',    
    },

    {
      title: 'Snake',
      image: snakePic, 
      description: 'My attempt at making the arcade game Snake. The game is built in React, with Express, Node js, MongoDB, graphql, and Matter.js physics engine. Users can sign up, submit and view their best scores on their profile.',    
      projectUrl: 'https://snake-10-afd58bdf61b8.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/snake',    
    },

    {
      title: 'Music Player',
      image: musicPic, 
      description: 'A front end single page site with a music player. Made with React, Node, and React-player. Loaded with several songs that can be played, paused, and skipped. Volume adjustment and song progress bar.',    
      projectUrl: 'https://slotmachine-five.vercel.app/',
      projectGitUrl: 'https://github.com/sifzerda/music-player',    
    },

    {
      title: 'Eight Ball Pool',
      image: poolPic, 
      description: 'My attempt to make a version of 8 ball billiards. A fullstack app, built with React, Express, Node js, MongoDB, graphql, and Matter.js physics engine. Users can sign up, submit and view their best scores on their profile.',    
      projectUrl: 'https://eightball-10-c60b2e58af61.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/pool',    
    },

    {
      title: 'Asteroids',
      image: asterPic, 
      description: 'My attempt to make the retro arcade game Asteroids. A fullstack app, built with React, Express, Node js, MongoDB, graphql, and Matter.js physics engine. Users can sign up, submit and view their best scores on their profile.',    
      projectUrl: 'https://asteroids-10-d02b9b752090.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/asteroids',    
    },

    {
      title: 'Solitaire',
      image: solPic, 
      description: 'My attempt to make the game Solitaire. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up, submit and view their best times on their profile.',    
      projectUrl: 'https://solitaire-10-c835a42e5e11.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/solitaire',    
    },

    {
      title: 'Minesweeper',
      image: minePic, 
      description: 'My attempt to make the game Minesweeper. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up, submit and view their high scores on the score board or their profile.',    
      projectUrl: 'https://minesweeper10-611b154e8013.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/minesweeper',    
    },

    {
      title: 'The Horror Map',
      image: horrorMap, 
      description: 'This (unfinished) blog site provides a guide for horror fiction-writing. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up and leave comments on each page.',    
      projectUrl: 'https://horror-map-3b5accd83dc7.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/hmap',    
    },

    {
      title: 'The Fiction Map',
      image: ficMap, 
      description: 'This (unfinished) blog site provides a guide for fiction-writing. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up and leave comments on each page.',    
      projectUrl: 'https://fiction-map-d72538a215a2.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/fmap',    
    },

    {
      title: 'Tour de Force',
      image: tourdeforcePic,
      description: 'This is a design concept for a ticket purchasing app that allows users to browse music concerts, purchase a ticket, and buy show merchandise. The app is built with React, Bootstrap, and CSS, and uses an Express server, MongoDB and graphql at the back end. It is deployed on Heroku.',
      projectUrl: 'https://tour-de-force-397007b365cc.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/tour-de-force',
    },

    {
      title: 'PWA Text Editor',
      image: JATEpic,
      description: 'This is a Text Editor app built with Javascript, HTML and CSS, and runs on an Express Server. It utilizes PWA technologies, including Webpack, a Service Worker, and IndexedDB for use and storage offline. This app is deployed on Render.',
      projectUrl: 'https://jate-text-editor-10.onrender.com/',
      projectGitUrl: 'https://github.com/sifzerda/JATE-text-editor',
    },

    {
      title: 'MVC Tech Blog',
      image: techPic,
      description: 'This is a tech-themed blog with user authentication. It uses Javascript and Handlebars and runs on an Express server, using Sequelize models and a MySQL database. This app is deployed on Heroku.',
      projectUrl: 'https://young-brushlands-11834-82a452c6a69a.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/Tech-Blog',
    },

    {
      title: 'Express Note Taker',
      image: notePic,
      description: 'This is a note-taking app which runs in node.js. The front end is created through HTML and CSS. It runs on an Express server, and note data is saved JSON and local storage for later retrieval. This app is deployed on Heroku.',
      projectUrl: 'https://mysterious-ravine-39693-dea3bc4026fc.herokuapp.com/',
      projectGitUrl: 'https://github.com/sifzerda/note-taker',
    },

    {
      title: 'Server-Side API Weather Dashboard',
      image: weatherPic,
      description: 'This app has a weather display dashboard which searches by city name and returns a 5 day forecast using the Open Weather Map API. Data is saved in local storage for later retrieval. The app was created with HTML, CSS and Javascript, and is deployed on GitHub.',
      projectUrl: 'https://sifzerda.github.io/weather-dashboard/',
      projectGitUrl: 'https://github.com/sifzerda/weather-dashboard',
    },

    {
      title: 'Third Party API Work Day Scheduler',
      image: schedulerPic,
      description: 'This is a note taking app to help create, store, and display daily plans and activities. It was created using HTML, CSS, and Javascript. Data can be deleted or stored data through local storage for later retrieval. It is deployed on GitHub.',
      projectUrl: 'https://sifzerda.github.io/workday-scheduler/',
      projectGitUrl: 'https://github.com/sifzerda/workday-scheduler',
    },

    {
      title: 'Web API Coding Quiz',
      image: quizPic,
      description: 'This app launches a  coding-themed quiz. The UI was created in HTML, CSS, and Javascript. Users are presented multiple choice questions, and a wrong answer will deduct 10 seconds from the timer. Final score data is kept in local storage for later retrieval. This app was deployed in GitHub.',
      projectUrl: 'https://sifzerda.github.io/coding-quiz/',
      projectGitUrl: 'https://github.com/sifzerda/coding-quiz',
    },

    //      {
    //        title: 'JavaScript Password Generator',
    //        image: passwordPic,
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
        >
          {/* Tooltip */}
          <Tooltip title="Tooltip Content" position="top" trigger="mouseenter">
            <span>Hover over me</span>
          </Tooltip>
        </ProjectCard>
      ))}
    </div>
  );
}

export default ProjectList;
