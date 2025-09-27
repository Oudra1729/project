import {  Truck, Shield, Headphones, Settings, Zap, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">

    <Navbar onLoginClick={() => { /* handle login click here */ }} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white text-center">
        <span className="inline-block mb-6 px-3 py-1 bg-orange-100 text-orange-700 rounded-full">خدماتنا المتميزة</span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          خدمات <span className="text-orange-500">شاملة</span> لتجربة مثالية
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لضمان حصولك على أفضل تجربة تسوق وما بعد البيع
        </p>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدماتنا الأساسية</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">نوفر لك كل ما تحتاجه لتجربة تسوق مريحة وآمنة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "الأمان والجودة", color: "green", description: "جميع منتجاتنا أصلية ومضمونة من الشركات المصنعة مع شهادات الجودة المعتمدة", points: ["منتجات أصلية 100%", "شهادات جودة معتمدة", "فحص دقيق قبل الشحن"] },
              { icon: Truck, title: "الشحن السريع", color: "blue", description: "خدمة شحن سريعة وآمنة لجميع أنحاء المغرب مع إمكانية التتبع المباشر", points: ["توصيل خلال 24-48 ساعة", "تتبع الطلب مباشرة", "تغليف آمن ومحكم"] },
              { icon: Headphones, title: "الدعم الفني", color: "purple", description: "فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك وحل جميع مشاكلك التقنية", points: ["دعم 24/7", "خبراء تقنيون مختصون", "حلول سريعة وفعالة"] },
              { icon: Settings, title: "التصميم المخصص", color: "orange", description: "خدمات تصميم وتخصيص الأجهزة حسب احتياجاتك الشخصية والمهنية", points: ["تصميم حسب الطلب", "استشارة تقنية مجانية", "حلول مبتكرة"] },
              { icon: Zap, title: "الاتصال الذكي", color: "red", description: "حلول الاتصال الذكي وإنترنت الأشياء لمنزلك ومكتبك العصري", points: ["أنظمة ذكية متطورة", "تكامل سلس", "تحكم عن بُعد"] },
              { icon: Shield, title: "التخصيص والضمان", color: "teal", description: "ضمان شامل على جميع المنتجات مع خدمات صيانة وإصلاح متخصصة", points: ["ضمان شامل", "صيانة دورية", "قطع غيار أصلية"] },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-500`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-center">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.points.map((point, j) => (
                    <li key={j}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">كيف نعمل</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">عملية بسيطة وواضحة لضمان حصولك على أفضل خدمة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "اختر المنتج", desc: "تصفح مجموعتنا الواسعة واختر المنتج المناسب لك" },
              { step: 2, title: "اطلب واشتري", desc: "أضف المنتج للسلة وأكمل عملية الشراء بأمان" },
              { step: 3, title: "نحضر ونشحن", desc: "نحضر طلبك بعناية ونشحنه إليك بسرعة وأمان" },
              { step: 4, title: "استمتع بالمنتج", desc: "استلم منتجك واستمتع بالدعم المستمر" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}
