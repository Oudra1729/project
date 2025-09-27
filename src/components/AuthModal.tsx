import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, register, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    if (!isLogin) {
      if (!name) {
        setError('يرجى إدخال الاسم');
        return;
      }
      if (password !== confirmPassword) {
        setError('كلمات المرور غير متطابقة');
        return;
      }
      if (password.length < 6) {
        setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        return;
      }
    }

    const result = isLogin 
      ? await login(email, password)
      : await register(name, email, password);

    if (result.error) {
      setError(result.error);
    } else {
      onClose();
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setShowPassword(false);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
          title="إغلاق"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </h2>
          <p className="text-gray-600">
            {isLogin ? 'مرحباً بك مرة أخرى' : 'انضم إلينا اليوم'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="أدخل بريدك الإلكتروني"
                dir="ltr"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-12 pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder={isLogin ? "أدخل كلمة المرور" : "اختر كلمة مرور قوية"}
                dir="ltr"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field (Register only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="أعد إدخال كلمة المرور"
                  dir="ltr"
                />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading 
              ? (isLogin ? 'جاري تسجيل الدخول...' : 'جاري إنشاء الحساب...')
              : (isLogin ? 'تسجيل الدخول' : 'إنشاء حساب')
            }
          </button>
        </form>

        {/* Switch Mode */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
            <button
              onClick={switchMode}
              className="text-orange-600 hover:text-orange-700 font-semibold mr-2"
            >
              {isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;