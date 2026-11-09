import TapON from '../assets/tapon.png';
import CashApp from '../assets/cash.png';
import ExpenseFlowImg from '../assets/ExpenseFlow.png';
import AgriShareImg from '../assets/agriShare.png';
import KoreanImg from '../assets/korean.png';
import ConversationImg from '../assets/conversation.png';
import AiVoiceImg from '../assets/AIVoice.png';
import VendingImg from '../assets/vending.png';
import ShadowingImg from '../assets/shadowing.png';
import BeautyQatarImg from '../assets/saloon.png';
import RemotkiiImg from '../assets/remotkii.png';
import SalesImg from '../assets/sales_partner.png';
import tech5Img from '../assets/tech5.png';
import evslImg from '../assets/evsl.png';

const projects = [
  {
    title: 'Korean Master App',
    slug: 'korean-master',
    image: KoreanImg,
    organization: 'Ideacipher (Pvt) Ltd',
    description:
      'A Korean language-learning app with vocabulary practice, mini-games, REST API integration, and Firebase Analytics.',
    stack: ['Flutter', 'REST APIs', 'Firebase Analytics'],
    demoFile: '',
    details: {
      about:
        'Korean Master helps learners build Korean vocabulary through guided practice and mini-games. The app integrates REST APIs for learning content and Firebase Analytics for product insights.',
      features: [
        'Korean vocabulary practice',
        'Interactive learning mini-games',
        'REST API integration',
        'Firebase Analytics',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Content', value: 'REST APIs' },
        { name: 'Analytics', value: 'Firebase Analytics' },
      ],
      userRoles: {
        Learners: ['Practice Korean vocabulary', 'Use mini-games to reinforce learning'],
      },
      objectives: ['Make Korean vocabulary practice more engaging', 'Support continued learning through interactive exercises'],
    },
  },
  {
    title: 'Shadowing App',
    slug: 'shadowing-app',
    image: ShadowingImg,
    organization: 'Ideacipher (Pvt) Ltd',
    description:
      'A language-shadowing app that loads YouTube videos and extracts auto-generated captions or subtitles for synchronized speaking practice.',
    stack: ['Flutter', 'YouTube captions', 'Text-to-Speech'],
    demoFile: '',
    details: {
      about:
        'The Shadowing App helps language learners practice by loading YouTube videos and extracting either auto-generated captions or subtitles. It displays transcript lines synchronized with playback and supports translation, text-to-speech, and bookmarking.',
      features: [
        'Load YouTube videos for language practice',
        'Extract auto-generated captions or subtitles',
        'Display synchronized transcript lines',
        'Translate transcript text',
        'Listen with text-to-speech',
        'Bookmark transcript content',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter' },
        { name: 'Captions', value: 'YouTube captions and subtitles' },
        { name: 'Speech', value: 'Text-to-Speech' },
      ],
      userRoles: {
        Learners: [
          'Practice speaking with synchronized transcript lines',
          'Translate and listen to transcript text',
          'Bookmark useful transcript content',
        ],
      },
      objectives: [
        'Support language-shadowing practice with YouTube videos',
        'Make captions and subtitles easier to follow and practice',
      ],
    },
  },
  {
    title: 'AI Voice English Teacher',
    slug: 'ai-voice-english-teacher',
    image: AiVoiceImg,
    organization: 'Ideacipher (Pvt) Ltd',
    description:
      'A Flutter speaking-practice app combining real-time voice communication, speech processing, and Gemini-powered AI interactions.',
    stack: ['Flutter', 'Agora RTC', 'Deepgram', 'Gemini LLM'],
    demoFile: '',
    details: {
      about:
        'AI Voice English Teacher supports spoken English practice through real-time voice communication and AI-driven interactions. Agora RTC handles voice communication, with Deepgram and Gemini powering speech and conversational features.',
      features: [
        'Real-time voice communication with Agora RTC',
        'Deepgram speech processing',
        'Gemini-powered AI interactions',
        'Cross-platform Flutter interface',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Voice communication', value: 'Agora RTC' },
        { name: 'Speech processing', value: 'Deepgram' },
        { name: 'AI', value: 'Gemini LLM' },
      ],
      userRoles: {
        Learners: ['Practice spoken English', 'Interact with AI through voice'],
      },
      objectives: ['Provide an interactive speaking-practice experience', 'Combine speech technology and AI in a mobile learning app'],
    },
  },
  {
    title: 'Conversation Practice App',
    slug: 'conversation-practice',
    image: ConversationImg,
    organization: 'Ideacipher (Pvt) Ltd',
    description:
      'A Flutter conversation-practice app using Agora RTC for live voice and Deepgram for speech processing.',
    stack: ['Flutter', 'Agora RTC', 'Deepgram', 'Gemini LLM'],
    demoFile: '',
    details: {
      about:
        'The Conversation Practice App provides a voice-first environment for language learners to practice speaking. Its real-time voice and speech-processing integrations support interactive AI-driven conversations.',
      features: [
        'Real-time voice communication using Agora RTC',
        'Deepgram speech processing',
        'Gemini-powered voice interactions',
        'Flutter mobile experience',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Voice communication', value: 'Agora RTC' },
        { name: 'Speech processing', value: 'Deepgram' },
        { name: 'AI', value: 'Gemini LLM' },
      ],
      userRoles: {
        Learners: ['Practice real-time conversations', 'Use voice interactions to improve speaking confidence'],
      },
      objectives: ['Enable practical conversation practice on mobile', 'Use real-time voice and AI to support language learning'],
    },
  },
  {
    title: 'Vending Machine Application',
    slug: 'vending-machine',
    image: VendingImg,
    description:
      'An interactive Flutter app for browsing products, simulating payments, and managing vending-machine inventory.',
    stack: ['Flutter', 'Firebase'],
    demoFile: '',
    details: {
      about:
        'The Vending Machine Application demonstrates a digital vending workflow, from selecting products to simulating a payment and managing available inventory.',
      features: [
        'Interactive product selection',
        'Test payment simulation',
        'Inventory management',
        'Firebase integration',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Backend services', value: 'Firebase' },
      ],
      userRoles: {
        Customers: ['Browse and select products', 'Complete a simulated purchase'],
        Administrators: ['Manage product inventory'],
      },
      objectives: ['Model a simple end-to-end vending workflow', 'Connect product selection, payment simulation, and inventory'],
    },
  },
  {
    title: 'BeautyQatar Salon App',
    slug: 'beautyqatar',
    image: BeautyQatarImg,
    organization: 'Shield Technologies (Pvt) Ltd',
    description:
      'A multilingual salon service-booking and business-management app built with Flutter and Firebase.',
    stack: ['Flutter', 'Firebase'],
    demoFile: '',
    details: {
      about:
        'BeautyQatar is a salon application developed at Shield Technologies. It brings service booking and business-management workflows together with multilingual support.',
      features: [
        'Salon service booking',
        'Business-management workflows',
        'Multilingual support',
        'Firebase integration',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Backend services', value: 'Firebase' },
      ],
      userRoles: {
        Customers: ['Browse salon services', 'Book services'],
        'Business staff': ['Manage salon operations'],
      },
      objectives: ['Support salon service booking', 'Provide business tools in a multilingual mobile app'],
    },
  },
  {
    title: 'Rimotkiii',
    slug: 'rimotkiii',
    image: RemotkiiImg,
    organization: 'Shield Technologies (Pvt) Ltd',
    description:
      'A Flutter project featuring responsive UI, dynamic theming, and Firebase integration.',
    stack: ['Flutter', 'Firebase', 'Responsive UI'],
    demoFile: '',
    details: {
      about:
        'Rimotkiii was one of the key projects contributed to during the Shield Technologies internship. The documented work included Flutter development, responsive UI, dynamic theming, and Firebase integration.',
      features: ['Responsive interface', 'Dynamic theming', 'Firebase integration'],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Backend services', value: 'Firebase' },
      ],
      userRoles: {
        Users: ['Use the responsive Flutter application'],
      },
      objectives: ['Contribute to a responsive Flutter application', 'Integrate Firebase services and dynamic theming'],
    },
  },
  {
    title: 'Sales Partner App',
    slug: 'sales-partner',
    image: SalesImg,
    organization: 'Pegas (Pvt) Ltd',
    description:
      'A multi-vendor e-commerce mobile application built with Flutter and Firebase.',
    stack: ['Flutter', 'Firebase'],
    demoFile: '',
    details: {
      about:
        'Sales Partner is a multi-vendor e-commerce mobile application developed for Pegas (Pvt) Ltd using Flutter and Firebase.',
      features: [
        'Multi-vendor shopping experience',
        'Flutter cross-platform application',
        'Firebase integration',
      ],
      technologies: [
        { name: 'Mobile app', value: 'Flutter + Dart' },
        { name: 'Backend services', value: 'Firebase' },
      ],
      userRoles: {
        Shoppers: ['Browse products from multiple vendors', 'Use the mobile e-commerce experience'],
      },
      objectives: ['Deliver a multi-vendor shopping experience on mobile', 'Build with Flutter and Firebase'],
    },
  },
  {
    title: 'Tech5 Solutions Website',
    slug: 'tech5-solutions',
    image: tech5Img,
    organization: 'SLRobotics (Pvt) Ltd',
    description:
      'A responsive company website with dynamic service, product, and project pages, plus a Firebase-backed admin workspace.',
    stack: ['Next.js 14', 'React', 'Firebase', 'Cloudinary'],
    live: 'https://tech5.online/',
    demoFile: '',
    details: {
      about:
        'Tech5 Solutions is a responsive company website built with the Next.js App Router. It includes dynamic service, product, and project pages, plus a Firebase-backed admin workspace for managing content and customer inquiries.',
      features: [
        'Responsive company website',
        'Dynamic service, product, and project pages',
        'Firebase-backed admin workspace',
        'Manage project and testimonial content',
        'Review customer inquiries',
        'Secure media uploads with server-generated Cloudinary signatures',
      ],
      technologies: [
        { name: 'Frontend', value: 'Next.js 14 App Router + React' },
        { name: 'Authentication and data', value: 'Firebase' },
        { name: 'Media uploads', value: 'Cloudinary signed uploads' },
      ],
      userRoles: {
        Visitors: ['Explore the business website and its content'],
        Administrators: ['Manage projects and testimonials', 'Review customer inquiries'],
      },
      objectives: ['Present company services, products, and projects clearly', 'Provide a secure workspace for content and inquiry management'],
    },
  },
  {
    title: 'EV SL Labs — Business Website & Admin Portal',
    slug: 'ev-sl-labs',
    image: evslImg,
    organization: 'SLRobotics (Pvt) Ltd',
    description:
      'A responsive multi-page website for EV charging products and electrical safety services, with an admin portal for content and customer requests.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Firebase Authentication', 'Cloud Firestore', 'Cloudinary'],
    live: 'http://evsl.slrobotics.com/',
    demoFile: '',
    details: {
      about:
        'EV SL Labs is a responsive business website showcasing EV charging products and electrical safety services. Its admin portal uses Firebase Authentication and Cloud Firestore to manage site content and customer requests, with Cloudinary for image uploads.',
      features: [
        'Responsive multi-page business website',
        'Showcase EV charging products and electrical safety services',
        'Manage products, customer stories, and homepage slides',
        'Review customer quote and order requests',
        'Cloudinary image uploads',
        'Firestore access rules for published products and customer requests',
      ],
      technologies: [
        { name: 'Frontend', value: 'HTML + CSS + JavaScript' },
        { name: 'Authentication', value: 'Firebase Authentication' },
        { name: 'Database', value: 'Cloud Firestore' },
        { name: 'Media uploads', value: 'Cloudinary' },
      ],
      userRoles: {
        Visitors: ['Explore EV charging products and electrical safety services', 'Submit quote or order requests'],
        Administrators: ['Manage products, customer stories, and homepage slides', 'Review customer requests'],
      },
      objectives: [
        'Showcase EV SL Labs products and services online',
        'Provide authenticated administration of site content and customer requests',
      ],
    },
  },
   {
    title: 'AgriShare',
    slug: 'agrishare',
    image: AgriShareImg,
    organization: 'Personal Project',
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
    title: 'Cash Collection & Admin Management System',
    slug: 'cash',
    image: CashApp,
    organization: 'Ideacipher (Pvt) Ltd',
    description:
      'A connected field-sales and inventory suite covering collections, sales representatives, administration, and storekeeping.',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Cloudinary', 'Figma'],
    github: 'https://github.com/Himashirathnayake1/CashCollector-',
    demoFile: 'cash-demo.mp4',
    details: {
      about:
        'A multi-role collection and administration system with dedicated workflows for cash collectors, sales representatives, administrators, and storekeepers. The suite supports field operations, inventory management, and business reporting.',
      features: [
        'Route-based collections, shop balances, and receipt capture',
        'QR scanning and GPS-powered route optimization',
        'Field-sales ordering, billing, order tracking, and attendance',
        'Stock transfers, targets, and inventory allocation',
        'Business analytics, expense tracking, and CSV reports',
        'Store purchases, returns, and balance tracking',
      ],
      technologies: [
        { name: 'Frontend', value: 'Next.js + TypeScript' },
        { name: 'Backend services', value: 'Firebase' },
        { name: 'Media', value: 'Cloudinary' },
        { name: 'Design', value: 'Figma' },
      ],
      userRoles: {
        'Cash collectors': ['Manage route-based collections', 'Capture receipts and review shop balances', 'Scan QR codes and optimize routes'],
        'Sales representatives': ['Create orders and bills', 'Track orders and attendance', 'Manage stock transfers and sales targets'],
        Administrators: ['Manage inventory and shops', 'Allocate stock', 'Review analytics, expenses, and CSV reports'],
        'Store keepers': ['Record product purchases', 'Allocate stock to sales representatives', 'Track returns and store balances'],
      },
      objectives: [
        'Support field sales and collection operations in one connected system',
        'Improve visibility into stock, shop balances, and business activity',
        'Streamline inventory allocation and reporting',
      ],
    },
  },
  {
    title: 'TapOn',
    slug: 'tapon',
    image: TapON,
    organization: 'University Group Project',
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
