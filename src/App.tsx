import React, { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import SkillBar from './components/SkillBar';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    // Scroll animation observer
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document
      .querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
      .forEach((el) => {
        animationObserver.observe(el);
      });

    return () => {
      observer.disconnect();
      animationObserver.disconnect();
    };
  }, []);

  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-purple-600' },
    {
      name: 'Machine Learning',
      level: 85,
      color: 'from-purple-600 to-pink-500',
    },
    { name: 'Deep Learning', level: 80, color: 'from-pink-500 to-red-500' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-orange-500' },
    { name: 'HTML/CSS', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'SQL', level: 70, color: 'from-blue-400 to-indigo-500' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Image Recognition',
      description:
        'A deep learning model that can identify objects in images with high accuracy.',
      image:
        'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['Python', 'TensorFlow', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details:
        'This project implements a convolutional neural network (CNN) for image classification. It achieves 95% accuracy on the test dataset and can recognize over 100 different object categories in real-time.',
    },
    {
      id: 2,
      title: 'NLP Sentiment Analyzer',
      description:
        'A natural language processing tool that analyzes sentiment in text data.',
      image:
        'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['Python', 'NLTK', 'Scikit-learn'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details:
        'This sentiment analysis tool uses advanced NLP techniques to determine the emotional tone behind text. It can process large volumes of data from social media, reviews, and other sources to provide valuable insights.',
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      description:
        'An interactive dashboard for visualizing and predicting business metrics.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'D3.js', 'Python', 'Flask'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details:
        'This full-stack application combines a React frontend with a Flask backend to provide real-time predictive analytics. It features interactive visualizations built with D3.js and machine learning models that forecast key business metrics.',
    },
    {
      id: 4,
      title: 'Reinforcement Learning Game AI',
      description:
        'An AI agent that learns to play games through reinforcement learning.',
      image:
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['Python', 'PyTorch', 'OpenAI Gym'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details:
        'This project implements various reinforcement learning algorithms (Q-learning, DQN, PPO) to train AI agents that can master complex games. The agents learn optimal strategies through trial and error, eventually outperforming human players.',
    },
  ];

  const timelineEvents = [
    {
      year: '2021 - Present',
      title: 'B.Tech in Computer Science',
      description:
        'Pursuing my degree with a focus on AI and Machine Learning.',
      organization: 'Tech University',
    },
    {
      year: '2022 - 2023',
      title: 'ML Research Intern',
      description:
        'Worked on developing novel algorithms for computer vision applications.',
      organization: 'AI Research Lab',
    },
    {
      year: '2023',
      title: 'Hackathon Winner',
      description:
        'First place in the National AI Challenge for innovative healthcare solution.',
      organization: 'TechFest 2023',
    },
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Dommalapati Seenaiah
        </div>
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20"
        >
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center fade-in-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
              <img
                src="src/seenu.jpg"
                alt="Dommalapati Seenaiah"
                className="rounded-full w-full h-full object-cover border-4 border-purple-500 p-1 relative z-10"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left fade-in-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Dommalapati Seenaiah
              </span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl text-gray-300 typewriter">
                AI & Machine Learning Developer
              </p>
            </div>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate about creating intelligent systems that solve
              real-world problems. Specializing in machine learning, deep
              learning, and data science.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 bg-gray-800 rounded-full font-semibold border border-purple-500 hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
                download
              >
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 fade-in-left">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Who I Am
              </h3>
              <p className="text-gray-300 mb-4">
                I'm a third-year B.Tech student specializing in AI and Machine
                Learning. My journey in technology began with a fascination for
                how computers can learn and make decisions.
              </p>
              <p className="text-gray-300 mb-4">
                I'm passionate about developing AI solutions that can make a
                positive impact on society, particularly in healthcare,
                education, and environmental sustainability.
              </p>
              <p className="text-gray-300">
                When I'm not coding or training models, you can find me
                participating in hackathons, contributing to open-source
                projects, or exploring the latest research papers in AI.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 fade-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                My Journey
              </h3>
              <Timeline events={timelineEvents} />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                My Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`fade-in-up delay-${index * 100}`}>
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className={`scale-in delay-${index * 100}`}>
                <ProjectCard
                  project={project}
                  onClick={() => openProjectModal(project)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-purple-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">seenaiah@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-purple-500">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <a
                      href="https://linkedin.com"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/seenaiah
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-purple-500">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400">GitHub</p>
                    <a
                      href="https://github.com"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      github.com/seenaiah
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 fade-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:seenaiah@example.com"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Dommalapati Seenaiah. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {showProjectModal && selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closeProjectModal}
        >
          <div
            className={`bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
              showProjectModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 rounded-full p-2 text-white hover:bg-red-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.details}</p>
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
