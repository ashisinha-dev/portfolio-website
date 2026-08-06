// TODO: add real images for each featured project (drop files in src/assets/projects/
// and set `image` to the imported path) and GitHub links for the "other" projects.

import recommenderCompanionImage from '../assets/projects/recommender-companion.png'

export const featuredProjects = [
  {
    id: 'clinical-reporting',
    title: 'Clinical Reporting Platform',
    context: 'One Vector Technologies (Early-Stage Health-Tech Startup) · Jun 2025 – Aug 2025',
    bullets: [
      'Automated Development Safety Update Report (DSUR) generation, reducing manual reporting effort by 85% via multi-section React/TypeScript forms with versioning, backed by Pandoc, DynamoDB, and S3.',
      'Delivered 8+ platform features, including secure Flask document-access APIs on AWS using presigned S3 URLs and caching, reducing file retrieval latency by 35%.',
      'Integrated a RAG-based medical document search workflow with OpenSearch and GPT-4 for searching, retrieving, and summarizing relevant medical documents.',
    ],
    tech: ['React', 'TypeScript', 'Python', 'Flask', 'AWS', 'DynamoDB', 'OpenSearch', 'GPT-4'],
    image: null,
    link: null,
    report: 'https://www.onevector.com/solutions',
  },
  {
    id: 'reporadar',
    title: 'RepoRadar: Codebase Summarizer',
    context: 'HackUMass XIII · Jul 2025',
    bullets: [
      'Built an AI-powered codebase summarization tool that helps developers understand large Python repositories by extracting imports, functions, classes, and file-level dependencies from repos with 150+ files.',
      'Engineered an end-to-end pipeline that parses Python repos with AST, chunks code, and generates schema-constrained LLM summaries with interactive Pyvis/NetworkX dependency graphs.',
      'Deployed the tool on AWS Elastic Beanstalk with caching, reducing request latency by 80% and API costs by 40%.',
    ],
    tech: ['Python', 'AST', 'AWS', 'LLM APIs', 'Pyvis', 'NetworkX'],
    image: null,
    link: null,
    github: 'https://github.com/ashisinha-dev/RepoRadar---Codebase-Summarizer',
    report: 'http://reporadar-env.eba-5tdaynmy.us-east-1.elasticbeanstalk.com/',
  },
  {
    id: 'ciir-lab',
    title: 'Long-Context Decoding Framework',
    context: 'Center for Intelligent Information Retrieval (CIIR) Lab, UMass Amherst · Jul 2025 – Present',
    bullets: [
      'Developing a context-length scaling framework that uses a model’s behavior at shorter context lengths to predict how it would behave with substantially longer context.',
      'Applying knowledge distillation to improve factuality and generation quality when only limited context is available, without requiring expensive long-context inference.',
      'Conducted under the guidance of Prof. Haw-Shiuan Chang and Prof. Hamed Zamani.',
    ],
    tech: ['PyTorch', 'Python', 'NLP', 'LLMs', 'Knowledge Distillation'],
    image: null,
    link: null,
  },
  {
    id: 'recommender-companion',
    title: 'Recommender Companion',
    context: 'Personalized Book & Movie Discovery Platform · Sep 2024 – Nov 2024',
    bullets: [
      'Built a full-stack recommendation platform with an Angular frontend and Flask REST APIs, using Microsoft OAuth, age-aware onboarding, and LLMs with engineered prompts to generate personalized recommendations from users’ book and movie ratings and interaction history, with match percentages.',
      'Developed an interactive content dashboard with All, Movies, and Books tabs, keyword search, six-item pagination, autocomplete, paginated catalog results, and complete workflows to add, update, rate, and delete viewing and reading history.',
      'Created a role-based admin dashboard for maintaining the global movie and book repositories, with TMDB ID and ISBN validation to prevent duplicate records; containerized the application with Docker and managed MySQL schema changes through Flyway migrations.',
    ],
    tech: ['Angular', 'Python', 'Flask', 'GPT', 'Microsoft OAuth', 'MySQL', 'Docker'],
    image: recommenderCompanionImage,
    link: null,
    github: 'https://github.com/ashisinha-dev/Recommender-Companion',
    report: 'https://github.com/ashisinha-dev/Recommender-Companion/blob/main/Recommender%20Companion%20-%20User%20Manual.pdf',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe AI Game',
    context: 'Microsoft Engage Mentorship Program (Codess) · Jun 2020',
    bullets: [
      'Developed a responsive, cross-browser Tic-Tac-Toe web application supporting 3×3 human-vs-AI and local multiplayer gameplay, along with a 4×4 two-player variant.',
      'Implemented a Minimax-based AI with alpha-beta pruning and depth-limited search, enabling adjustable difficulty levels ranging from beginner to unbeatable.',
      'Added intelligent move hints, first-player selection, replay controls, and in-game instructions to create a customizable and user-friendly gameplay experience.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Minimax', 'Alpha-Beta Pruning'],
    image: null,
    link: null,
    github: 'https://github.com/ashisinha-dev/Tic-tac-toe-game--Titans',
    report: 'https://github.com/ashisinha-dev/Tic-tac-toe-game--Titans/blob/master/Tic-Tac-Toe-game-report.pdf',
  },
]

