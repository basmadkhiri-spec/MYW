const passions = [
  'Art',
  'Music',
  'Sport',
  'Technology',
  'Entrepreneurship'
];

const data = {
  under18: {
    title: 'Under 18',
    categories: {
      education: {
        title: 'Education',
        items: [
          {
            title: 'Competitions',
            description: 'Join youth competitions that build confidence, creativity, and public speaking skills.',
            tags: ['All'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Scholarships',
            description: 'Explore scholarship opportunities for talented students and school achievers.',
            tags: ['Funding', 'Academic'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Hackathons',
            description: 'Build prototypes and solve local challenges with peers in coding competitions.',
            tags: ['Technology', 'Innovation'],
            passions: ['Technology'],
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Olympiads',
            description: 'Take part in national and international olympiads that stretch your thinking.',
            tags: ['Academic', 'STEM'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Hack Club',
            description: 'Join a student-driven club focused on coding, creativity, and collaborative innovation.',
            tags: ['Club', 'Technology'],
            passions: ['Technology'],
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      passions: {
        title: 'Passions',
        items: [
          {
            title: 'Art',
            description: 'Discover art workshops, drawing competitions, and creative camps for young creators.',
            tags: ['Creative', 'Visual Arts'],
            passions: ['Art'],
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Music',
            description: 'Explore music schools, festivals, and youth ensembles to build your sound.',
            tags: ['Performance', 'Music'],
            passions: ['Music'],
            image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Sport',
            description: 'Find sports clubs, youth tournaments, and training camps to grow your athletic potential.',
            tags: ['Movement', 'Athletics'],
            passions: ['Sport'],
            image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Technology',
            description: 'Access robotics, coding clubs, AI learning spaces, and innovation programs.',
            tags: ['Coding', 'Robotics'],
            passions: ['Technology'],
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Entrepreneurship',
            description: 'Learn startup basics and participate in youth business challenges and ideas competitions.',
            tags: ['Startup', 'Business'],
            passions: ['Entrepreneurship'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
          }
        ]
      }
    }
  },
  '18plus': {
    title: '18+',
    categories: {
      education: {
        title: 'Education',
        items: [
          {
            title: 'Scholarships',
            description: 'Find funding opportunities for higher education, postgraduate study, and research.',
            tags: ['Funding', 'Academic'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Courses',
            description: 'Explore online and in-person courses in business, design, data, language, and more.',
            tags: ['Learning', 'Flexible'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Competitions',
            description: 'Take part in challenge-based competitions that strengthen your portfolio and confidence.',
            tags: ['Challenge', 'Growth'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      volunteering: {
        title: 'Volunteering',
        items: [
          {
            title: 'Opportunities in Morocco',
            description: 'Support community projects, youth initiatives, and social impact programs locally.',
            tags: ['Local impact'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Opportunities abroad',
            description: 'Volunteer internationally and build cultural experiences while giving back.',
            tags: ['Global'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      skills: {
        title: 'Skills',
        items: [
          {
            title: 'Workshops',
            description: 'Develop practical skills in communication, leadership, design, and project management.',
            tags: ['Practical'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Bootcamps',
            description: 'Intensive training programs to quickly gain in-demand digital and professional skills.',
            tags: ['Career', 'Fast track'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Certifications',
            description: 'Earn recognized certificates that validate your abilities and attract employers.',
            tags: ['Credentials'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'CV Strengthening',
            description: 'Find programs and mentorship that help improve your resume, profile, and portfolio.',
            tags: ['Portfolio', 'Career'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      jobs: {
        title: 'Jobs & Internships',
        items: [
          {
            title: 'Jobs',
            description: 'Explore entry-level roles and internships in tech, media, hospitality, and public service.',
            tags: ['Career'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Internships',
            description: 'Gain real work experience with youth-friendly internship opportunities across sectors.',
            tags: ['Experience'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      international: {
        title: 'International Opportunities',
        items: [
          {
            title: 'Exchanges',
            description: 'Apply for cultural exchange programs to learn, network, and grow globally.',
            tags: ['Global'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Camps',
            description: 'Travel, learn, and collaborate through leadership and international summer camps.',
            tags: ['Summer', 'Discovery'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      passions: {
        title: 'Passions',
        items: [
          {
            title: 'Art',
            description: 'Join creative communities, design programs, exhibitions, and artistic residencies.',
            tags: ['Creative'],
            passions: ['Art'],
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Music',
            description: 'Discover music production, performance opportunities, and cultural collaborations.',
            tags: ['Sound', 'Expression'],
            passions: ['Music'],
            image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Sport',
            description: 'Advance in coaching, sports management, training academies, and athletic events.',
            tags: ['Performance'],
            passions: ['Sport'],
            image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Technology',
            description: 'Find coding bootcamps, AI programs, tech internships, and innovation hubs.',
            tags: ['Digital'],
            passions: ['Technology'],
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Entrepreneurship',
            description: 'Access incubators, startup challenges, mentorship, and youth-led business programs.',
            tags: ['Business'],
            passions: ['Entrepreneurship'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
          }
        ]
      },
      youthPrograms: {
        title: 'Youth Programs',
        items: [
          {
            title: 'Clubs',
            description: 'Connect with student and youth clubs that build belonging and leadership skills.',
            tags: ['Community'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Associations',
            description: 'Meet professional and youth associations for networking and learning opportunities.',
            tags: ['Networking'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
          },
          {
            title: 'Leadership programs',
            description: 'Build team management and community leadership through structured programs.',
            tags: ['Leadership'],
            passions: ['all'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
          }
        ]
      }
    }
  }
};

const state = {
  age: 'under18',
  passion: 'Technology'
};

const sectionsContainer = document.getElementById('sectionsContainer');
const passionSelector = document.getElementById('passionSelector');
const selectedSummary = document.getElementById('selectedSummary');
const summaryList = document.getElementById('summaryList');
const exploreBtn = document.getElementById('exploreBtn');

function formatPassionLabel(name) {
  return name === 'Entrepreneurship' ? 'Entrepreneurship' : name;
}

function getVisibleItems(items) {
  const selected = state.passion.toLowerCase();

  return items.filter((item) => {
    const interests = (item.passions || []).map((value) => String(value).toLowerCase());
    return interests.includes('all') || interests.includes(selected);
  });
}

function renderPassions() {
  passionSelector.innerHTML = passions
    .map(
      (passion) => `
        <button class="passion-chip ${state.passion === passion ? 'active' : ''}" data-passion="${passion}">
          ${passion}
        </button>
      `
    )
    .join('');

  document.querySelectorAll('.passion-chip').forEach((button) => {
    button.addEventListener('click', () => {
      state.passion = button.dataset.passion;
      renderPassions();
      renderSections();
      updateSummary();
    });
  });
}

function renderSections() {
  const currentData = data[state.age];
  const categoryEntries = Object.entries(currentData.categories);

  sectionsContainer.innerHTML = categoryEntries
    .map(([key, category]) => {
      const visibleItems = getVisibleItems(category.items);
      const itemsToRender = visibleItems.length ? visibleItems : category.items.slice(0, 3);

      return `
        <article class="category-block" id="${key}">
          <div class="category-header">
            <h3>${category.title}</h3>
            <span class="category-pill">${itemsToRender.length} opportunities</span>
          </div>
          <div class="opportunity-grid">
            ${itemsToRender
              .map(
                (item) => `
                  <div class="opportunity-card">
                    <div class="card-photo" style="background-image: url('${item.image}')"></div>
                    <div class="card-body">
                      <h4>${item.title}</h4>
                      <p>${item.description}</p>
                      <div class="opportunity-meta">
                        ${(item.tags || []).slice(0, 2).map((tag) => `<span class="meta-badge">${tag}</span>`).join('')}
                      </div>
                    </div>
                  </div>
                `
              )
              .join('')}
          </div>
          ${visibleItems.length === 0 ? '<div class="empty-state">No exact match for this passion yet — explore the broader opportunities in this category.</div>' : ''}
        </article>
      `;
    })
    .join('');
}

function updateSummary() {
  const ageLabel = data[state.age].title;
  const passionLabel = formatPassionLabel(state.passion);
  selectedSummary.textContent = `${ageLabel} · ${passionLabel}`;

  const recommendations = [];

  Object.values(data[state.age].categories).forEach((category) => {
    const matches = getVisibleItems(category.items);
    if (matches.length > 0) {
      recommendations.push({ label: category.title, count: matches.length });
    }
  });

  summaryList.innerHTML = recommendations
    .slice(0, 3)
    .map(
      (item) => `
        <div class="summary-item">
          <span>${item.label}</span>
          <strong>${item.count}</strong>
        </div>
      `
    )
    .join('');
}

function bindAgeButtons() {
  document.querySelectorAll('.age-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.age = button.dataset.age;
      document.querySelectorAll('.age-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
      renderSections();
      updateSummary();
    });
  });
}

exploreBtn.addEventListener('click', () => {
  document.getElementById('opportunities').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

renderPassions();
bindAgeButtons();
renderSections();
updateSummary();
