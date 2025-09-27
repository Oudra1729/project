
import { Link } from "react-router-dom";
import { ShoppingBag, Users, Award, Star, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">

       <Navbar onLoginClick={() => { /* handle login click here */ }} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white text-center">
        <span className="inline-block mb-6 px-3 py-1 bg-orange-100 text-orange-700 rounded-full">من نحن</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          نحن <span className="text-orange-500">بيك ستور</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          متجرك الموثوق للتكنولوجيا والإلكترونيات الحديثة. نقدم أفضل المنتجات بأعلى جودة وأسعار تنافسية لتلبية احتياجاتك التقنية
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
            <p className="text-gray-600">عميل راضي</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">منتج متنوع</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5</h3>
            <p className="text-gray-600">سنوات خبرة</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9</h3>
            <p className="text-gray-600">تقييم العملاء</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">قصتنا مع التكنولوجيا</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              بدأت رحلتنا في عام 2019 برؤية واضحة: جعل التكنولوجيا الحديثة في متناول الجميع. نؤمن بأن التقنية يجب أن تكون بسيطة ومفيدة وميسورة التكلفة.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              اليوم، نفخر بكوننا واحدًا من أكثر المتاجر الإلكترونية موثوقية في المنطقة، حيث نخدم آلاف العملاء الراضين ونقدم مجموعة واسعة من المنتجات التقنية عالية الجودة.
            </p>
            <ul className="space-y-4">
              {["منتجات أصلية ومضمونة", "شحن سريع وآمن", "دعم فني متخصص", "ضمان شامل على جميع المنتجات"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="w-24 h-24 text-orange-500 mx-auto mb-4" />
                <p className="text-orange-700 font-medium">متجرك الموثوق للتكنولوجيا</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">ابدأ رحلتك التقنية معنا اليوم</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          اكتشف مجموعتنا الواسعة من المنتجات التقنية واستمتع بتجربة تسوق استثنائية
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/pages/products" className="px-6 py-3 bg-white text-orange-500 rounded-md hover:bg-gray-100 transition-colors">تصفح المنتجات</Link>
          <Link to="/pages/contact" className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-orange-500 transition-colors">تواصل معنا</Link>
        </div>
      </section>
      <Footer />

    </div>
  );
}
