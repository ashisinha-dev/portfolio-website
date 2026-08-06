export const experience = [
  {
    org: 'IBM Research',
    roles: [
      {
        id: 'ibm-research',
        title: 'Graduate Researcher',
        company: 'IBM Research',
        dates: 'Jan 2026 – Present · 8 mos',
        location: 'Amherst, Massachusetts, United States',
        bullets: [
          'Recast deep research over data lakes as a budgeted search problem and built "Baikal," using embedding-based clustering to organize 13K+ tables and 240K passages into semantic regions.',
          'Formulated region selection as a multi-armed bandit balancing exploration–exploitation, using finding quality as a reward to update value estimates under ε-greedy and UCB policies.',
          'Designed an LLM-as-judge rubric (groundedness, relevance, distinctness, utility) scored by GPT-5-mini on HybridQA and TAT-QA, beating DeepSearcher and OpenCode baselines by 28% and 36%. Submitted to AAAI 2027.',
          'Conducted through the CS 698DS Industry Practicum at UMass Amherst, under the guidance of Prof. Andrew McCallum.',
        ],
        tech: ['PyTorch', 'Python', 'Natural Language Processing (NLP)', 'Reinforcement Learning', 'LangChain'],
        github: 'https://github.com/dhdhagar/baikal',
        paper: 'https://arxiv.org/abs/2607.27726',
      },
    ],
  },
  {
    org: 'UMass Amherst',
    roles: [
      {
        id: 'ciir-lab',
        title: 'Graduate Student Researcher',
        company: 'UMass Amherst · CIIR Lab',
        dates: 'Jul 2025 – Present · 1 yr 2 mos',
        location: 'Amherst, Massachusetts, United States',
        bullets: [
          'Developing a context-length scaling framework that uses a model’s behavior at shorter context lengths to predict how it would behave with substantially longer context.',
          'Applying knowledge distillation to improve factuality and generation quality when only limited context is available, without requiring expensive long-context inference.',
          'Conducted under the guidance of Prof. Haw-Shiuan Chang and Prof. Hamed Zamani.',
        ],
        tech: ['PyTorch', 'Python', 'Natural Language Processing (NLP)', 'Knowledge Distillation'],
      },
      {
        id: 'umass-ta',
        title: 'Graduate Teaching Assistant',
        company: 'Manning College of Information and Computer Sciences · Part-time',
        dates: 'Sep 2025 – Dec 2025 · 4 mos',
        location: 'Amherst, Massachusetts, United States',
        bullets: [
          'Assisted graduate-level CS 532 (Systems for Data Science) course faculty with course grading and operations (Fall 2025).',
        ],
        tech: ['Systems for Data Science'],
      },
    ],
  },
  {
    org: 'Amazon',
    roles: [
      {
        id: 'amazon-sde',
        title: 'Software Development Engineer',
        company: 'Amazon · Full-time',
        dates: 'Jul 2022 – Jul 2023 · 1 yr 1 mo',
        location: 'Chennai, Tamil Nadu, India · On-site',
        bullets: [
          'Implemented In-App Purchase (IAP) for Amazon Appstore using React Native and multi-threaded C++, reducing purchase-flow latency by 40%.',
          'Integrated deep-link routing into the purchase workflow, enabling users to enter checkout directly from app and product surfaces, reducing time-to-purchase by 55% during peak periods.',
          'Expanded GTest unit-testing coverage across core IAP transaction paths and edge cases, increasing code coverage by 70% and reducing regression risk in production releases.',
        ],
        tech: ['C++', 'JavaScript', 'React Native', 'TypeScript', 'Amazon Web Services (AWS)'],
      },
      {
        id: 'amazon-intern',
        title: 'Software Development Intern',
        company: 'Amazon · Internship',
        dates: 'Jan 2022 – Jun 2022 · 6 mos',
        location: 'Chennai, Tamil Nadu, India · On-site',
        bullets: [
          'Developed a Java/Android service from scratch that ranks installed FireTV apps by a multi-factor model (popularity, last-used time, storage size) and surfaces the top 5 deletion candidates, freeing an average of 5 GB per device.',
          'Deployed the service on AWS ECS/Fargate, integrating with internal build and version-management tooling to support scalable production releases.',
          'Resolved 20 bugs in the FireTV Android codebase through 12 code reviews and 8 server-side changes, improving app stability and shipping fixes to production.',
        ],
        tech: ['Java', 'Android', 'AWS ECS/Fargate'],
      },
    ],
  },
  {
    org: 'Microsoft',
    roles: [
      {
        id: 'microsoft-intern',
        title: 'Software Engineer Intern',
        company: 'Microsoft · Internship',
        dates: 'May 2021 – Jun 2021 · 2 mos',
        location: 'Hyderabad, Telangana, India',
        bullets: [
          'Engineered an NLP clustering pipeline in C# and Python for the Bing search team\'s "Triggering Expansion with Domain Graphs" initiative, grouping 1,000+ semantically similar queries and improving relevance for ambiguous searches by 25% based on NDCG evaluation on held-out queries.',
        ],
        tech: ['C#', 'Python', 'Natural Language Processing (NLP)'],
      },
      {
        id: 'microsoft-mentee',
        title: 'Mentee (Engage Mentorship Program / Codess)',
        company: 'Microsoft',
        dates: 'Jun 2020 · 1 mo',
        location: 'Remote',
        bullets: [
          'Selected for the Microsoft Engage mentorship program, where I developed a web-based Tic-Tac-Toe game with a minimax AI opponent using alpha-beta pruning.',
          'Features included multiplayer mode, adjustable difficulty levels, move hints, and a 4×4 board variant.',
        ],
        tech: ['JavaScript', 'CSS', 'HTML', 'Web Development', 'Artificial Intelligence', 'Minimax', 'Alpha-Beta Pruning'],
      },
    ],
  },
  {
    org: 'IUCAA, Pune',
    roles: [
      {
        id: 'iucaa',
        title: 'Research Intern',
        company: 'IUCAA, Pune, India',
        dates: 'May 2019 – Jun 2019 · 2 mos',
        location: 'Pune, Maharashtra, India · On-site',
        bullets: [
          'Developed a Python-based turbulence simulation at the Inter-University Centre for Astronomy and Astrophysics (IUCAA), implementing numerical methods to model fluid-flow behavior governed by the Navier–Stokes equations.',
          'Built computational workflows for differential-equation solving, simulation analysis, and visualization of complex fluid dynamics.',
        ],
        tech: ['Python', 'Numerical Methods'],
      },
    ],
  },
]
