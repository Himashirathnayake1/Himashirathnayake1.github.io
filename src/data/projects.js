import TapON from '../assets/tapon.png';
import CashApp from '../assets/cash.png';
import ExpenseFlowImg from '../assets/ExpenseFlow.png';
import AgriShareImg from '../assets/agriShare.png';

const projects = [
   {
    title: 'AgriShare',
    slug: 'agrishare',
    image: AgriShareImg,
    description:
      'A full-stack agriculture platform connecting farmers with knowledge sharing, multilingual community support, and admin moderation.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Himashirathnayake1/AgriShare',
    live: 'https://agriishare.netlify.app/',
    demoFile: '',
    details: {
      about:
        'AgriShare is a MERN stack platform created to connect farmers across Sri Lanka and support agricultural learning through community-driven knowledge sharing. It includes multilingual content, secure authentication, and role-based access for farmers and administrators.',
      features: [
        'Farmer knowledge sharing posts',
        'Multilingual UI in English, Sinhala, and Tamil',
        'JWT-based authentication and authorization',
        'Role-based farmer and admin access',
        'Commenting, liking, and saving posts',
        'Admin moderation workflow',
        'Responsive agricultural design system',
        'MongoDB-powered data management',
      ],
      technologies: [
        { name: 'Frontend', value: 'React 19 + Vite' },
        { name: 'Backend', value: 'Node.js + Express.js 5' },
        { name: 'Database', value: 'MongoDB + Mongoose' },
        { name: 'Security', value: 'JWT + bcryptjs + Cookies' },
        { name: 'Internationalization', value: 'i18next' },
      ],
      userRoles: {
        'Farmers': [
          'Share crop and farming guidance',
          'Comment, like, and save posts',
          'Access community knowledge',
        ],
        'Admins': [
          'Review submitted posts',
          'Approve, reject, or request changes',
          'Moderate platform content',
        ],
      },
      objectives: [
        'Bridge knowledge gaps among farmers',
        'Support multilingual agricultural communication',
        'Create a secure community platform for agriculture',
        'Improve access to useful farming guidance and support',
      ],
    },
  },
  {
    title: 'Cash Collector',
    slug: 'cash',
    image: CashApp,
    description:
      'A cash management system built to streamline tracking and improve day-to-day financial visibility.',
    stack: ['Flutter', 'Firebase'],
    github: 'https://github.com/Himashirathnayake1/CashCollector-',
    demoFile: 'cash-demo.mp4',
    details: {
      about:
        'Cash Collector App is a mobile application developed to simplify daily cash collection and payment tracking processes for businesses and field officers. The app helps collectors manage customer payments, record transactions, monitor dues, and maintain accurate financial records efficiently. The system improves speed, accuracy, and transparency in handling cash collection activities through a user-friendly mobile interface.',
      features: [
        'Secure User Login & Authentication',
        'Customer Payment Collection',
        'Real-Time Transaction Recording',
        'Daily Collection Reports',
        'Payment History Tracking',
        'Due Amount Management',
        'Search & Filter Shops',
        'Responsive Mobile Interface',
        'Firebase Database Integration',
      ],
      technologies: [
        { name: 'Frontend', value: 'Flutter' },
        { name: 'Backend', value: 'Firebase' },
        { name: 'Database', value: 'Firebase Firestore' },
        { name: 'Authentication', value: 'Firebase Authentication' },
      ],
      userRoles: {
        'Cash Collectors': [
          'Record customer payments',
          'Track pending dues',
          'View daily collections',
          'Manage transaction history',
        ],
        'Admin': [
          'Monitor all collections',
          'Manage customer records',
          'Generate reports',
          'Track collector activities',
        ],
      },
      objectives: [
        'Digitize manual cash collection processes',
        'Improve transaction accuracy',
        'Reduce paperwork and calculation errors',
        'Provide real-time financial tracking',
        'Enhance efficiency for collection officers',
      ],
    },
  },
  {
    title: 'TapOn',
    slug: 'tapon',
    image: TapON,
    description:
      'A product-oriented application focused on practical workflows and a smooth user journey.',
    stack: ['Flutter', 'Node.js', 'Mongo DB', 'Figma UI Design'],
    github: 'https://github.com/Himashirathnayake1/TapOn-original',
    demoFile: 'tapon-demo.mp4',
    details: {
      about:
        '**TapOn** is a mobile application developed to simplify finding trusted service providers and renting tools in nearby locations. The app connects users with skilled workers such as electricians, plumbers, carpenters, painters, and other handyman services through an easy-to-use platform.\n\nUsers can also rent tools from shop owners, making the process faster, more convenient, and more reliable.',
      features: [
        'User Registration & Login with Mobile Verification',
        'Search Nearby Service Providers',
        'Tool Rental System',
        'Service Booking Management',
        'Shop Owner Dashboard',
        'Real-Time Location Selection',
        'Ratings & Reviews',
        'Firebase Authentication',
        'Responsive Flutter UI',
      ],
      technologies: [
        { name: 'Frontend', value: 'Flutter' },
        { name: 'Backend', value: 'Node.js' },
        { name: 'Database', value: 'MongoDB Atlas' },
        { name: 'Authentication', value: 'Firebase Authentication' },
        { name: 'Maps & Location', value: 'Google Maps API' },
      ],
      userRoles: {
        'Service Seekers': [
          'Find nearby handyman services',
          'Book service providers',
          'Rent tools',
          'View reviews and ratings',
        ],
        'Service Providers': [
          'Add their services',
          'Manage bookings',
          'Update profile information',
          'Accept customer requests',
        ],
        'Shop Owners': [
          'Add tools for rent',
          'Manage rental availability',
          'View customer requests',
        ],
      },
      objectives: [
        'Improve accessibility to handyman services',
        'Save time when finding trusted workers',
        'Create a secure and reliable booking system',
        'Support both service hiring and tool renting in one platform',
        'Enhance user experience with a simple mobile interface',
      ],
    },
  },
  
  {
    title: 'ExpenseFlow',
    slug: 'expenseflow',
    image: ExpenseFlowImg,
    description:
      'A personal finance dashboard for tracking income, expenses, balances, and spending trends in one place.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/Himashirathnayake1/ExpenseFlow',
    demoFile: 'ExpenseFlow.mp4',
    details: {
      about:
        'ExpenseFlow is a modern personal expense tracker designed to help users manage daily financial activity with clarity. It lets people record income and expense transactions, calculate totals, and monitor spending patterns in an intuitive dashboard.',
      features: [
        'Add income and expense transactions',
        'Track total balance, income, and expenses',
        'Search transactions by keyword',
        'Filter by type and category',
        'Edit or delete entries',
        'View spending by category',
        'Calculate average and largest expense',
        'Store data using LocalStorage',
        'Responsive dashboard for desktop and mobile',
      ],
      technologies: [
        { name: 'Frontend', value: 'HTML5 + CSS3' },
        { name: 'Logic', value: 'JavaScript (ES6)' },
        { name: 'Storage', value: 'Browser LocalStorage' },
        { name: 'Data Format', value: 'JSON' },
      ],
      userRoles: {
        'Personal Users': [
          'Log income and expenses',
          'Monitor account balance',
          'Analyze spending trends',
          'Keep finances organized',
        ],
        'Budget Planners': [
          'Review category-based cost breakdowns',
          'Track recurring spending',
          'Plan smarter monthly budgets',
        ],
      },
      objectives: [
        'Simplify personal budgeting tasks',
        'Improve visibility into spending behavior',
        'Create a lightweight browser-based finance tracker',
        'Offer a clean and responsive user experience',
      ],
    },
  },
 
];

export default projects;
