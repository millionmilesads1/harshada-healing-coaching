/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  ChevronDown, 
  Menu, 
  X,
  Instagram,
  Linkedin,
  Mail,
  Calendar,
  Zap,
  Target,
  ShieldCheck,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-sage">
          Harshada<span className="text-terracotta">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/samantharsha/life-coaching-first-free-call" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sage text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sage/90 transition-all shadow-lg hover:shadow-sage/20"
          >
            Book Discovery Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-sage"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-sand p-6 flex flex-col space-y-6 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://calendly.com/samantharsha/life-coaching-first-free-call" 
            className="bg-sage text-white px-6 py-4 rounded-xl text-center font-semibold"
          >
            Book Discovery Call
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/30 -skew-x-12 transform origin-top-right -z-10 hidden lg:block" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-sage/5 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            <span>Energetic Alignment & Expansion</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-serif leading-[1.1] mb-8">
            Reclaim Your <span className="italic text-terracotta">Spark.</span> <br />
            Align Your <span className="underline decoration-sage/30 underline-offset-8">Design.</span>
          </h1>
          <p className="text-xl text-ink/70 max-w-lg mb-10 leading-relaxed">
            Strategy alone isn't enough when your nervous system is stuck in survival mode. 
            I help high-impact coaches and healers clear the imprints holding them back and step into their next level of expansion.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://calendly.com/samantharsha/life-coaching-first-free-call"
              className="bg-sage text-white px-10 py-5 rounded-full text-lg font-semibold flex items-center justify-center space-x-3 hover:bg-sage/90 transition-all shadow-xl hover:shadow-sage/30 group"
            >
              <span>Start Your Journey</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-10 py-5 rounded-full text-lg font-semibold border border-sand hover:bg-sand/20 transition-all flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Client" 
                  className="w-10 h-10 rounded-full border-2 border-cream object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-ink/60 font-medium">
              Trusted by 100+ coaches & healers worldwide
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="/hero-image.jpg" 
              alt="Harshada Samant" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage/40 to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-40 h-40 border border-sand rounded-full -z-10" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-12 bg-white p-6 rounded-2xl shadow-xl z-20 hidden xl:block"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-sage/10 p-3 rounded-full text-sage">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sage">Energetic Shift</p>
                <p className="text-sm font-semibold">Immediate Clarity</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PainPleasure = () => {
  const points = [
    {
      title: "The Hustle Trap",
      description: "You're doing all the 'right' things, following the strategies, but you're exhausted and the growth feels forced.",
      icon: <Zap className="text-terracotta" />
    },
    {
      title: "The Nervous System Loop",
      description: "Your body is stuck in survival mode, making every decision feel heavy and every risk feel like a threat.",
      icon: <Target className="text-terracotta" />
    },
    {
      title: "The Identity Shift",
      description: "You've outgrown your current way of working, but you're unsure how to pivot without losing what you've built.",
      icon: <ShieldCheck className="text-terracotta" />
    }
  ];

  return (
    <section className="py-32 bg-ink text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Strategy is useless if your <span className="italic text-terracotta">energy</span> is misaligned.
            </h2>
            <p className="text-xl text-cream/70 mb-12 leading-relaxed">
              Most business advice focuses on the 'how'. I focus on the 'who'. 
              Who are you at your core? What imprints are blocking your natural expansion? 
              When we clear the static, the strategy finally works.
            </p>
            <div className="space-y-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex space-x-6"
                >
                  <div className="mt-1">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-cream/60">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-sage/20 rounded-[3rem] p-12 relative z-10"
            >
              <div className="w-full h-full border border-cream/20 rounded-[2rem] flex items-center justify-center p-12 text-center">
                <div>
                  <Quote size={48} className="mx-auto mb-8 text-terracotta opacity-50" />
                  <p className="text-2xl font-serif italic mb-8 leading-relaxed">
                    "I had the strategy, but something deeper was missing. Through Harshada's powerful energy work, I released what was weighing me down and finally felt aligned from within."
                  </p>
                  <p className="font-bold uppercase tracking-widest text-sm">— Melanie, Mindset Coach</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-terracotta/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "First Imprint Reset",
      tagline: "Nervous System Clearing",
      description: "A deep, imprint-level clearing that works at the earliest point your nervous system learned how to survive. Release the patterns that keep you small.",
      icon: <Zap size={32} />,
      link: "#"
    },
    {
      title: "Business Energetics",
      tagline: "Alignment Reading",
      description: "Understand the unique energetic blueprint of your business. Stop second-guessing your offers and start creating from a place of pure alignment.",
      icon: <Target size={32} />,
      link: "#"
    },
    {
      title: "Life Mastery Coaching",
      tagline: "Long-term Transformation",
      description: "A high-touch container for the visionary ready to master their life and business. Deep integration of strategy, energetics, and soul-led leadership.",
      icon: <Heart size={32} />,
      link: "#"
    },
    {
      title: "Encoded For Expansion",
      tagline: "Signature Program",
      description: "A multidimensional journey into your soul's design. Weave together human design, energetics, and strategy to build a business that feels like home.",
      icon: <Sparkles size={32} />,
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif mb-6">Ways to Work Together</h2>
          <p className="text-lg text-ink/60">
            From single sessions to deep-dive transformations, every container is designed to move you from survival to expansion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-sand hover:border-sage/30 transition-all group hover:shadow-2xl hover:shadow-sage/5 flex flex-col"
            >
              <div className="w-14 h-14 bg-sage/5 text-sage rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-terracotta mb-2">{service.tagline}</p>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-sm text-ink/60 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <a href={service.link} className="inline-flex items-center space-x-2 font-bold text-xs uppercase tracking-widest text-sage group-hover:text-terracotta transition-colors">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vivian",
      role: "Coach",
      text: "After motherhood shifted my identity, my business no longer felt aligned. In just 2 weeks working with Harshada, I reclaimed my spark and stepped forward with clarity.",
      image: "https://picsum.photos/seed/vivian/200/200"
    },
    {
      name: "Stephanie",
      role: "Breathwork Coach",
      text: "Within weeks, three new clients came in, not through hustle, but through alignment. Harshada's ability to weave different systems is profound.",
      image: "https://picsum.photos/seed/steph/200/200"
    },
    {
      name: "Itzel",
      role: "Mindset Coach",
      text: "Understanding my design felt like permission to stop looking at others and start creating offers that actually feel good in my body.",
      image: "https://picsum.photos/seed/itzel/200/200"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-sand/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-serif mb-6">Real Expansion Stories</h2>
            <p className="text-lg text-ink/60">
              The shift is internal, but the results are tangible. Hear from the coaches and healers who have cleared the static.
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white p-4 rounded-full border border-sand cursor-pointer hover:bg-sage hover:text-white transition-all">
              <ArrowRight size={24} className="rotate-180" />
            </div>
            <div className="bg-white p-4 rounded-full border border-sand cursor-pointer hover:bg-sage hover:text-white transition-all">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[2rem] shadow-sm relative"
            >
              <Quote size={40} className="text-sage/10 absolute top-8 right-8" />
              <div className="flex items-center space-x-4 mb-8">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-ink/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <p className="text-lg font-serif italic leading-relaxed text-ink/80">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "Why Your Business Strategy is Failing: The Hidden Role of Nervous System Regulation",
      category: "Nervous System & Healing",
      readTime: "12 min read",
      image: "https://picsum.photos/seed/strategy/800/600",
      excerpt: "Is your hustle causing burnout? Learn why nervous system regulation for entrepreneurs is the missing key to sustainable business expansion.",
      slug: "nervous-system-regulation-for-entrepreneurs"
    },
    {
      title: "The First Imprint: How Early Childhood Patterns Dictate Your Current Success",
      category: "Nervous System & Healing",
      readTime: "15 min read",
      image: "https://picsum.photos/seed/imprint/800/600",
      excerpt: "Discover how healing early childhood imprints can unlock your business potential. Learn to identify and reset the survival patterns keeping you small.",
      slug: "healing-early-childhood-imprints"
    },
    {
      title: "Human Design for Business: How to Scale Without Sacrificing Your Soul",
      category: "Business Energetics",
      readTime: "10 min read",
      image: "https://picsum.photos/seed/humandesign/800/600",
      excerpt: "Stop following generic advice. Use Human Design for business success to create offers and marketing that feel magnetic and aligned.",
      slug: "human-design-for-business-success"
    },
    {
      title: "The Magnetism Secret: Why Energetic Alignment is the Ultimate Marketing Tool",
      category: "Expansion & Leadership",
      readTime: "8 min read",
      image: "https://picsum.photos/seed/magnetism/800/600",
      excerpt: "Learn why energetic alignment for coaches is more powerful than any ad campaign. Discover how to become magnetic to your dream clients.",
      slug: "energetic-alignment-for-coaches"
    },
    {
      title: "Beyond Self-Care: A Somatic Approach to Entrepreneurial Burnout Recovery",
      category: "Nervous System & Healing",
      readTime: "14 min read",
      image: "https://picsum.photos/seed/burnout/800/600",
      excerpt: "Tired of bubble baths not fixing your burnout? Discover a somatic approach to entrepreneurial burnout recovery that heals your nervous system.",
      slug: "entrepreneurial-burnout-recovery"
    },
    {
      title: "The CEO’s Secret Weapon: How to Trust Your Intuition in Business Decisions",
      category: "Business Energetics",
      readTime: "11 min read",
      image: "https://picsum.photos/seed/intuition/800/600",
      excerpt: "Learn how to trust your intuition in business to make faster, more aligned decisions that lead to massive expansion and soul-led growth.",
      slug: "how-to-trust-your-intuition-in-business"
    },
    {
      title: "Subconscious Reprogramming: The Key to Unlocking High-Impact Leadership",
      category: "Expansion & Leadership",
      readTime: "13 min read",
      image: "https://picsum.photos/seed/leadership/800/600",
      excerpt: "Discover how subconscious reprogramming for success can shift your identity and allow you to lead with authority, ease, and massive impact.",
      slug: "subconscious-reprogramming-for-success"
    },
    {
      title: "Why Strategy Isn't Enough: The Missing Link Between Your Plan and Your Results",
      category: "Nervous System & Healing",
      readTime: "12 min read",
      image: "https://picsum.photos/seed/results/800/600",
      excerpt: "Have the perfect plan but no results? Learn why strategy isn't enough for business growth and how energetic alignment changes everything.",
      slug: "why-strategy-isnt-enough-for-business-growth"
    },
    {
      title: "Soul-Led Business Growth: Moving from Forced Hustle to Natural Expansion",
      category: "Expansion & Leadership",
      readTime: "10 min read",
      image: "https://picsum.photos/seed/growth/800/600",
      excerpt: "Discover the path to soul-led business growth. Learn how to scale your impact and income while staying deeply aligned with your purpose.",
      slug: "soul-led-business-growth"
    },
    {
      title: "Business Energetics: The Real Reason Your Offers Aren't Converting",
      category: "Business Energetics",
      readTime: "9 min read",
      image: "https://picsum.photos/seed/conversion/800/600",
      excerpt: "Is it your copy or your energy? Discover why your offers aren't converting and how to use business energetics to create magnetic sales.",
      slug: "why-your-offers-arent-converting"
    }
  ];

  return (
    <section id="blog" className="py-32 bg-sand/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-serif mb-6">The Content Fortress</h2>
            <p className="text-lg text-ink/60">
              Deep dives into nervous system regulation, business energetics, and the science of soul-led expansion.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-8 py-4 rounded-full border border-sand font-bold text-sm uppercase tracking-widest hover:bg-sage hover:text-white transition-all">
              View All Posts
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-sage">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-widest text-ink/40">
                <span>{post.readTime}</span>
                <span className="w-1 h-1 bg-sand rounded-full" />
                <span>By Harshada Samant</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-terracotta transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-ink/60 line-clamp-2 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center space-x-2 font-bold text-xs uppercase tracking-widest text-sage group-hover:translate-x-2 transition-transform">
                <span>Read Article</span>
                <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is a First Imprint Reset?",
      a: "It's a deep energetic clearing focused on the earliest points of nervous system conditioning. We identify where you learned to 'survive' and help your body return to a state of 'thriving'."
    },
    {
      q: "Do I need to know my Human Design?",
      a: "No! I weave Human Design into our work together, but you don't need any prior knowledge. I'll guide you through your unique blueprint."
    },
    {
      q: "How soon will I see results?",
      a: "Many clients report a significant shift in their internal state (clarity, calm, confidence) immediately after a session. Tangible business results often follow within weeks as you begin to act from alignment."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-serif text-center mb-16">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-sand">
              <button 
                className="w-full py-8 flex justify-between items-center text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-2xl font-serif group-hover:text-sage transition-colors">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-500 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-ink/60 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <a href="#" className="text-3xl font-serif font-bold tracking-tight text-sage mb-8 block">
              Harshada<span className="text-terracotta">.</span>
            </a>
            <p className="text-cream/50 max-w-sm mb-8 leading-relaxed">
              Helping high-impact coaches and healers align their energy, clear their imprints, and expand their business through multidimensional healing.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-terracotta transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-terracotta transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-terracotta transition-colors"><Mail /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4 text-cream/60">
              <li><a href="#about" className="hover:text-cream transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-cream transition-colors">Work With Me</a></li>
              <li><a href="#testimonials" className="hover:text-cream transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-cream transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Legal</h4>
            <ul className="space-y-4 text-cream/60">
              <li><a href="#" className="hover:text-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-cream/30">
          <p>© 2026 Harshada Healing Coaching. All rights reserved.</p>
          <p>Designed for Expansion.</p>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-sage relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" 
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl lg:text-7xl font-serif text-white mb-8">Ready to step into your next level of expansion?</h2>
        <p className="text-xl text-white/80 mb-12 leading-relaxed">
          Your business is waiting for you to be fully present. Let's clear the static and align your design.
        </p>
        <a 
          href="https://calendly.com/samantharsha/life-coaching-first-free-call"
          className="inline-flex items-center space-x-4 bg-white text-sage px-12 py-6 rounded-full text-xl font-bold hover:bg-cream transition-all shadow-2xl hover:shadow-white/20 group"
        >
          <span>Book Your Free Discovery Call</span>
          <Calendar size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="selection:bg-sage/20 selection:text-sage">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-terracotta z-[60] origin-left" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="bg-sand/10 py-12 border-y border-sand">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl font-serif font-bold italic">Human Design</span>
              <span className="text-2xl font-serif font-bold italic">Nervous System</span>
              <span className="text-2xl font-serif font-bold italic">Energetics</span>
              <span className="text-2xl font-serif font-bold italic">Expansion</span>
            </div>
          </div>
        </div>

        <PainPleasure />
        <Services />
        <BlogSection />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/harshada-about/800/800" 
                    alt="Harshada Samant" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-sage/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -z-10" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-4">The Guide Behind the Expansion</p>
                <h2 className="text-5xl lg:text-6xl font-serif mb-8">I'm Harshada.</h2>
                <div className="space-y-6 text-lg text-ink/70 leading-relaxed">
                  <p>
                    I help coaches, healers, and visionary entrepreneurs stop the hustle and start the expansion. My work is a multidimensional blend of nervous system clearing, human design, and energetic alignment.
                  </p>
                  <p>
                    I believe that your business is an extension of your soul. When you are clear, your business is clear. When you are aligned, your business is magnetic.
                  </p>
                  <p>
                    My mission is to help you reclaim your spark and build a business that doesn't just look good on the outside, but feels deeply resonant on the inside.
                  </p>
                </div>
                <div className="mt-10 flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-4xl font-serif text-sage mb-1">100+</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-ink/40">Clients Served</p>
                  </div>
                  <div className="w-px h-12 bg-sand" />
                  <div className="text-center">
                    <p className="text-4xl font-serif text-sage mb-1">8+</p>
                    <p className="text-xs uppercase tracking-widest font-bold text-ink/40">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />
        <section className="py-24 bg-sand/10 border-y border-sand">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center mx-auto mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-4xl font-serif mb-6">Not ready for a deep dive yet?</h2>
            <p className="text-lg text-ink/60 mb-10">
              Download my free "Energetic Alignment Checklist" to identify the top 3 imprints currently blocking your business expansion.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-full border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-sage/20 transition-all"
                required
              />
              <button 
                type="submit"
                className="bg-sage text-white px-8 py-4 rounded-full font-bold hover:bg-sage/90 transition-all shadow-lg"
              >
                Send Me the Checklist
              </button>
            </form>
            <p className="mt-6 text-xs text-ink/40 uppercase tracking-widest font-bold">
              Join 500+ visionaries on the path to expansion.
            </p>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
