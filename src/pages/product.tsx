import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  name_ar?: string;
  description?: string;
  description_ar?: string;
  badge?: string;
  price: number;
  original_price?: number;
  discount?: number;
  fullDescription?: string;
  features: string[];
  features_ar?: string[];
  specifications?: Record<string, string>;
  image: string[];
  in_stock?: boolean;
}


const mockProducts: Product[] = [
// products-data.js
export const mockProducts = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    name_ar: "سماعات لاسلكية احترافية",
    description: "Premium wireless headphones with noise cancellation",
    description_ar: "سماعات لاسلكية فاخرة مع خاصية إلغاء الضوضاء",
    price: 299,
    original_price: 399,
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "audio",
    category_ar: "الصوتيات",
    rating: 4.8,
    reviews_count: 124,
    in_stock: true,
    features: ["Noise Cancellation", "Bluetooth 5.0", "30h Battery"],
    features_ar: ["إلغاء الضوضاء", "بلوتوث 5.0", "بطارية 30 ساعة"],
    created_at: "2024-01-15",
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    name_ar: "ساعة ذكية سيريز إكس",
    description: "Advanced smartwatch with health monitoring",
    description_ar: "ساعة ذكية متطورة مع مراقبة الصحة",
    price: 449,
    original_price: 549,
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1337974/pexels-photo-1337974.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/5081929/pexels-photo-5081929.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "wearables",
    category_ar: "الأجهزة القابلة للارتداء",
    rating: 4.6,
    reviews_count: 89,
    in_stock: true,
    features: ["Heart Rate Monitor", "GPS", "Water Resistant"],
    features_ar: ["مراقب معدل ضربات القلب", "جي بي إس", "مقاوم للماء"],
    created_at: "2024-01-10",
  },
  {
    id: "3",
    name: "Gaming Mechanical Keyboard",
    name_ar: "لوحة مفاتيح ميكانيكية للألعاب",
    description: "RGB mechanical keyboard for gaming enthusiasts",
    description_ar: "لوحة مفاتيح ميكانيكية بإضاءة RGB لعشاق الألعاب",
    price: 159,
    images: [
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "gaming",
    category_ar: "الألعاب",
    rating: 4.7,
    reviews_count: 156,
    in_stock: true,
    features: ["RGB Lighting", "Mechanical Switches", "Anti-Ghosting"],
    features_ar: ["إضاءة RGB", "مفاتيح ميكانيكية", "مقاومة الأشباح"],
    created_at: "2024-01-08",
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    name_ar: "قاعدة شحن لاسلكية",
    description: "Fast wireless charging pad for all devices",
    description_ar: "قاعدة شحن لاسلكية سريعة لجميع الأجهزة",
    price: 79,
    original_price: 99,
    images: [
      "https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/4526378/pexels-photo-4526378.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "accessories",
    category_ar: "الإكسسوارات",
    rating: 4.4,
    reviews_count: 67,
    in_stock: true,
    features: ["Fast Charging", "Universal Compatibility", "LED Indicator"],
    features_ar: ["شحن سريع", "توافق عالمي", "مؤشر LED"],
    created_at: "2024-01-05",
  },
  {
    id: "5",
    name: "Bluetooth Speaker Pro",
    name_ar: "مكبر صوت بلوتوث احترافي",
    description: "Portable Bluetooth speaker with premium sound",
    description_ar: "مكبر صوت بلوتوث محمول بصوت فاخر",
    price: 199,
    images: [
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/6832088/pexels-photo-6832088.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "audio",
    category_ar: "الصوتيات",
    rating: 4.5,
    reviews_count: 93,
    in_stock: false,
    features: ["360° Sound", "Waterproof", "12h Battery"],
    features_ar: ["صوت 360 درجة", "مقاوم للماء", "بطارية 12 ساعة"],
    created_at: "2024-01-03",
  },
  {
    id: "6",
    name: "USB-C Hub Multi-Port",
    name_ar: "موزع USB-C متعدد المنافذ",
    description: "Multi-port USB-C hub for laptops and tablets",
    description_ar: "موزع USB-C متعدد المنافذ للحاسوب المحمول والأجهزة اللوحية",
    price: 89,
    images: [
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "accessories",
    category_ar: "الإكسسوارات",
    rating: 4.3,
    reviews_count: 45,
    in_stock: true,
    features: ["4K HDMI", "USB 3.0", "Power Delivery"],
    features_ar: ["HDMI 4K", "USB 3.0", "توصيل الطاقة"],
    created_at: "2024-01-01",
  },
  {
    id: "7",
    name: "Wireless Mouse Gaming",
    name_ar: "ماوس لاسلكي للألعاب",
    description: "High precision wireless gaming mouse with RGB lighting",
    description_ar: "ماوس لاسلكي عالي الدقة للألعاب مع إضاءة RGB",
    price: 129,
    original_price: 169,
    images: [
      "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "gaming",
    category_ar: "الألعاب",
    rating: 4.6,
    reviews_count: 78,
    in_stock: true,
    features: ["16000 DPI", "RGB Lighting", "Wireless"],
    features_ar: ["16000 DPI", "إضاءة RGB", "لاسلكي"],
    created_at: "2024-01-12",
  },
  {
    id: "8",
    name: "Fitness Tracker Band",
    name_ar: "سوار تتبع اللياقة البدنية",
    description: "Advanced fitness tracker with heart rate monitoring",
    description_ar: "سوار تتبع اللياقة البدنية المتقدم مع مراقبة معدل ضربات القلب",
    price: 89,
    original_price: 119,
    images: [
      "https://images.pexels.com/photos/5081929/pexels-photo-5081929.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/1337974/pexels-photo-1337974.jpeg?auto=compress&cs=tinysrgb&w=500",
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500"
    ],
    image_url: "https://images.pexels.com/photos/5081929/pexels-photo-5081929.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "wearables",
    category_ar: "الأجهزة القابلة للارتداء",
    rating: 4.2,
    reviews_count: 156,
    in_stock: true,
    features: ["Heart Rate Monitor", "Sleep Tracking", "Waterproof"],
    features_ar: ["مراقب معدل ضربات القلب", "تتبع النوم", "مقاوم للماء"],
    created_at: "2024-01-07",
  },
];

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (productId) {
      const foundProduct = mockProducts.find((p) => p.id === productId);
      setProduct(foundProduct || null);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <p className="text-red-500 bg-red-500/10 p-4 rounded-md font-medium">
          Product not found
        </p>
      </div>
    );
  }

  const getBadgeStyle = (badge: string) => {
    const styles: Record<string, string> = {
      "الأكثر مبيعاً": "red",
      جديد: "green",
      "عرض محدود": "orange",
      مميز: "purple",
      للمحترفين: "blue",
      "توصية الخبراء": "yellow",
    };
    return styles[badge] || "stone";
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-stone-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-bold text-xl text-black">تيك ستور</span>
            <Link to="/">
              <button className="flex items-center text-stone-600 hover:text-black transition-colors">
                العودة للصفحة الرئيسية
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4 order-2 lg:order-1">
          {product.badge && (
            <div className="flex justify-end">
              <span
                className={`text-sm sm:text-md font-medium px-3 py-2 sm:px-4 shadow-sm rounded-full border text-${getBadgeStyle(
                  product.badge
                )}-500 border-${getBadgeStyle(
                  product.badge
                )}-500 bg-${getBadgeStyle(product.badge)}-200`}
              >
                {product.badge}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-right">
            {product.name}
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-5 items-center justify-end">
            {product.discount && (
              <span className="bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded">
                {product.discount}% وفر
              </span>
            )}
            {product.original_price && (
              <span
                className="text-lg sm:text-xl text-stone-500 line-through font-[500]"
                dir="rtl"
              >
                {product.original_price} درهم
              </span>
            )}
            <span className="text-2xl sm:text-3xl font-[700] text-black" dir="rtl">
              {product.price} درهم
            </span>
          </div>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed text-right">
            {product.fullDescription || product.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-black text-right">
              المميزات الرئيسية
            </h3>
            <ul className="flex flex-col items-end gap-2">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-reverse space-x-3"
                  dir="rtl"
                >
                  <span className="text-sm sm:text-base text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {product.specifications && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-black text-right">
                المواصفات التقنية
              </h3>
              <div className="bg-white rounded-lg border border-stone-200 p-3 sm:p-4">
                <dl className="space-y-2 sm:space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-stone-100 last:border-b-0"
                    >
                      <dd className="text-stone-600 text-sm sm:text-base">{value}</dd>
                      <dt className="font-semibold text-black text-sm sm:text-base">{key}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4 order-1 lg:order-2">
          <img
            src={product.image[selectedImage]}
            alt={product.name}
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl sm:rounded-2xl object-cover shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {product.image.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`ring-1 ring-stone-200 rounded-lg ${
                  selectedImage === index ? "ring-2 ring-black" : ""
                }`}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-full h-[80px] sm:h-[120px] lg:h-[180px] rounded-lg object-cover shadow-xl"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
