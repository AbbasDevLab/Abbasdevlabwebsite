import React from 'react';
import { Monitor, Smartphone, Cloud, Database, Settings, Zap, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'E-commerce Solutions', 'Progressive Web Apps', 'Performance Optimization'],
      gradient: 'from-blue-600 to-blue-800',
      delay: '0'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['React Native', 'iOS & Android', 'Cross-Platform', 'App Store Optimization'],
      gradient: 'from-teal-600 to-teal-800',
      delay: '200'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless solutions for modern businesses.',
      features: ['AWS & Azure', 'Serverless Architecture', 'DevOps & CI/CD', 'Microservices'],
      gradient: 'from-orange-600 to-red-600',
      delay: '400'
    },
    {
      icon: Database,
      title: 'Enterprise Integrations',
      description: 'Seamlessly connect your systems with ERP, CRM, and third-party applications.',
      features: ['Odoo Integration', 'Dynamics 365', 'API Development', 'Data Migration'],
      gradient: 'from-purple-600 to-purple-800',
      delay: '600'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed specifically for your unique business needs.',
      features: ['Business Logic', 'Workflow Automation', 'Custom Dashboards', 'Analytics'],
      gradient: 'from-green-600 to-green-800',
      delay: '800'
    },
    {
      icon: Zap,
      title: 'MVP Development',
      description: 'Rapid prototyping and MVP development to validate your ideas quickly.',
      features: ['Rapid Prototyping', 'Market Validation', 'Iterative Development', 'Growth Strategy'],
      gradient: 'from-yellow-600 to-orange-600',
      delay: '1000'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive software development services 
            that transform your vision into powerful digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
                style={{
                  animationDelay: `${service.delay}ms`
                }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>

                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;