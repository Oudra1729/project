import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Navbar */}
      <Navbar onLoginClick={() => { /* handle login click here */ }} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block mb-6 px-4 py-1 bg-orange-100 text-orange-700 rounded-full font-medium">
            تواصل معنا
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            نحن هنا <span className="text-orange-500">لمساعدتك</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            فريقنا المتخصص جاهز للإجابة على جميع استفساراتك وتقديم أفضل الحلول التقنية لاحتياجاتك
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              📍
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">العنوان</h3>
              <p className="text-gray-600">
                شارع محمد الخامس، الحي التجاري
                <br />
                الدار البيضاء 20000، المغرب
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              📞
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">الهاتف</h3>
              <p className="text-gray-600">
                +212 5 22 00 00 00
                <br />
                +212 6 00 00 00 00
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              ✉️
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">
                info@beakstore.com
                <br />
                support@beakstore.com
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              ⏰
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">ساعات العمل</h3>
              <p className="text-gray-600">
                الإثنين - الجمعة: 9:00 - 18:00
                <br />
                السبت: 10:00 - 16:00
                <br />
                الأحد: مغلق
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h2>
          <p className="text-gray-600 mb-4">سنرد عليك في أقرب وقت ممكن</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="الاسم الأول"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="الاسم الأخير"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="tel"
            placeholder="رقم الهاتف"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <input
            type="text"
            placeholder="الموضوع"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <textarea
            placeholder="اكتب رسالتك هنا..."
            className="border border-gray-300 rounded-md p-2 w-full min-h-[120px]"
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md flex items-center justify-center gap-2">
            إرسال الرسالة
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">موقعنا</h2>
          <p className="text-gray-600 mb-6">زرنا في متجرنا الرئيسي بالدار البيضاء</p>
          <div className="h-96 rounded-2xl bg-gray-300 flex items-center justify-center">
            خريطة تفاعلية
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
