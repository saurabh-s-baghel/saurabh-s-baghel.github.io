import React from 'react';
import { Code2, Shield, Brain, Smartphone, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { aboutMe } from '../data/mock';

const About = () => {
  const interestIcons = {
    'Software Development': Code2,
    'Android Development': Smartphone,
    'Cybersecurity': Shield,
    'Reinforcement Learning': Brain,
    'UI/UX Design': Palette
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Get to know me</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {aboutMe.description}
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">My Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutMe.interests.map((interest) => {
                  const Icon = interestIcons[interest] || Code2;
                  return (
                    <Card key={interest} className="bg-zinc-900 border-zinc-800 hover:border-red-900/50 transition-colors">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                          <Icon className="text-red-500" size={20} />
                        </div>
                        <span className="text-gray-300 font-medium">{interest}</span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {aboutMe.skills
                        .filter((skill) => skill.category === 'language')
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="bg-zinc-800 text-gray-300 hover:bg-red-600 hover:text-white transition-colors px-4 py-2"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Frameworks & Libraries</h4>
                    <div className="flex flex-wrap gap-2">
                      {aboutMe.skills
                        .filter((skill) => skill.category === 'framework')
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="bg-zinc-800 text-gray-300 hover:bg-red-600 hover:text-white transition-colors px-4 py-2"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {aboutMe.skills
                        .filter((skill) => skill.category === 'tool')
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="bg-zinc-800 text-gray-300 hover:bg-red-600 hover:text-white transition-colors px-4 py-2"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
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

export default About;
