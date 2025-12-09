import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Github, Chrome, Apple, Eye, EyeOff, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  const socialProviders = [
    { name: 'Google', icon: Chrome, gradient: 'from-red-500 to-yellow-500' },
    { name: 'GitHub', icon: Github, gradient: 'from-gray-700 to-gray-900' },
    { name: 'Apple', icon: Apple, gradient: 'from-gray-600 to-black' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5b6ef5] via-[#7c3aed] to-[#9333ea] rounded-3xl opacity-20 blur-2xl" />
              
              {/* Modal content */}
              <div className="relative bg-[#1a1d2e] rounded-3xl border border-white/10 overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl text-center mb-2 text-white font-['Clash_Display',sans-serif]">
                    {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <p className="text-center text-white/60 mb-8">
                    {activeTab === 'login' 
                      ? 'Sign in to continue to SecureScope' 
                      : 'Start securing your infrastructure today'}
                  </p>

                  {/* Tab Switcher */}
                  <div className="relative flex gap-2 p-1 bg-[#0f1117] rounded-xl mb-8">
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-y-1 bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] rounded-lg"
                      initial={false}
                      animate={{
                        x: activeTab === 'login' ? 4 : '50%',
                        width: 'calc(50% - 8px)'
                      }}
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                    <button
                      onClick={() => setActiveTab('login')}
                      className={`relative z-10 flex-1 py-3 text-sm transition-colors ${
                        activeTab === 'login' ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => setActiveTab('signup')}
                      className={`relative z-10 flex-1 py-3 text-sm transition-colors ${
                        activeTab === 'signup' ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 pb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: activeTab === 'login' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: activeTab === 'login' ? 20 : -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {activeTab === 'signup' && (
                        <div className="space-y-2">
                          <label className="text-sm text-white/80">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="pl-12 h-12 bg-[#0f1117] border-white/5 focus:border-[#5b6ef5] text-white placeholder:text-white/30"
                            />
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <label className="text-sm text-white/80">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <Input
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-12 h-12 bg-[#0f1117] border-white/5 focus:border-[#5b6ef5] text-white placeholder:text-white/30"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm text-white/80">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="pl-12 pr-12 h-12 bg-[#0f1117] border-white/5 focus:border-[#5b6ef5] text-white placeholder:text-white/30"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {activeTab === 'signup' && (
                        <div className="space-y-2">
                          <label className="text-sm text-white/80">Confirm Password</label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                              type={showPassword ? 'text' : 'password'}
                              placeholder="••••••••"
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                              className="pl-12 h-12 bg-[#0f1117] border-white/5 focus:border-[#5b6ef5] text-white placeholder:text-white/30"
                            />
                          </div>
                        </div>
                      )}

                      {activeTab === 'login' ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="remember"
                              checked={formData.rememberMe}
                              onCheckedChange={(checked) => 
                                setFormData({ ...formData, rememberMe: checked as boolean })
                              }
                              className="border-white/20"
                            />
                            <label htmlFor="remember" className="text-sm text-white/60 cursor-pointer">
                              Remember me
                            </label>
                          </div>
                          <a href="#" className="text-sm text-[#5b6ef5] hover:text-[#7c3aed] transition-colors">
                            Forgot password?
                          </a>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="terms"
                            checked={formData.acceptTerms}
                            onCheckedChange={(checked) => 
                              setFormData({ ...formData, acceptTerms: checked as boolean })
                            }
                            className="border-white/20 mt-0.5"
                          />
                          <label htmlFor="terms" className="text-sm text-white/60 cursor-pointer">
                            I agree to the{' '}
                            <a href="#" className="text-[#5b6ef5] hover:text-[#7c3aed] transition-colors">
                              Terms of Service
                            </a>
                            {' '}and{' '}
                            <a href="#" className="text-[#5b6ef5] hover:text-[#7c3aed] transition-colors">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full h-12 bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-base"
                      >
                        {activeTab === 'login' ? 'Sign In' : 'Create Account'}
                      </Button>
                    </motion.div>
                  </AnimatePresence>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/5" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-[#1a1d2e] text-white/40">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-3 gap-3">
                    {socialProviders.map((provider) => (
                      <button
                        key={provider.name}
                        type="button"
                        className="h-12 rounded-xl bg-[#0f1117] border border-white/5 hover:border-white/10 hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all group"
                      >
                        <provider.icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-sm text-white/40">
                    <Lock className="w-4 h-4" />
                    <span>256-bit SSL encryption</span>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