export const otherProjects = [
  {
    id: 'rl-algorithms',
    title: 'Reinforcement Learning Algorithms for Discrete and Continuous Control',
    context: 'UMass Amherst · Sep 2025 – Dec 2025',
    bullets: [
      'Implemented and evaluated multiple reinforcement learning algorithms, including One-Step Actor–Critic, DQN/Double DQN, and n-step Semi-Gradient SARSA, to train agents across Cat-vs-Monsters, MountainCar, and CartPole environments.',
      'Developed tabular and neural-network-based learning approaches using experience replay, target networks, tile coding, and ε-greedy exploration, and conducted hyperparameter tuning and multi-seed experiments to compare learning stability, convergence, and final policy performance.',
    ],
    tech: ['Python', 'Reinforcement Learning', 'Deep Q-Learning', 'Actor–Critic', 'Gymnasium'],
    link: null,
    github: 'https://github.com/ashisinha-dev/reinforcement-learning-control-algorithms',
    report: 'https://github.com/ashisinha-dev/reinforcement-learning-control-algorithms/blob/main/report/687_Final_Project_Report.pdf',
  },
  {
    id: 'election-tweets-nlp',
    title: 'Temporal Analysis of Political Prejudice and Alignment in 2024 Election Tweets',
    context: 'UMass Amherst · Feb 2025 – May 2025',
    bullets: [
      'Built an LLM-based, multi-label NLP pipeline to classify approximately 16,000 election-related tweets across eight prejudice and political-alignment categories using GPT-4o-mini, GPT-4.1-mini, and o4-mini, with custom preprocessing and month-balanced sampling.',
      'Generated approximately 56,000 model responses to compare zero-shot and few-shot prompting, measure inter-model agreement using Fleiss’ Kappa, and analyze monthly trends around major 2024 election events.',
      'Found that detailed prompts improved specificity for nuanced prejudice, GPT-4.1-mini produced the most stable and conservative predictions, and sarcasm, coded language, and ambiguous context remained the primary classification challenges.',
    ],
    tech: [
      'Natural Language Processing (NLP)',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'Sentiment Analysis',
      'Text Classification',
      'Python',
      'OpenAI API',
      'Pandas',
      'Data Analysis',
      'Data Visualization',
    ],
    link: null,
    github: 'https://github.com/ashisinha-dev/election-tweet-prejudice-analysis',
    report: 'https://github.com/ashisinha-dev/election-tweet-prejudice-analysis/blob/main/Temporal-political-prejudice-election-tweets-report.pdf.pdf',
  },
  {
    id: 'ml-benchmarking',
    title: 'Machine Learning Algorithms from Scratch',
    context: 'UMass Amherst · Feb 2025 – Apr 2025',
    bullets: [
      'Implemented k-Nearest Neighbors, Neural Networks, Random Forests, and Decision Trees from scratch in Python and evaluated them across four binary and multiclass classification datasets with numerical and categorical features.',
      'Conducted hyperparameter tuning and stratified 10-fold cross-validation to compare predictive performance, generalization, overfitting, and stability, achieving up to 98.78% accuracy and demonstrating how dataset characteristics influence algorithm selection.',
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'Machine Learning', 'Model Evaluation'],
    link: null,
    github: 'https://github.com/ashisinha-dev/ml-algorithms-from-scratch',
    report: 'https://github.com/ashisinha-dev/ml-algorithms-from-scratch/blob/main/report/Project_Report.pdf',
  },
  {
    id: 'parser-compiler-design',
    title: 'Parser: Compiler Design',
    context: 'BITS Pilani',
    bullets: [
      'Designed a custom context-free programming language and built a Python-based mini-compiler and parser for it, implementing error-recovery strategies such as auto-correction and synchronization to detect and handle invalid input without interrupting execution, processing more than 1,000 strings per minute.',
    ],
    tech: ['Python', 'Compiler Design', 'Parsing', 'Error Handling'],
    link: null,
    github: 'https://github.com/ashisinha-dev/Parser/tree/main/Compiler%20construction%20assignment%202%20final',
    report: 'https://github.com/ashisinha-dev/Parser/blob/main/Compiler%20construction%20assignment%202%20final/Design_document-CompilerConstruction.pdf',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Asset Management System',
    context: 'BITS Pilani',
    bullets: [
      'Built a Python-based asset management system that uses a blockchain-backed ledger to create traceable, tamper-evident records of asset ownership and transactions, with DES encryption implemented to protect sensitive asset information.',
    ],
    tech: ['Python', 'Blockchain', 'Cryptography', 'Data Security'],
    link: 'https://github.com/ashisinha-dev/Blockchain-in-python/tree/main',
  },
  {
    id: 'cab-booking',
    title: 'Cab Booking Application',
    context: 'BITS Pilani',
    bullets: [
      'Developed a Java-based cab-booking system using Swing and JDBC, supporting ride booking and cancellation, driver and vehicle management, and real-time trip-status updates through separate user and administrator workflows.',
    ],
    tech: ['Java', 'Java Swing', 'JDBC', 'SQL'],
    link: 'https://github.com/ashisinha-dev/Cab-booking-application/tree/master',
  },
]
