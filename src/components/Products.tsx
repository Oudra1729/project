import { useState, useEffect } from "react";
import { Star, Heart, Eye, MessageCircle, Filter } from "lucide-react";
import { Product } from "../types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Mock data for demonstration (replace with actual Supabase query)
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones Pro",
      name_ar: "سماعات لاسلكية احترافية",
      description: "Premium wireless headphones with noise cancellation",
      description_ar: "سماعات لاسلكية فاخرة مع خاصية إلغاء الضوضاء",
      price: 299,
      original_price: 399,
      image_url:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      image_url:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      image_url:
        "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      image_url:
        "https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      image_url:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
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
      description_ar:
        "موزع USB-C متعدد المنافذ للحاسوب المحمول والأجهزة اللوحية",
      price: 89,
      image_url:
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "accessories",
      category_ar: "الإكسسوارات",
      rating: 4.3,
      reviews_count: 45,
      in_stock: true,
      features: ["4K HDMI", "USB 3.0", "Power Delivery"],
      features_ar: ["HDMI 4K", "USB 3.0", "توصيل الطاقة"],
      created_at: "2024-01-01",
    },
  ];

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    loadProducts();
  }, [setProducts]);

  const categories = [
    { value: "all", label: "جميع المنتجات" },
    { value: "audio", label: "الصوتيات" },
    { value: "wearables", label: "الأجهزة القابلة للارتداء" },
    { value: "gaming", label: "الألعاب" },
    { value: "accessories", label: "الإكسسوارات" },
  ];

  const sortOptions = [
    { value: "newest", label: "الأحدث" },
    { value: "price_low", label: "السعر: من الأقل للأعلى" },
    { value: "price_high", label: "السعر: من الأعلى للأقل" },
    { value: "rating", label: "الأعلى تقييماً" },
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price_low":
          return a.price - b.price;
        case "price_high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
        default:
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
      }
    });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-4"></div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            منتجاتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا المتنوعة من المنتجات التقنية عالية الجودة
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              aria-label="تصفية حسب الفئة"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            title="تصفية حسب الترتيب"
            aria-label="تصفية حسب الترتيب"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name_ar}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.original_price && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    خصم{" "}
                    {Math.round(
                      ((product.original_price - product.price) /
                        product.original_price) *
                        100
                    )}
                    %
                  </div>
                )}
                {!product.in_stock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
                      غير متوفر
                    </span>
                  </div>
                )}

                {/* Hover Actions */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-50 transition-colors"
                    title="إضافة إلى المفضلة"
                  >
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                  <button
                    className="bg-white p-2 rounded-full shadow-lg hover:bg-orange-50 transition-colors"
                    title="عرض المنتج"
                  >
                    <Eye className="h-5 w-5 text-gray-600 hover:text-orange-500" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                    {product.category_ar}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {product.name_ar}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description_ar}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features_ar.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features_ar.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{product.features_ar.length - 2} المزيد
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews_count} تقييم)
                  </span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price} دم
                    </span>
                    {product.original_price && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.original_price} دم
                      </span>
                    )}
                  </div>

                  <button
                    disabled={!product.in_stock}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {product.in_stock ? "اطلب عبر واتساب" : "غير متوفر"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد منتجات في هذه الفئة</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
