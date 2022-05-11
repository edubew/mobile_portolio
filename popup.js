// Instantiate projects object

const projects =[
    {
        id: 1,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    },
    {
        id: 2,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    },
    {
        id: 3,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    },
    {
        id: 4,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
    },
];

const mainContainer = projects.map((work)=> ` <div class="projects-container">
<div class="projects">
  <div class="img-placeholder">
    <img src="images/${work.featuredImage}" alt="${work.title}">
  </div>
  <div class="project-description">
    <h3>${work.title}</h3>
    <p>${work.description}</p>
    <ul class="list-tags">${work.technologies.map((technology)=> `<li class="border-right">${technology}</li>`).join('')}
    </ul>
    <button type="button">See Project</button>
  </div>
</div>
</div>`).join('');

// append the main container in js to the main-body container in html
const mainBody = document.querySelector(".frame");
mainBody.innerHTML+= mainContainer;