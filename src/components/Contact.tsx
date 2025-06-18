
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ahmedelbamby1102003@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/AhmedelBamby', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ahmedelbamby/', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on innovative AI and machine learning projects
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-4">Get In Touch</CardTitle>
              <p className="text-gray-300">
                I'm always excited to discuss new opportunities, collaborate on projects, or share insights about data science and AI.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:ahmedelbamby1102003@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      ahmedelbamby1102003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a href="tel:+201096562363" className="text-green-400 hover:text-green-300 transition-colors">
                      +20 109 656 2363
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <span className="text-gray-300">Sidi Gaber, Alexandria, Egypt</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/ahmedelbamby/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                      /ahmedelbamby
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-700">
                <div className="flex justify-center space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                    onClick={handleEmailClick}
                  >
                    <Mail className="mr-2" size={18} />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                    onClick={handleGithubClick}
                  >
                    <Github className="mr-2" size={18} />
                    View GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-transparent border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300"
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
