
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:ahmedelbamby1102003@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/AhmedelBamby', '_blank', 'noopener noreferrer');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/ahmedelbamby/', '_blank', 'noopener noreferrer');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden safe-area-padding">
      {/* Animated background elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-1/2 sm:top-40 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-8">
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-2xl sm:text-4xl font-bold shadow-2xl">
            AE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Ahmed ElBamby
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 sm:mb-6">Data Scientist</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Aspiring Data Scientist with a strong foundation in Deep Learning, Machine Learning, and Image Processing. 
            Passionate about exploring new technologies and bridging Mathematics, Statistics, and Programming to develop efficient models.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in px-4">
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm sm:text-base">
            <MapPin size={16} className="sm:hidden" />
            <MapPin size={18} className="hidden sm:block" />
            <span>Sidi Gaber, Alex, Egypt</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm sm:text-base">
            <Phone size={16} className="sm:hidden" />
            <Phone size={18} className="hidden sm:block" />
            <span>+201096562363</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in px-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
            onClick={handleContactClick}
          >
            <Mail className="mr-2" size={18} />
            Contact Me
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
            onClick={handleGithubClick}
          >
            <Github className="mr-2" size={18} />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300 touch-target w-full sm:w-auto"
            onClick={handleLinkedInClick}
          >
            <Linkedin className="mr-2" size={18} />
            LinkedIn
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown size={28} className="sm:hidden mx-auto text-gray-400" />
          <ChevronDown size={32} className="hidden sm:block mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
