// Instantiate projects object

const projects =[
    {
        id: 1,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        mobileImage: 'mobile-modal.png',
        desktopImage: 'desktop-modal.png',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
        technologies2: ['html', 'Ruby on rails', 'css', 'Github'],
        container: 'projects',
    },
    {
        id: 2,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        mobileImage: 'mobile-modal.png',
        desktopImage: 'desktop-modal.png',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
        technologies2: ['html', 'Ruby on rails', 'css', 'Github'],
        container: 'projects reverse',
    },
    {
        id: 3,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        mobileImage: 'mobile-modal.png',
        desktopImage: 'desktop-modal.png',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
        technologies2: ['html', 'Ruby on rails', 'css', 'Github'],
        container: 'projects',
    },
    {
        id: 4,
        featuredImage: 'img-placeholder.png',
        title: 'Multi-Post Stories',
        mobileImage: 'mobile-modal.png',
        desktopImage: 'desktop-modal.png',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
        description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard dummy textever since the 1500s when an unknown printer took a standard dummy text.',
        technologies: ['css', 'html', 'Bootstrap', 'Ruby'],
        technologies2: ['html', 'Ruby on rails', 'css', 'Github'],
        container: 'projects reverse',
    },
];

const mainContainer = projects.map((work)=> ` <div class="projects-container">
<div class="${work.container}">
  <div class="img-placeholder">
    <img src="images/${work.featuredImage}" alt="${work.title}">
  </div>
  <div class="project-description">
    <h3>${work.title}</h3>
    <p>${work.description}</p>
    <ul class="list-tags">${work.technologies.map((technology)=> `<li class="border-right">${technology}</li>`).join('')}
    </ul>
    <button type="button" onclick="showModal(${work.id})">See Project</button>
  </div>
</div>
</div>`).join('');

// append the main container in js to the main-body container in html
const mainBody = document.querySelector(".frame");
mainBody.innerHTML+= mainContainer;

// The modal window

const modalWindow= document.querySelector(".modal-window");
const wrapContainer= document.querySelector(".wrapping-container");
const body =document.querySelector("body");

const windowContent = (modal)=> {
  const template= document.createElement('template');
  template.innerHTML = ` <div class="heading-container">
  <h2>${modal.title}</h2>
  <button class="close" onclick="closeModal()" type="button"><i class="fa-solid fa-xmark"></i></button>
</div>
<div class="modal-content">
  <img src="images/${modal.mobileImage}" class="image-placeholder mobile" alt="">
  <img src="images/${modal.desktopImage}" class="image-placeholder desktop" alt="">
  <p>${modal.desc}</p>
  <ul class="list-tags">${modal.technologies2.map((technology2)=> `<li class="border-right">${technology2}</li>`).join('')}
  </ul>
  <div class="submit">
    <button>See Live<img src="images/Icon.png" alt=""></button>
    <button>See Source<i class="fa-brands fa-github"></i></button>
  </div>
</div>`
modalWindow.appendChild(template.content);
wrapContainer.classList.add('active');
};

const showModal= (id)=> {
  projects.find((item)=>{
    if(Number(id)=== Number(item.id)){
      windowContent(item);
    }
    body.style.overflowY= "hidden";
    console.log(body.style.overflowY);
    return undefined;
  });
};

function closeModal() {
  modalWindow.innerHTML = '';
  wrapContainer.classList.remove('active');
  body.style.overflowY= "visible";
}
