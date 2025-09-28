import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../types";

const categories = [
  { value: "all", label: "كل الفئات" },
  { value: "Electronics", label: "إلكترونيات" },
  { value: "Wearables", label: "أجهزة قابلة للارتداء" },
  { value: "Kitchen Appliances", label: "أجهزة المطبخ" },
  { value: "Computers", label: "أجهزة الكمبيوتر" },
];

const sortOptions = [
  { value: "newest", label: "الأحدث" },
  { value: "price_low", label: "الأرخص" },
  { value: "price_high", label: "الأغلى" },
  { value: "rating", label: "التقييم" },
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].value // "all"
  );
  const [sortBy, setSortBy] = useState<string>(
    sortOptions[0].value // "newest"
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();
        console.log("Fetched products:", data);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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
      <div className="p-8 text-center">
        <h2>جارٍ تحميل المنتجات...</h2>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* الفلاتر */}
        <div className="mb-8 flex gap-4">
          <div>
            <label htmlFor="category" className="sr-only">
              اختر الفئة
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-2 rounded"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="sr-only">
              ترتيب المنتجات
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* قائمة المنتجات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {renderStars(product.rating || 0)}
                <span>({product.reviews_count || 0})</span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold">{product.price} دم</span>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  اطلب
                </Link>
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
