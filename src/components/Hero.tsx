
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">
            AE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Ahmed ElBamby
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Data Scientist</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Aspiring Data Scientist with a strong foundation in Deep Learning, Machine Learning, and Image Processing. 
            Passionate about exploring new technologies and bridging Mathematics, Statistics, and Programming to develop efficient models.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} />
            <span>Sidi Gaber, Alex, Egypt</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={18} />
            <span>+201096562363</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <Button variant="outline" size="lg" className="bg-transparent border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
            <Mail className="mr-2" size={18} />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
            <Github className="mr-2" size={18} />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-300">
            <Linkedin className="mr-2" size={18} />
            LinkedIn
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
