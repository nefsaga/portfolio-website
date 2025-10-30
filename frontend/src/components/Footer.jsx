import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#141b3d] border-t border-[#1e2749] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-[#a0aec0]">
              Dijital dönüşümün öncü ortağı
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                >
                  Hakkımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                >
                  Projeler
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              <li className="text-[#a0aec0]">Web Geliştirme</li>
              <li className="text-[#a0aec0]">Mobil Uygulama</li>
              <li className="text-[#a0aec0]">UI/UX Tasarım</li>
              <li className="text-[#a0aec0]">Danışmanlık</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-[#a0aec0] hover:text-[#ff6b35] transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1e2749] text-center">
          <p className="text-[#a0aec0]">
            © {currentYear} Portfolio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
