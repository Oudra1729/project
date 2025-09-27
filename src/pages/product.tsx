import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  name_ar?: string;
  description?: string;
  description_ar?: string;
  fullDescription?: string;
  badge?: string;
  price: number;
  original_price?: number;
  discount?: number;
  features: string[];
  features_ar?: string[];
  specifications?: Record<string, string>;
  images: string[];
  in_stock?: boolean;
}

// Mock data
const mockProducts: Product[] = [
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
    badge: "الأكثر مبيعاً",
    features: ["Noise Cancellation", "Bluetooth 5.0", "30h Battery"],
    features_ar: ["إلغاء الضوضاء", "بلوتوث 5.0", "بطارية 30 ساعة"],
    specifications: { "Battery Life": "30 hours", "Range": "10m", "Color": "Black" },
    in_stock: true,
  },
  // Add other products here...
];

const badgeClassesMap: Record<string, string> = {
  red: "text-red-500 border-red-500 bg-red-200",
  green: "text-green-500 border-green-500 bg-green-200",
  orange: "text-orange-500 border-orange-500 bg-orange-200",
  purple: "text-purple-500 border-purple-500 bg-purple-200",
  blue: "text-blue-500 border-blue-500 bg-blue-200",
  yellow: "text-yellow-500 border-yellow-500 bg-yellow-200",
  stone: "text-stone-500 border-stone-500 bg-stone-200",
};

const getBadgeColor = (badge: string) => {
  const map: Record<string, string> = {
    "الأكثر مبيعاً": "red",
    جديد: "green",
    "عرض محدود": "orange",
    مميز: "purple",
    للمحترفين: "blue",
    "توصية الخبراء": "yellow",
  };
  return map[badge] || "stone";
};

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (productId) {
      const found = mockProducts.find((p) => p.id === productId);
      setProduct(found || null);
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

  const badgeColor = getBadgeColor(product.badge || "");

  return (
    <>
      {/* Navbar */}
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

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Left Column */}
        <div className="space-y-4 order-2 lg:order-1">
          {product.badge && (
            <div className="flex justify-end">
              <span
                className={`text-sm sm:text-md font-medium px-3 py-2 sm:px-4 shadow-sm rounded-full border ${
                  badgeClassesMap[badgeColor]
                }`}
              >
                {product.badge}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-right">
            {product.name}
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-5 items-center justify-end">
            {product.original_price && (
              <span className="text-lg sm:text-xl text-stone-500 line-through font-[500]" dir="rtl">
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
            <h3 className="text-lg sm:text-xl font-bold text-black text-right">المميزات الرئيسية</h3>
            <ul className="flex flex-col items-end gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-reverse space-x-3" dir="rtl">
                  <span className="text-sm sm:text-base text-stone-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {product.specifications && (
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-black text-right">المواصفات التقنية</h3>
              <div className="bg-white rounded-lg border border-stone-200 p-3 sm:p-4">
                <dl className="space-y-2 sm:space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-stone-100 last:border-b-0">
                      <dd className="text-stone-600 text-sm sm:text-base">{value}</dd>
                      <dt className="font-semibold text-black text-sm sm:text-base">{key}</dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Images */}
        <div className="space-y-4 order-1 lg:order-2">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl sm:rounded-2xl object-cover shadow-lg"
          />
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {product.images.map((img, index) => (
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
