
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Image Processing", level: 88 },
        { name: "TensorFlow/Keras", level: 82 },
        { name: "PyTorch", level: 75 }
      ]
    },
    {
      title: "Programming & Data",
      skills: [
        { name: "Python", level: 92 },
        { name: "Data Analysis", level: 88 },
        { name: "Data Science", level: 85 },
        { name: "Statistical Analysis", level: 80 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Problem Solving", level: 92 },
        { name: "Fast Learning", level: 95 },
        { name: "Leadership", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white safe-area-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Technical and soft skills developed through academic studies and hands-on experience
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{skill.name}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
