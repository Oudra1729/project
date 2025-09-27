import React from 'react';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Wifi, 
  CheckCircle, 
  Palette 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "الابتكار التقني",
      description: "حلول تقنية متطورة تجمع بين الأداء العالي والتصميم العصري المبتكر مع ضمان الجودة والأمان لتجربة استخدام مثالية ومستقبلية.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "الأداء العالي",
      description: "منتجات مُحسّنة لتقديم أفضل أداء ممكن مع خاصيات متطورة وسرعة فائقة وكفاءة عالية في جميع الظروف والأوقات.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "الأمان والجودة",
      description: "نوفر أقصى مستويات الحماية والأمان مع خاصيات شاملة لحماية استثمارك وبياناتك بأقوى معايير الأمان العالمية المعتمدة.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "الاتصال الذكي",
      description: "تقنيات اتصال متقدمة تضمن لك الاتصال بالإنترنت والأجهزة بسرعة عالية واستقرار تام مع تقنيات حديثة ومتطورة.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "التخصيص والدقة",
      description: "نقدم حلول مُخصصة تناسب احتياجاتك المحددة مع خيارات دقيقة ومرونة في التصميم والاستخدام وتجربة شخصية مميزة.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "التصميم الغامر",
      description: "تصميم أنيق وعملي يُحسن من تجربة المستخدم بطريقة مبتكرة وجذابة مع مواد عالية الجودة وتشطيبات فاخرة ومتينة.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-4xl font-bold text-gray-900">مُصمم بدقة وهدف</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            كل منتج يحكي قصة من الحرفية الاستثنائية والتصميم المدروس المبتكر
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;