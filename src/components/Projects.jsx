import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'android', name: 'Android' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
    { id: 'machine-learning', name: 'ML/RL' },
    { id: 'web', name: 'Web' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in software development, Android, cybersecurity, and machine learning.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? 'default' : 'outline'}
              className={`${
                filter === category.id
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'border-zinc-700 text-gray-400 hover:border-red-600 hover:text-red-500'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-900 border-zinc-800 hover:border-red-900/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-800 text-gray-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-zinc-700 text-gray-400 hover:border-red-600 hover:text-red-500 hover:bg-transparent"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
