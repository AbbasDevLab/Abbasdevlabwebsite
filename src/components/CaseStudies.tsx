import React from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Modernization',
      client: 'RetailTech Solutions',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Legacy e-commerce platform causing 40% cart abandonment and poor mobile experience.',
      solution: 'Built modern React-based platform with headless architecture and optimized checkout flow.',
      results: [
        { label: 'Conversion Rate', value: '+65%', icon: TrendingUp },
        { label: 'Page Load Speed', value: '2.1s', icon: Clock },
        { label: 'Mobile Users', value: '+120%', icon: Users }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MedFlow Clinics',
      category: 'Enterprise Integration',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Manual patient management causing inefficiencies and compliance issues.',
      solution: 'Developed comprehensive healthcare management system with EHR integration.',
      results: [
        { label: 'Efficiency Gain', value: '+80%', icon: TrendingUp },
        { label: 'Patient Wait Time', value: '-50%', icon: Clock },
        { label: 'Staff Satisfaction', value: '95%', icon: Users }
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'HIPAA', 'Docker'],
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      id: 3,
      title: 'Supply Chain Mobile App',
      client: 'LogiFlow Industries',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenge: 'Field teams unable to track inventory and shipments in real-time.',
      solution: 'React Native app with offline-first architecture and real-time synchronization.',
      results: [
        { label: 'Tracking Accuracy', value: '99.8%', icon: TrendingUp },
        { label: 'Response Time', value: '-70%', icon: Clock },
        { label: 'User Adoption', value: '100%', icon: Users }
      ],
      technologies: ['React Native', 'Express.js', 'Redis', 'Socket.io', 'AWS'],
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform their operations 
            and achieve remarkable results through innovative software solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl`}></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-900">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-blue-600 font-medium">
                    {project.client}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {project.results.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={result.label} className="text-center p-4 bg-gray-50 rounded-xl">
                        <IconComponent className={`w-6 h-6 mx-auto mb-2 text-blue-600`} />
                        <div className={`text-2xl font-bold mb-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    <span>View Full Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Success Story</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;