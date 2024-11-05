export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Rep4y - P2P Recurring Payments App',
        desc: 'Rep4y is a peer-to-peer payment platform designed to simplify shared expenses by automating recurring payments between users. Whether it’s splitting bills, subscriptions, or shared services, Rep4y makes managing monthly payments seamless.',
        subdesc: 'Built as a robust full-stack application with PERN (PostgreSQL, Express, React, Node.js) and enhanced with Supabase for authentication and data management, Rep4y provides a secure, user-friendly experience for all types of recurring payments.',
        href: 'http://rep4y.com/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#1C3A3E',
            border: '0.2px solid #2A5C5E',
            boxShadow: '0px 0px 60px 0px #56A7A9',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/node.png',
            },
            {
                id: 4,
                name: 'Supabase',
                path: '/assets/supabase.png',
            },
        ],
    },
    {
        title: 'Cococlem - Inclusive Fashion Shopify Project',
        desc: 'Cococlem is an accessible fashion brand, specializing in clothing and earrings that cater to everyone. This project involved designing a tailored page and developing a custom Shopify app to introduce a "Mix & Match" discount feature for earrings.',
        subdesc: 'This project showcases expertise in e-commerce design and custom Shopify app development. The app provides a seamless discounting feature for customers, enhancing the shopping experience and adding flexibility to product bundling.',
        href: 'https://www.cococlem.com/pages/mix-match-15-off',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/cococlem-logo.png',
        logoStyle: {
            backgroundColor: '#FFE5D9',
            border: '0.2px solid #FFB6A9',
            boxShadow: '0px 0px 60px 0px #FF7B6B4D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Shopify',
                path: '/assets/shopify.jpg',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'remix',
                path: '/assets/remix_logo.png',
            },
        ],
    },
    {
        title: 'Twitter Clone - Social Media App',
        desc: 'A full-featured Twitter clone that allows users to share posts, engage with content, and manage profiles. Built using the SERN stack (SQLite, Express, React, Node), it includes JWT-based user authentication, persistent login state, and comprehensive CRUD capabilities.',
        subdesc: 'This project highlights core social media functionalities, with a focus on secure user authentication, smooth CRUD operations, and an intuitive interface. The app architecture ensures scalability and performance using SQLite for data management and Express for backend routing.',
        href: 'https://github.com/cjgarcia12/twitterClone',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#1DA1F2',
            border: '0.2px solid #1A8CD8',
            boxShadow: '0px 0px 60px 0px #1DA1F24D',
        },
        spotlight: '/assets/spotlight-twitter-clone.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Node.js',
                path: '/assets/node.png',
            },
            {
                id: 3,
                name: 'Express.js',
                path: '/assets/express.png',
            },
            {
                id: 4,
                name: 'SQLite',
                path: '/assets/sqlite.png',
            },
        ],
    },
    {
        title: 'Retro Weather App - 8-Bit Weather Experience',
        desc: 'The Retro Weather App brings a nostalgic, old-school RPG vibe to weather tracking. Users can enter a ZIP code to get real-time weather updates, with dynamic backgrounds and a live digital clock in a retro 8-bit style.',
        subdesc: 'This app combines a classic 8-bit aesthetic with practical weather functionality. Built using vanilla HTML, CSS, JavaScript, and Bootstrap, it features responsive design and interactive elements powered by the OpenWeatherMap API.',
        href: 'https://cjgarcia12.github.io/weather-app/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#222222',
            border: '0.2px solid #555555',
            boxShadow: '0px 0px 60px 0px #8888884D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'HTML',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap.png',
            },
        ],
    },
    {
        title: 'Simple File Manager - Java Desktop Application',
        desc: 'This Simple File Manager is a Java Swing-based desktop application that provides essential file management capabilities. Users can browse, copy, move, delete files, create directories, and search for files with ease.',
        subdesc: 'Developed with Java Swing, this application offers a clean and intuitive GUI for efficient file operations across directories. The project emphasizes usability and platform independence, ensuring consistent functionality on Windows, macOS, and Linux.',
        href: 'https://github.com/cjgarcia12/fileManager',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#6C757D',
            border: '0.2px solid #495057',
            boxShadow: '0px 0px 60px 0px #868E964D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Java',
                path: '/assets/java.png',
            },
            {
                id: 2,
                name: 'Intellij IDE',
                path: '/assets/intellij.png',
            },
            {
                id: 3,
                name: 'File Management',
                path: '/assets/file-management.png',
            },
            {
                id: 4,
                name: 'Desktop Application',
                path: '/assets/desktop-app.png',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];