import TapON from '../assets/tapon.png';
import CashApp from '../assets/cash.png';

const projects = [
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
];

export default projects;
