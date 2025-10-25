/**
 * Header Component Texts in English
 */

const HEADER_TEXTS = {
    name: "Dheeraj",
    home: "Home",
    about: "About",
    work: "Experience",
    credential: "Credentials",
    contact: "Contact",
};

/**
 * Home Page Texts in English
 */

const SKILLS = [
    "Salesforce",
    "Certinia (FinancialForce) PSA",
    "Product Management",
    "Business Analysis",
    "Automation",
    "Data Modeling",
    "Reports & Dashboards",
    "Agile & Scrum",
    "Test Strategy & QA",
    "Stakeholder Management",
    "Roadmap Planning",
];

const HOME_TEXTS = {
    profilePicAlt: "Dr. Dheeraj Panday Pic.",
    greeting: "HELLO!",
    intro1: "I'M",
    intro2: "DHEERAJ",
    role: "Product Manager / Salesforce PSA Consultant / Business Analyst",
    description:
        "I’m a Salesforce and Certinia (FinancialForce) PSA Consultant with 18+ years of experience in Product Management, QA Strategy, and Data Analytics. I specialize in defining product roadmaps, implementing PSA solutions, and driving business outcomes through data-driven insights.",
    coreSkills: "Core Skills",
    skills: SKILLS,
};

/**
 * About Me Section
 */

const ABOUT_ME = [
    "I'm Dr. Dheeraj Panday, a Product Manager and Salesforce PSA Consultant with over 18 years of experience spanning Product Management, Consulting, QA, and Data Analysis. My expertise lies in Salesforce and Certinia (FinancialForce) PSA implementations, where I’ve successfully delivered solutions improving operational efficiency and profitability.",
    "At Metacube Software, I’ve led multiple product initiatives for Certinia — defining and executing product roadmaps, driving agile ceremonies, managing releases, and collaborating with cross-functional teams to deliver impactful business features.",
    "My professional journey started as a Data Analyst, transitioned into Salesforce QA and PSA consulting, and evolved into a leadership role in Product Management. Along the way, I’ve developed a strong foundation in data modeling, test strategy, product ownership, and customer-focused solution design.",
    "I hold a Ph.D. in Accountancy and Business Statistics and a Master’s in Computer Applications, combining technical acumen with analytical depth. I’m passionate about mentoring teams, innovating in product strategy, and enabling organizations to achieve measurable outcomes through Salesforce PSA.",
];

const ABOUT_ME_TEXTS = {
    aboutMeHeading: "About Me",
    aboutMeParagraphs: ABOUT_ME,
};

/**
 * Work Experience Section
 */

const WORK_EXPERIENCES = [
    {
        company: "Metacube Software Pvt. Ltd.",
        role: "Product Manager | Client – Certinia (Formerly FinancialForce) ",
        duration: "June 2006 – Present",
        responsibilities: [
            "Define, prioritize, and deliver product roadmaps aligned with Certinia’s business goals.",
            "Collaborate with cross-functional teams to design and implement high-impact product features.",
            "Author PRDs, user stories, and success metrics for new feature development and adoption.",
            "Lead agile ceremonies and manage the end-to-end product lifecycle from ideation to release.",
            "Conduct competitor and trend analysis to drive product innovation and enhance customer experience.",
            "Support release planning, user training, and adoption enablement for PSA customers.",
        ],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        role: "PSA / Salesforce Consultant | Client – Certinia (Formerly FinancialForce) ",
        duration: "June 2015 – March 2020",
        responsibilities: [
            "Implemented and configured PSA modules including Projects, Resource Management, Billing, and Revenue Recognition.",
            "Customized Salesforce automation, workflows, and approvals to meet business requirements.",
            "Developed executive dashboards and analytics to enable data-driven decision-making.",
            "Conducted UAT, system validation, and end-user training to ensure adoption and accuracy.",
            "Enhanced resource utilization and project profitability through PSA-based optimization.",
        ],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        role: "Salesforce Lead QA / PSA Consultant | Client – Certinia (Formerly FinancialForce)",
        duration: "September 2012 – May 2015",
        responsibilities: [
            "Led QA strategy and automation for PSA implementations across multiple modules.",
            "Designed and executed regression and functional test suites ensuring release stability.",
            "Validated PSA configurations and workflows, improving quality and reducing defects.",
            "Collaborated with clients and product owners to validate business workflows end-to-end.",
        ],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        role: "Salesforce QA | Client – Certinia (Formerly FinancialForce)",
        duration: "October 2010 – August 2012",
        responsibilities: [
            "Created and executed regression and integration tests for Salesforce + PSA.",
            "Validated workflows, objects, and business logic configurations.",
            "Performed data validation and migration testing during implementation cycles.",
        ],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        role: "Data Analyst | Client – NPD Group (Formerly Current Analysis West) ",
        duration: "June 2006 – September 2010",
        responsibilities: [
            "Performed market and pricing analysis for the US Printing & Supplies domain.",
            "Built data models and forecasting tools to identify industry trends.",
            "Delivered actionable insights and reports supporting product and marketing decisions.",
        ],
    },
];

