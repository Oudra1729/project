import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Zap
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المنتجات', href: '#products' },
    { name: 'اتصل بنا', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'مركز المساعدة', href: '#help' },
    { name: 'الشحن والتوصيل', href: '#shipping' },
    { name: 'سياسة الاستبدال', href: '#returns' },
    { name: 'الضمان', href: '#warranty' }
  ];

  const legalLinks = [
    { name: 'شروط الخدمة', href: '#terms' },
    { name: 'سياسة الخصوصية', href: '#privacy' },
    { name: 'ملفات تعريف الارتباط', href: '#cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">تيك ستور  </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نحن نقدم تجربة فريدة في عالم التكنولوجيا من خلال منتجات فائقة الجودة واستشارة للتصميم المبتكر والتقنيات الحديثة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">الدعم والمساعدة</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>info@techstore.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone className="h-5 w-5 text-orange-500" />
                <span dir="ltr">+212 6 659 8053</span>
              </div>
              <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-400">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span>الدارالبيضاء  المغرب</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 تيك ستور. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;