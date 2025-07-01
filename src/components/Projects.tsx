
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Seat Belt Detection",
      description: "Advanced computer vision system using Hough Line Transform and Canny Edge Detection to identify seat belt usage in vehicles.",
      icon: Shield,
      technologies: ["Computer Vision", "OpenCV", "Hough Transform", "Edge Detection"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Heart Disease Prediction Model",
      description: "Machine learning model for early detection and prediction of heart disease using clinical data and advanced algorithms.",
      icon: Heart,
      technologies: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Brain Tumor MRI Prediction",
      description: "Deep learning model for medical image analysis to detect and classify brain tumors from MRI scans with high accuracy.",
      icon: Brain,
      technologies: ["Deep Learning", "Medical Imaging", "TensorFlow", "MRI Analysis"],
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 safe-area-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Showcasing innovative solutions in machine learning, computer vision, and medical AI
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 leading-tight">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
