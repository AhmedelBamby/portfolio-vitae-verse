
import { Award, Globe, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Paralympic Swimming Record",
      description: "Guinness World Record Holder in 50 meter Paralympic Swimming",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Award,
      title: "Excellence Scholarship",
      description: "Awarded the Excellence and Genius Scholarship from Innovators Support Fund - ISF",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Globe,
      title: "Multilingual Proficiency",
      description: "Fluent in English (B2) and German (A1), enabling international collaboration",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    }
  ];

  const certifications = [
    "Medical Image Modeling using Keras",
    "Machine Learning Specialization",
    "Deep Learning Fundamentals"
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 safe-area-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Achievements & Recognition</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Awards, certifications, and notable accomplishments that demonstrate excellence
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
              <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`${achievement.color}`} size={32} />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 leading-tight">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 sm:p-6 pt-0">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-center p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Award className="mr-2 flex-shrink-0" size={16} />
                <span className="text-xs sm:text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