const WORK_EXPERIENCE_TEXTS = {
    workExperienceHeading: "Professional Experience",
    workExperiences: WORK_EXPERIENCES,
};

/**
 * Credentials Section
 */

const CERTIFICATIONS = [
    "Salesforce Certified AI Associate",
    "Salesforce Certified Agentforce Specialist",
    "Salesforce Certified Platform Administrator",
    "Salesforce Certified Business Analyst",
];

const EDUCATIONS = [
    {
        degree: "Doctor of Philosophy (Ph.D.) in Accountancy and Business Statistics",
        additionalInfo: "2019 | University of Rajasthan",
    },
    {
        degree: "Master of Computer Applications (MCA)",
        additionalInfo: "2009 | University of Rajasthan",
    },
];

const PROJECTS = [
    {
        name: "Certinia PSA Enhancements",
        description:
            "Led continuous product enhancements across PSA modules — improving resource management, project visibility, and billing accuracy through automation and analytics.",
        skills: "Salesforce | Certinia PSA | Product Management | Agile | Analytics",
    },
    {
        name: "Salesforce QA Automation Framework",
        description:
            "Built reusable regression and test automation suites to improve release quality and reduce defect leakage across multiple PSA products.",
        skills: "Salesforce | Automation | Test Strategy | QA Management",
    },
    {
        name: "Market Data Analytics Platform",
        description:
            "Developed analytical dashboards and models for market trend forecasting and executive reporting.",
        skills: "Data Modeling | BI | Reporting | Analytics",
    },
];

const CREDENTIAL_TEXTS = {
    credentialHeading: "Credentials",
    certificationsHeading: "Certifications",
    educationsHeading: "Education",
    projectsHeading: "Key Projects",
    certifications: CERTIFICATIONS,
    educations: EDUCATIONS,
    projects: PROJECTS,
};

/**
 * Contact Section
 */

const CONTACT_TEXTS = {
    contactHeading: "Get in Touch",
    contactDescription:
        "I’m always open to discussions around Salesforce PSA, product strategy, or consulting opportunities. Feel free to reach out for collaborations or knowledge sharing.",
    email: "Email",
    emailAddress: "consultantpsa419@gmail.com",
    socialProfiles: "Social Profiles",
    githubLink: "https://github.com/drdheerajpanday66-code",
    linkedInLink: "https://www.linkedin.com/in/dr-dheeraj-panday-6a8b4221/",
    trailheadLink: "https://www.salesforce.com/trailblazer/dpandey2",
    emailMe: "Email Me",
    linkedIn: "LinkedIn",
    downloadResume: "Download Resume",
};

/**
 * Footer Component Texts
 */

const FOOTER_TEXTS = {
    copyright: "© 2025 Dr. Dheeraj Panday. All rights reserved.",
};

export {
    HEADER_TEXTS,
    HOME_TEXTS,
    ABOUT_ME_TEXTS,
    WORK_EXPERIENCE_TEXTS,
    CREDENTIAL_TEXTS,
    CONTACT_TEXTS,
    FOOTER_TEXTS,
};
