import  { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, MapPin, Github, Linkedin,Popcorn } from 'lucide-react';
import GrootIcon from './assets/groot-icon';
import ProfileLight from './assets/profile-light.png';
import ProfileDark from './assets/profile-dark.jpeg';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const workExperience = [
    {
      company: "Spokn",
      role: "Front-End Engineer",
      period: "Oct 2019 – Present",
      location: "New York (Remote)",
      achievements: [
        `Led the development of the Spokn admin dashboard, reducing internal workflow inefficiencies by 30%
        hrough the implementation of a user-friendly React.js interface, while managing and mentoring a team
        of 3 frontend developers.`,
        `Developed the Spokn play portal from the ground up, increasing platform responsiveness by 20%,
        resulting in a seamless user experience, and coordinated the frontend team’s efforts to ensure timely
        project delivery.`,
        `Develped Spokn Stories, optimizing story-loading speed by 25%, significantly enhancing
        content consumption for users, and led the team in implementing best practices for scalable front-end
        development.`,
        `Conducted detailed code reviews, identifying critical issues and reducing post-release bugs by 15%,
        while providing mentorship to junior developers and fostering a culture of attention to detail.`
      ]
    }
  ];

  const projects = [
    {
      name: "Pharmacy Marts",
      role: "Frontend Engineer",
      period: "Oct 2020 – May 2022",
      description: "Marketplace for Medical Suppliers",
      details: `Spearheaded the development of Pharmacy Marts' web app, delivering a fully functional product in 4 months, resulting in a 30% increase in daily active users. Managed the full project lifecycle, utilizing Jira for agile requirement gathering and GitLab for version control, ensuring 95% adherence to deadlines. Implemented CI/CD pipelines using GitLab runner, reducing deployment time by 40% and ensuring continuous, error-free code integration.`
    },
    {
      name: "Wastech",
      role: "Frontend Engineer",
      period: "Dec 2023 – Oct 2024",
      description: "Smart Waste Management System",
      details: `Developed the frontend of Wastech, a smart waste management system operating in Saudi Arabia, designed to optimize waste collection and management through real-time data analysis. Implemented responsive interfaces using React.js, improving operational efficiency and user experience for waste management operators. Collaborated with backend teams to integrate real-time data streams and IoT devices, enhancing system responsiveness and waste tracking accuracy.`
    }
  ];
  const volunteerExperience = [
    {
      company: "Connected",
      role: "Social Media Specialist",
      period: "Oct 2015 - May 2016",
      achievements: [
        `Developed and implemented a social media strategy, increasing engagement by 70% and attracting 20k+ new followers across platforms.`,
        `Managed content creation and curation for social media channels like Facebook, to promote events and initiatives.`
      ]
    },
    {
        company: "Connected",
        role: "Frontend Developer",
        period: "Oct 2015 - May 2016",
        achievements: [
          `Designed and developed a mobile-responsive website for a local non-profit organization, increasing online visibility and attracting 50% more students.`,
          `Implemented a student registration system, reducing manual data entry by 80% and improving data accuracy for student tracking and event planning.`,
        ]
      },
    {
        company: "Apec",
        role: "Frontend Developer",
        period: "Oct 2017 – Apr 2018",
        achievements: [
            `Developed Apec magazine's website, increasing online readership by 40% and improving user engagement through interactive features and multimedia content.`,
            `Optimized website performance, achieving a 90% Lighthouse score and ensuring fast load times for users on mobile and desktop devices.`

        ]
        }
  ];

  const skills = [
    "React.js",
    "React Native",
    "JavaScript (ES6+)",
    "TypeScript",
    "Figma",
    "TailwindCSS",
    "Redux",
    "React Query",
    "GraphQL",
    "Git",
    "CI/CD",
    "HTML5",
    "CSS3",
    "Next.js",
    "Sass/SCSS",
    "Bootstrap",
    "Webpack",
    "Jest",
    "Responsive Design",
    "Accessibility (a11y)",
    "RESTful APIs",
    "UI/UX Design Principles",
    "Styled Components",
    "Framer Motion",
    "Atomic Design",
]
;
const hobbies = [
    'Playing Video Games',
    'Cooking',
    'Watching Movies',
    'Listening to Podcasts',

]

  return (
    <div className={`min-h-screen  transition-colors duration-300  ${darkMode ? 'dark bg-[#202023] text-[#EEEEEE]' : 'bg-[#F1E6DB] text-[#1A202C]'}`}>
      {/* Header */}
 
      <header className="fixed top-0 w-full bg-opacity-90 backdrop-blur-sm z-50 transition-colors duration-300 bg-[#f1e6db8e]   dark:bg-[#202023] shadow-md">
        <div className="container w-full  h-fit mx-auto px-6 py-4 flex justify-between items-center ">
        <div className=" flex items-center  h-fit">
        <GrootIcon className=" w-8 h-8 -rotate-6 hover:-rotate-12 cursor-pointer " />
          <h1 className="text-2xl font-bold">Nader Yasser</h1>
   
        </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full cursor-pointer hover:bg-[#548e905f] dark:hover:bg-[#f6ad54b3] transition-colors duration-300"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">

        <img className=" w-48 h-48 rounded-full border-4 border-[#548e90] dark:border-[#F6AD54]" src={darkMode ? ProfileDark: ProfileLight } alt="Profile" />
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-4">Software Engineer</h2>
            <p className="text-lg mb-6 opacity-80">
            Detail-oriented frontend developer with 5+ years of experience building scalable web applications in fast-paced startup environments. Proficient in React.js, React Native, and modern UI/UX principles, with a proven track record of delivering intuitive, high-performance user interfaces. Adept at collaborating with cross-functional teams and driving full-cycle development from concept to deployment. Passionate about leveraging the latest technologies to enhance user experiences and drive business outcomes.

            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:nader.yasser.93@gmail.com" className="hover:underline">
                  nader.yasser.93@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+201118218991</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Madinaty, Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-md  dark:hover:shadow-[#f6ad542a] animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold mb-2">{job.company}</h4>
                <div className="text-sm opacity-80 mb-4">
                  <span>{job.role}</span> • <span>{job.period}</span> • <span>{job.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="opacity-90">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-md  dark:hover:shadow-[#f6ad542a] animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                <div className="text-sm opacity-80 mb-2">
                  <span>{project.role}</span> • <span>{project.period}</span>
                </div>
                <p className="text-sm font-medium mb-2">{project.description}</p>
                <p className="opacity-90">{project.details}</p>
              </div>
            ))}
          </div>
        </section>
          {/* Education Section */}
          <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-lg transition-all duration-300 hover:shadow-md  dark:hover:shadow-[#f6ad542a] animate-slideUp"
            >
              <h4 className="text-xl font-bold mb-2">Bachelor of Computer and System Engineering</h4>
              <div className="text-sm opacity-80 mb-2">
                <span>University of Ain Shams</span> • <span>2015 – 2019</span>
              </div>
              <p className="opacity-90">Graduated with a Bachelor of System Engineering from the University of Ain Shams, specializing in software engineering and web development. Completed coursework in data structures, algorithms, and software design principles, with a focus on building scalable, user-centric web applications.</p>
            </div>
          </div>
        </section>
        {/* Volunteer Experience Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Volunteer Experience</h3>
          <div className="space-y-8">
            {volunteerExperience.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:shadow-md  dark:hover:shadow-[#f6ad542a] animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="text-xl font-bold mb-2">{job.company}</h4>
                <div className="text-sm opacity-80 mb-4">
                  <span>{job.role}</span> • <span>{job.period}</span> 
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="opacity-90">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[#548e90] dark:bg-[#F6AD54] border border-[#548e90] dark:border-[#F6AD54] animate-fadeIn text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Hobbies</h3>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby, index) => (
                <span
                    key={index}

                    className={`px-4 py-2 rounded-full bg-[#548e90] dark:bg-[#F6AD54] border border-[#548e90] dark:border-[#F6AD54] text-white`}
                >
                    {hobby}
                </span>
         
       
            ))}
            
            <a
            className={`px-4 py-2 rounded-full bg-[#D2122E]  border border-[#D2122E]  text-white  animate-bounce delay-500 cursor-pointer`}
            href="https://www.youtube.com/watch?v=_DivH1dWGbw"
            target='_blank'
            >
                Football
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#548e90] dark:border-[#F6AD54] transition-colors duration-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/groot8" target='_blank' className="hover:opacity-80 transition-opacity cursor-pointer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nader-yasser/" target='_blank' className="hover:opacity-80 transition-opacity cursor-pointer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nader.yasser.93@gmail.com" className="hover:opacity-80 transition-opacity cursor-pointer">
              <Mail size={24} />
            </a>
            <a href="https://letterboxd.com/nader/" target='_blank' className="hover:opacity-80 transition-opacity cursor-pointer">
            <Popcorn size={24} />
          </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-15px);
            }
            60% {
                transform: translateY(-10px);
            }
        }

        .animate-bounce {
            animation: bounce 3s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

 //       <nav className="flex space-x-6 ml-10 font-semibold">
    //       <a href="#info" className="">
    //           Me
    //       </a>
    //       <a href="#blog" className="">
    //           Blog
    //       </a>
    //   </nav>