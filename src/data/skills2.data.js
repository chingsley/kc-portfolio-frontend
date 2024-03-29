export const categories = {
  backend: 'Backend',
  frontend: 'Frontend',
  design: 'Design',
  testingAndMonitoring: 'CI/CD and Testing',
};

export const skills = [
  {
    id: 1,
    title: 'Backend Web Development',
    category: categories.backend,
    tools: [
      'Node',
      'Express',
      'Hapi',
      'NextJS',
      'PostgreSQL',
      'Express',
      'RESTful API',
      'SQL',
      'Mongo DB',
      'PostgreSQL',
      'MSSQL',
      'MYSQL',
      'Python (Flask)',
      'Ruby on Rails',
    ],
  },
  {
    id: 2,
    title: 'Frontend Web Development',
    category: categories.frontend,
    tools: [
      'HTML',
      'CSS',
      'SASS',
      'LESS',
      'Bootstrap',
      'Javascript',
      'Typescript',
      'Jquery',
      'React',
      'Redux',
    ],
  },
  {
    id: 3,
    title: 'Web/Graphics Design',
    category: categories.design,
    tools: ['Sketch', 'Illustrator', 'Photoshop', 'Adobe XD', 'Figma'],
  },
  {
    id: 4,
    title: 'CI/CD and Testing',
    category: categories.testingAndMonitoring,
    tools: [
      'Travis CI',
      'Circle CI',
      'Heroku',
      'Netlify',
      'Mocha',
      'Chai',
      'Jasmine',
      'Jest',
      'Enzyme',
      'Capybara',
    ],
  },
];
