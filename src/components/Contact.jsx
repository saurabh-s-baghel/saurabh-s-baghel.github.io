import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, socialLinks } from '../data/mock';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-40 h-0.5 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {/* Email */}
                <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10 transition-all">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10 transition-all">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-gray-400">Edmonton, Alberta, Canada</p>
                    </div>
                  </CardContent>
                </Card>

                {/* University */}
                <Card className="bg-zinc-900 border-zinc-800 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10 transition-all">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Send className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">University</h4>
                      <p className="text-gray-400">{personalInfo.university}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon] || Mail;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-black-900 border border-white-800 rounded-lg flex items-center justify-center hover:bg-amber-500/10 hover:ring-1 hover:ring-amber-400  hover:border-white-400 transition-all group"
                      aria-label={social.name}
                    >
                      <Icon className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Message Card */}
          <div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <div className="space-y-6">
                  <p className="text-gray-400">
                    I'm currently looking for opportunities in Software development, Android development, and Cybersecurity. If you'd like to work together or just want to chat, feel free to drop me an email!
                  </p>
                  <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
                    <p className="text-sm text-gray-500 mb-2">Quick Email:</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-red-300 hover:text-red-400 font-semibold text-lg transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="pt-4">
                    <a
                      href={`mailto:${personalInfo.email}?subject=Let's Work Together`}
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-yellow-400 hover:from-yellow-400 hover:to-red-400 text-black font-bold py-4 rounded-lg transition-colors"
                    >
                      <Mail className="mr-2" size={20} />
                      Compose Email
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
