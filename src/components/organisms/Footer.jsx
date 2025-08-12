import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Browse Influencers", href: "/browse" },
        { name: "Categories", href: "/categories" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "For Influencers",
      links: [
        { name: "Become an Influencer", href: "/become-influencer" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Resources", href: "/resources" },
        { name: "Community", href: "/community" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Safety", href: "/safety" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" }
  ];

  return (
<footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-primary-600/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-primary-700/5 rounded-full blur-2xl animate-bounce-gentle"></div>
      
      <div className="relative text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Enhanced Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <ApperIcon name="Users" className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  InfluConnect
                </span>
              </Link>
              <p className="text-gray-300 text-sm mb-8 max-w-xs leading-relaxed">
                The world's most innovative marketplace connecting brands with authentic social media influencers worldwide.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group relative p-2.5 bg-white/5 backdrop-blur-sm rounded-lg text-gray-400 hover:text-white border border-white/10 hover:border-primary-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/20"
                    aria-label={social.name}
                  >
                    <ApperIcon name={social.icon} className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-200" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-600/0 group-hover:from-primary-400/20 group-hover:to-primary-600/20 rounded-lg transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 relative">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ApperIcon name="ArrowRight" className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enhanced Newsletter Signup */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Stay in the Loop
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Get exclusive insights, trending influencers, and industry updates delivered straight to your inbox.
                </p>
              </div>
              <div className="lg:w-1/2 lg:ml-8">
                <div className="relative group max-w-md">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl blur opacity-30 group-focus-within:opacity-60 transition duration-500"></div>
                  <div className="relative flex bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-6 py-4 bg-transparent border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-300 text-sm"
                    />
                    <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-sm transform hover:scale-105 shadow-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 InfluConnect. All rights reserved. Made with ❤️ for creators worldwide.
            </p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-0.5 relative group">
                Privacy Policy
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-0.5 relative group">
                Terms of Service
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:translate-y-0.5 relative group">
                Cookie Policy
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;