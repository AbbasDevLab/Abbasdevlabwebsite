import React from 'react';
import { Award, Users, Globe, Code2, Target, Heart, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '200+', label: 'Projects Completed', icon: CheckCircle },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Technologies', icon: Code2 },
    { number: '15+', label: 'Countries Served', icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision-Driven',
      description: 'Every line of code serves a purpose. We deliver solutions that precisely meet your business objectives.',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships based on trust and exceptional results.',
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      icon: Zap,
      title: 'Innovation-First',
      description: 'We stay ahead of technology trends to give your business a competitive edge in the digital landscape.',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Abbas Dev Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a premier software development company dedicated to transforming businesses 
            through innovative technology solutions and exceptional craftsmanship.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Journey
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between innovative ideas and powerful digital solutions, 
                Abbas Dev Lab has grown from a passionate startup to a trusted technology partner for businesses worldwide.
              </p>
              <p>
                Our expertise spans web development, mobile applications, cloud solutions, and enterprise integrations. 
                We specialize in modern technologies like React, Node.js, React Native, and cutting-edge cloud platforms.
              </p>
              <p>
                What sets us apart is our commitment to understanding your unique business challenges and delivering 
                solutions that not only meet your current needs but scale with your future growth.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">ISO 9001:2015 Certified</div>
                <div className="text-sm text-gray-600">Quality Management System</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Led by Innovation Experts
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our leadership team combines decades of experience in software development, 
            business strategy, and technology innovation to guide every project to success.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Haider Abbas</div>
                  <div className="text-blue-100">CEO & Technical Director</div>
                </div>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                "At Abbas Dev Lab, we believe that great software is built by great teams. 
                Our mission is to create technology solutions that not only solve today's challenges 
                but empower businesses to thrive in tomorrow's digital landscape."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;