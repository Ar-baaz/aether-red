import { motion } from 'motion/react';
import { Shield, Zap, Brain, Network, Lock, Code, ArrowRight, Check, Star, Terminal, Target, Bug } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Pentester',
      description: 'Advanced LLM-driven vulnerability analysis that thinks like a security researcher',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Target,
      title: 'Automated Reconnaissance',
      description: 'Comprehensive asset discovery and fingerprinting across your entire infrastructure',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bug,
      title: 'Smart Vulnerability Detection',
      description: 'Real-time scanning with intelligent false positive filtering and severity classification',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Network,
      title: 'Attack Surface Mapping',
      description: 'Visualize and monitor your entire attack surface with interactive network graphs',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Terminal,
      title: 'Interactive Chat Interface',
      description: 'Collaborate with your team in real-time and get instant security insights',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with end-to-end encryption and comprehensive audit logging',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { value: '10M+', label: 'Vulnerabilities Detected' },
    { value: '99.4%', label: 'Accuracy Rate' },
    { value: '2.5s', label: 'Average Scan Time' },
    { value: '24/7', label: 'Continuous Monitoring' }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 hosts',
        'Basic vulnerability scanning',
        'Email support',
        '30-day data retention',
        'Core integrations'
      ]
    },
    {
      name: 'Professional',
      price: '199',
      description: 'For growing security teams',
      features: [
        'Up to 50 hosts',
        'Advanced AI analysis',
        'Priority support',
        '1-year data retention',
        'All integrations',
        'Custom policies',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited hosts',
        'White-glove onboarding',
        'Dedicated support team',
        'Unlimited data retention',
        'Custom integrations',
        'SLA guarantees',
        'Advanced compliance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] dark overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(91, 110, 245, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 110, 245, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-50 border-b border-white/5 bg-[#0f1117]/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-['Clash_Display',sans-serif] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              SecureScope
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Docs</a>
            <Button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#5b6ef5]/10 to-[#7c3aed]/10 border border-[#5b6ef5]/20"
            >
              <span className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] bg-clip-text text-transparent text-sm">
                ⚡ Next-Generation Pentesting Platform
              </span>
            </motion.div>

            <h1 className="text-7xl font-['Clash_Display',sans-serif] mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Security Testing
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5b6ef5] via-[#7c3aed] to-[#9333ea] bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              SecureScope combines cutting-edge AI with traditional pentesting workflows to deliver 
              comprehensive security assessments in seconds, not weeks.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white px-8 py-6 text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5 px-8 py-6 text-lg"
              >
                View Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                Cancel anytime
              </div>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5b6ef5] via-[#7c3aed] to-[#9333ea] rounded-3xl opacity-20 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#1a1d2e] p-2 shadow-2xl overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VjdXJpdHklMjBuZXR3b3JrfGVufDF8fHx8MTc2NDU4ODUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Security Dashboard Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f1117]/60 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {[
                      { label: 'Total Scans', value: '1,234', color: 'from-blue-500 to-cyan-500' },
                      { label: 'Vulnerabilities', value: '89', color: 'from-red-500 to-orange-500' },
                      { label: 'Active Hosts', value: '42', color: 'from-emerald-500 to-teal-500' },
                      { label: 'Security Score', value: '94%', color: 'from-purple-500 to-pink-500' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#1a1d2e]/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <div className="text-white/60 text-sm mb-1">{stat.label}</div>
                        <div className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mini Chart Visualization */}
                  <div className="bg-[#1a1d2e]/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="flex items-end justify-between gap-2 h-16">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#5b6ef5] to-[#7c3aed] rounded-t opacity-80 hover:opacity-100 transition-opacity"
                          style={{ height: `${Math.random() * 80 + 20}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-['Clash_Display',sans-serif] bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Clash_Display',sans-serif] mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Everything you need to secure your infrastructure
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Built for security teams who demand speed, accuracy, and comprehensive coverage
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#5b6ef5]/0 via-[#7c3aed]/0 to-[#5b6ef5]/0 group-hover:from-[#5b6ef5]/50 group-hover:via-[#7c3aed]/50 group-hover:to-[#5b6ef5]/50 rounded-2xl transition-all duration-500 blur-sm" />
                <div className="relative h-full bg-[#1a1d2e] rounded-2xl p-8 border border-white/5 group-hover:border-white/10 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-['Clash_Display',sans-serif] mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Simple, transparent pricing
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white text-sm">
                    Most Popular
                  </div>
                )}
                <div className={`relative h-full bg-[#1a1d2e] rounded-2xl p-8 border ${plan.popular ? 'border-[#5b6ef5]' : 'border-white/5'}`}>
                  <div className="mb-6">
                    <h3 className="text-2xl mb-2 text-white">{plan.name}</h3>
                    <p className="text-white/60">{plan.description}</p>
                  </div>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-['Clash_Display',sans-serif] text-white">
                        {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-white/60">/month</span>
                      )}
                    </div>
                  </div>
                  <Button
                    onClick={onGetStarted}
                    className={`w-full mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-purple-500/30'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5b6ef5] via-[#7c3aed] to-[#9333ea] rounded-3xl opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#1a1d2e] to-[#252a40] rounded-3xl p-16 border border-white/10 text-center">
              <h2 className="text-4xl font-['Clash_Display',sans-serif] mb-4 text-white">
                Ready to transform your security posture?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Join thousands of security teams who trust SecureScope to protect their infrastructure
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-[#5b6ef5] to-[#7c3aed] text-white px-8 py-6 text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all"
                >
                  Start Your Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5 px-8 py-6 text-lg"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5b6ef5] to-[#7c3aed] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-['Clash_Display',sans-serif] text-white">
                  SecureScope
                </span>
              </div>
              <p className="text-white/60 mb-6">
                Next-generation pentesting platform powered by AI. Secure your infrastructure with confidence.
              </p>
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                  >
                    <Star className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">Resources</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex items-center justify-between text-white/40 text-sm">
            <p>© 2025 SecureScope. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}