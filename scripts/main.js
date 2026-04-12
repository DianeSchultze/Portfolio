const floatyContainer = document.querySelector('#floaties');

const floatySymbols = ['✦', '✿', '♡', '☁'];

const createFloaties = () => {
  if (!floatyContainer) return;

  for (let i = 0; i < 18; i++) {
    const floaty = document.createElement('span');
    floaty.className = 'floaty';
    floaty.textContent =
      floatySymbols[Math.floor(Math.random() * floatySymbols.length)];

    floaty.style.left = `${Math.random() * 100}%`;
    floaty.style.animationDuration = `${Math.random() * 10 + 12}s`;
    floaty.style.animationDelay = `-${Math.random() * 12}s`;
    floaty.style.fontSize = `${Math.random() * 16 + 16}px`;

    floatyContainer.appendChild(floaty);
  }
};

const projects = [
  {
    title: 'Shangri-La Beach Resort',
    subtitle: 'Website Redesign',
    desc: 'A luxury beach resort website redesign built with HTML, CSS, and JavaScript.',
    tags: [['HTML', ''], ['CSS', 'teal'], ['JavaScript', 'lav']],
    grad: 'grad-shangri',
    img: 'assets/heroImg/shangri-la.png',
    caseLink: 'case-studies/shangri.html',
    github: '#',
    live: '#'
  },
  {
    title: 'Wildrose Foundry',
    subtitle: 'HTML, CSS, JavaScript, PHP, MySQL',
    desc: 'A full-stack web platform with a custom admin panel and database-backed functionality.',
    tags: [['HTML', ''], ['CSS', 'teal'], ['PHP', 'peach'], ['MySQL', 'yel']],
    grad: 'grad-wildrose',
    img: 'assets/heroImg/wildrose-foundry.png',
    caseLink: 'case-studies/wildrose.html',
    github: '#',
    live: '#'
  },
  {
    title: 'DORC',
    subtitle: 'MERN Stack',
    desc: 'A MERN stack application with authentication, CRUD functionality, and a modern UI.',
    tags: [['MongoDB', ''], ['Express', 'teal'], ['React', 'lav'], ['Node', 'peach']],
    grad: 'grad-dorc',
    img: 'assets/heroImg/dorc.png',
    caseLink: 'case-studies/dorc.html',
    github: '#',
    live: '#'
  },
  {
    title: 'LiveScape',
    subtitle: 'Vite + React + APIs',
    desc: 'A React application with API integrations, real-time interactions, and dashboard features.',
    tags: [['Vite', 'teal'], ['React', 'lav'], ['APIs', 'peach']],
    grad: 'grad-livescape',
    img: 'assets/heroImg/livescape.png',
    caseLink: 'case-studies/livescape.html',
    github: '#',
    live: '#'
  },
  {
    title: 'Granted',
    subtitle: 'Scholarship Platform',
    desc: 'A student-focused platform designed to make scholarship searching easier and more approachable.',
    tags: [['HTML', ''], ['CSS', 'teal'], ['JavaScript', 'lav']],
    grad: 'grad-granted',
    img: 'assets/heroImg/granted.png',
    caseLink: 'case-studies/granted.html',
    github: '#',
    live: '#'
  },
  {
    title: 'Pokedex',
    subtitle: 'PokéAPI Project',
    desc: 'A playful Pokédex app built with HTML, CSS, JavaScript, and live Pokémon data from PokéAPI.',
    tags: [['HTML', ''], ['CSS', 'teal'], ['JavaScript', 'lav'], ['PokéAPI', 'peach']],
    grad: 'grad-pokedex',
    img: 'assets/heroImg/pokedex.png',
    caseLink: 'case-studies/pokedex.html',
    github: '#',
    live: '#'
  }
];

const createProjectCard = (project) => {
  const tagMarkup = project.tags
    .map(([label, className]) => `<span class="tag ${className}">${label}</span>`)
    .join('');

  return `
    <a class="project-card" href="${project.caseLink}">
      <div class="card-img ${project.grad}">
        <img
          src="${project.img || 'assets/placeholder.png'}"
          alt="${project.title} screenshot"
          class="project-thumb"
        >
      </div>

      <div class="card-body">
        <div class="card-tags">${tagMarkup}</div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-subtitle">${project.subtitle}</p>
        <p class="card-desc">${project.desc}</p>
      </div>

      <div class="card-footer">
        <span class="btn btn-outline btn-sm">Case Study</span>
      </div>
    </a>
  `;
};

const renderProjects = () => {
  const homeProjectGrid = document.querySelector('#homeProjectGrid');
  const allProjectGrid = document.querySelector('#allProjectGrid');

  if (homeProjectGrid) {
    homeProjectGrid.innerHTML = projects
      .slice(0, 6)
      .map(createProjectCard)
      .join('');
  }

  if (allProjectGrid) {
    allProjectGrid.innerHTML = projects.map(createProjectCard).join('');
  }
};

const handleContactForm = () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for your message ✿ You can wire this up to Formspree or EmailJS later.');
    form.reset();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createFloaties();
  renderProjects();
  handleContactForm();
});