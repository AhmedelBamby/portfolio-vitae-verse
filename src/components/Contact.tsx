
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmedelbamby1102003@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/AhmedelBamby', '_blank', 'noopener noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ahmedelbamby/', '_blank', 'noopener noreferrer');
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white safe-area-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Ready to collaborate on innovative AI and machine learning projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardHeader className="text-center p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">Get In Touch</CardTitle>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on projects, or share insights about data science and AI.
              </p>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="sm:hidden" />
                    <Mail size={24} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:ahmedelbamby1102003@gmail.com" 
                      className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm break-all"
                    >
                      ahmedelbamby1102003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="sm:hidden" />
                    <Phone size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Phone</h4>
                    <a 
                      href="tel:+201096562363" 
                      className="text-green-400 hover:text-green-300 transition-colors text-xs sm:text-sm"
                    >
                      +20 109 656 2363
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="sm:hidden" />
                    <MapPin size={24} className="hidden sm:block" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Location</h4>
                    <span className="text-gray-300 text-xs sm:text-sm">Sidi Gaber, Alexandria, Egypt</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 touch-target">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin size={20} className="sm:hidden" />
                    <Linkedin size={24} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-white text-sm sm:text-base">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ahmedelbamby/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-pink-400 hover:text-pink-300 transition-colors text-xs sm:text-sm"
                    >
                      /ahmedelbamby
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 sm:pt-6 border-t border-gray-700">
                <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
                    onClick={handleEmailClick}
                  >
                    <Mail className="mr-2" size={18} />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
                    onClick={handleGithubClick}
                  >
                    <Github className="mr-2" size={18} />
                    View GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
                    onClick={handleLinkedInClick}
                  >
                    <Linkedin className="mr-2" size={18} />
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
