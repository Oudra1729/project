import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center mb-8">
            <span className="text-sm font-bold text-right px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-600">
            مجموعة فاخرة✨{" "}
            <svg
              className="h-3 w-3 inline-block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 17L7 7"></path>
              <path d="M17 7H7v10"></path>
            </svg>
            </span>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ارتق بتجربتك⚡
            <br />
            <span className="bg-black bg-clip-text text-transparent">
              التقنية
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعتنا من الأدوات والاكسسوارات الإلكترونية الحديثة المصممة لتبسيط
            <br />
            حياتك اليومية وجعلها أكثر ذكاءً. الجودة، الأناقة في منتج واحد
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-black text-white px-8 py-4 rounded-xl hover:from-black-600 hover:to-black-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center gap-2">
              تسوق المجموعة
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-black-500 hover:text-black-600 transition-all duration-200 font-semibold text-lg">
              اعرف المزيد
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">+10K</div>
              <div className="text-gray-600">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">+500</div>
              <div className="text-gray-600">منتج متاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">%99</div>
              <div className="text-gray-600">معدل الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;