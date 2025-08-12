import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "@/components/atoms/Button";
import Avatar from "@/components/atoms/Avatar";
import ApperIcon from "@/components/ApperIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenuRef = useRef(null);

  // Mock current user - in real app this would come from auth context
  const currentUser = {
    Id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "customer",
    avatar: null
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const navigation = [
    { name: "Find Talent", href: "/browse" },
    { name: "Find Work", href: "/freelancer-how-it-works" },
    { name: "Project Catalog", href: "/categories" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Enterprise", href: "/enterprise-get-started" }
  ];

  const userMenuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
    { name: "Messages", href: "/messages", icon: "MessageCircle" },
    { name: "Bookings", href: "/bookings", icon: "Calendar" },
    { name: "Settings", href: "/settings", icon: "Settings" }
  ];

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/browse?search=${encodeURIComponent(query.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const isActivePath = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-enhanced border-b border-white/20 shadow-lg">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <ApperIcon name="Users" className="h-5 w-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              InfluConnect
            </span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.href) 
                    ? "text-primary-600 bg-primary-50" 
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActivePath(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced Search Bar - Desktop */}
          <div className="hidden lg:block flex-1 max-w-md mx-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300 to-primary-500 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search influencers..."
                  className="w-full pl-11 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-all duration-300 shadow-sm focus:shadow-md"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(e.target.value);
                    }
                  }}
                />
                <ApperIcon name="Search" className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary-500 transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced User Menu & Actions */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Notifications - Desktop Only */}
            <button className="hidden md:block relative p-2.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 group">
              <ApperIcon name="Bell" className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse shadow-sm"></span>
            </button>

            {/* Enhanced User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-1.5 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
              >
                <div className="relative">
                  <Avatar
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    size="sm"
                    fallbackText={currentUser.name}
                  />
                  <div className="absolute inset-0 ring-2 ring-primary-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <ApperIcon name="ChevronDown" className="h-4 w-4 text-gray-400 hidden md:block group-hover:text-primary-600 transition-colors duration-200" />
              </button>

              {/* Enhanced User Dropdown */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 py-2 z-50 animate-scale-in">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{currentUser.email}</p>
                  </div>
                  
                  {userMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 group"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <ApperIcon name={item.icon} className="h-4 w-4 mr-3 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200 group">
                      <ApperIcon name="LogOut" className="h-4 w-4 mr-3 group-hover:scale-110 transition-transform duration-200" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
            >
              <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 mt-2">
            <div className="px-2 pt-3 pb-4 space-y-2 bg-white/80 backdrop-blur-xl rounded-b-2xl shadow-xl animate-slide-down">
              {/* Enhanced Mobile Search */}
              <div className="px-2 py-2">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search influencers..."
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-all duration-300 shadow-sm"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(e.target.value);
                      }
                    }}
                  />
                  <ApperIcon name="Search" className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Enhanced Mobile Navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActivePath(item.href)
                      ? "text-primary-600 bg-primary-100 shadow-sm"
                      : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-3 mt-3">
                <Link
                  to="/become-influencer"
                  className="block px-4 py-3 text-primary-600 font-semibold bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become an Influencer
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;