"use client"

import {
  ArrowRight,
  CheckCircle,
  Code,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  Zap,
  Star,
  TrendingUp,
  MessageCircle,
  Sun,
  Moon,
  Languages,
  LogIn,
  X,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Translations object
const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      nosotros: "Nosotros",
      servicios: "Servicios",
      clientes: "Clientes",
      contacto: "Contacto",
      solicitar: "Solicitar Cotización",
      login: "Iniciar Sesión",
    },
    hero: {
      badge: "Especialistas en Software",
      title: "Transformamos tu",
      titleHighlight: "Negocio Digital",
      description:
        "Desarrollamos sistemas financieros y administrativos de última generación que revolucionan los procesos empresariales con tecnología de vanguardia.",
      cta1: "Conocer Más",
      cta2: "Ver Demo",
      cardTitle: "Facturación Electrónica",
      cardDescription: "Moderniza y agiliza los procesos de facturación cumpliendo con la Ley 32-23 de la DGII",
      cardBadge: "100% Cumplimiento Legal",
    },
    stats: {
      experience: "Años de Experiencia",
      clients: "Clientes Satisfechos",
      projects: "Proyectos Completados",
      support: "Soporte Técnico",
    },
    about: {
      title: "Nosotros",
      subtitle: "Líderes en desarrollo de sistemas financieros con tecnología de vanguardia",
      mission: "Misión",
      missionText:
        "Proveer servicios de desarrollo y consultoría de software mediante el uso eficiente de tecnologías de información con el propósito de incrementar las ventajas competitivas de los clientes.",
      vision: "Visión",
      visionText:
        "Convertirnos en empresa líder en el área de sistemas administrativos y operativos, adaptándonos a las necesidades de nuestros clientes, tanto a nivel nacional como internacional.",
      values: "Valores",
      valuesList: ["Respeto", "Confianza", "Honestidad", "Autenticidad", "Responsabilidad"],
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Software especializado que impulsa el crecimiento de tu empresa",
      cta: "Ver Todos los Servicios",
      list: [
        "Farmacias",
        "Ferreterías",
        "Tiendas",
        "Restaurantes",
        "Supermercados",
        "Bancas",
        "Financieras",
        "Colegios",
        "Institutos",
      ],
    },
    clients: {
      title: "Clientes que Confían en Nosotros",
      subtitle: "Empresas exitosas que han transformado sus operaciones con nuestras soluciones",
      badge: "Cliente Activo",
      companies: [
        {
          name: "Mega Plax, S.R.L",
          description: "Empresa líder en la producción de bolsas y empaques plásticos de alta calidad.",
          industry: "Manufactura",
        },
        {
          name: "Repuestos Americanos",
          description: "Distribuidora especializada en repuestos nuevos para vehículos americanos.",
          industry: "Automotriz",
        },
        {
          name: "Soluciones Energéticas",
          description: "Pioneros en proyectos fotovoltaicos y sistemas de refrigeración eficientes.",
          industry: "Energía",
        },
        {
          name: "Agencia de Aduanas",
          description: "Gestiones aduanales profesionales. Representantes oficiales de UPS y DHL.",
          industry: "Logística",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "Estamos listos para transformar tu negocio con tecnología de vanguardia",
      address: "Dirección",
      addressText: ["Módulo A094, Bella Terra Mall", "Santiago, República Dominicana"],
      phone: "Teléfono",
      email: "Email",
      cta1: "Solicitar Cotización",
      cta2: "Agendar Reunión",
      visit: "Visítanos",
      schedule: ["Lunes a Viernes: 8:00 AM - 6:00 PM", "Sábados: 9:00 AM - 2:00 PM"],
      mapButton: "Ver en Maps",
      moreInfo: "¿Necesitas más información?",
      moreInfoText:
        "Nuestro equipo de expertos está disponible para responder todas tus preguntas y ayudarte a encontrar la solución perfecta para tu negocio.",
      freeCall: "Llamada gratuita de consulta",
      quickResponse: "Respuesta en menos de 24 horas",
    },
    footer: {
      tagline: "Transformando negocios con tecnología de vanguardia desde 2008.",
      services: "Servicios",
      servicesList: ["Facturación Electrónica", "Sistemas POS", "Software Administrativo", "Consultoría IT"],
      follow: "Síguenos",
      copyright: "Todos los derechos reservados",
    },
    whatsapp: {
      tooltip: "¡Chatea con nosotros!",
    },
    login: {
      title: "Iniciar Sesión",
      subtitle: "Accede a tu cuenta de HidalSoft",
      email: "Correo Electrónico",
      emailPlaceholder: "tu@email.com",
      password: "Contraseña",
      passwordPlaceholder: "Tu contraseña",
      rememberMe: "Recordarme",
      forgotPassword: "¿Olvidaste tu contraseña?",
      loginButton: "Iniciar Sesión",
      noAccount: "¿No tienes cuenta?",
      signUp: "Regístrate aquí",
      or: "o continúa con",
      google: "Google",
      microsoft: "Microsoft",
      close: "Cerrar",
    },
    quote: {
      title: "Solicitud de Facturación Electrónica",
      company: "Empresa (Razón social)",
      companyPhone: "Teléfono de la empresa",
      contactName: "Nombre del contacto",
      contactPhone: "Teléfono de contacto",
      email: "Email",
      howDidYouHear: "¿Por qué medio te enteraste?",
      selectOption: "Seleccione...",
      howOptions: [
        "Redes sociales",
        "Recomendación",
        "Búsqueda en Google",
        "Publicidad",
        "Referido de cliente",
        "Otro",
      ],
      robotCheck: "No soy un robot",
      close: "Cerrar",
      send: "Enviar",
      companyPlaceholder: "Nombre de su empresa",
      companyPhonePlaceholder: "809-000-0000",
      contactNamePlaceholder: "Su nombre completo",
      contactPhonePlaceholder: "809-000-0000",
      emailPlaceholder: "correo@empresa.com",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      nosotros: "About",
      servicios: "Services",
      clientes: "Clients",
      contacto: "Contact",
      solicitar: "Request Quote",
      login: "Sign In",
    },
    hero: {
      badge: "Software Specialists",
      title: "Transform your",
      titleHighlight: "Digital Business",
      description:
        "We develop cutting-edge financial and administrative systems that revolutionize business processes with state-of-the-art technology.",
      cta1: "Learn More",
      cta2: "View Demo",
      cardTitle: "Electronic Invoicing",
      cardDescription: "Modernize and streamline invoicing processes while complying with DGII Law 32-23",
      cardBadge: "100% Legal Compliance",
    },
    stats: {
      experience: "Years of Experience",
      clients: "Satisfied Clients",
      projects: "Completed Projects",
      support: "Technical Support",
    },
    about: {
      title: "About Us",
      subtitle: "Leaders in financial systems development with cutting-edge technology",
      mission: "Mission",
      missionText:
        "Provide software development and consulting services through efficient use of information technologies to increase our clients' competitive advantages.",
      vision: "Vision",
      visionText:
        "Become a leading company in administrative and operational systems, adapting to our clients' needs, both nationally and internationally.",
      values: "Values",
      valuesList: ["Respect", "Trust", "Honesty", "Authenticity", "Responsibility"],
    },
    services: {
      title: "Our Services",
      subtitle: "Specialized software that drives your company's growth",
      cta: "View All Services",
      list: [
        "Pharmacies",
        "Hardware Stores",
        "Shops",
        "Restaurants",
        "Supermarkets",
        "Banks",
        "Financial",
        "Schools",
        "Institutes",
      ],
    },
    clients: {
      title: "Clients Who Trust Us",
      subtitle: "Successful companies that have transformed their operations with our solutions",
      badge: "Active Client",
      companies: [
        {
          name: "Mega Plax, S.R.L",
          description: "Leading company in the production of high-quality plastic bags and packaging.",
          industry: "Manufacturing",
        },
        {
          name: "American Parts",
          description: "Distributor specialized in new parts for American vehicles.",
          industry: "Automotive",
        },
        {
          name: "Energy Solutions",
          description: "Pioneers in photovoltaic projects and efficient refrigeration systems.",
          industry: "Energy",
        },
        {
          name: "Customs Agency",
          description: "Professional customs management. Authorized representatives of UPS and DHL.",
          industry: "Logistics",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "We're ready to transform your business with cutting-edge technology",
      address: "Address",
      addressText: ["Module A094, Bella Terra Mall", "Santiago, Dominican Republic"],
      phone: "Phone",
      email: "Email",
      cta1: "Request Quote",
      cta2: "Schedule Meeting",
      visit: "Visit Us",
      schedule: ["Monday to Friday: 8:00 AM - 6:00 PM", "Saturdays: 9:00 AM - 2:00 PM"],
      mapButton: "View on Maps",
      moreInfo: "Need more information?",
      moreInfoText:
        "Our team of experts is available to answer all your questions and help you find the perfect solution for your business.",
      freeCall: "Free consultation call",
      quickResponse: "Response in less than 24 hours",
    },
    footer: {
      tagline: "Transforming businesses with cutting-edge technology since 2008.",
      services: "Services",
      servicesList: ["Electronic Invoicing", "POS Systems", "Administrative Software", "IT Consulting"],
      follow: "Follow Us",
      copyright: "All rights reserved",
    },
    whatsapp: {
      tooltip: "Chat with us!",
    },
    login: {
      title: "Sign In",
      subtitle: "Access your HidalSoft account",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      password: "Password",
      passwordPlaceholder: "Your password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot your password?",
      loginButton: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Sign up here",
      or: "or continue with",
      google: "Google",
      microsoft: "Microsoft",
      close: "Close",
    },
    quote: {
      title: "Electronic Invoicing Request",
      company: "Company (Business name)",
      companyPhone: "Company phone",
      contactName: "Contact name",
      contactPhone: "Contact phone",
      email: "Email",
      howDidYouHear: "How did you hear about us?",
      selectOption: "Select...",
      howOptions: ["Social media", "Recommendation", "Google search", "Advertising", "Client referral", "Other"],
      robotCheck: "I'm not a robot",
      close: "Close",
      send: "Send",
      companyPlaceholder: "Your company name",
      companyPhonePlaceholder: "809-000-0000",
      contactNamePlaceholder: "Your full name",
      contactPhonePlaceholder: "809-000-0000",
      emailPlaceholder: "email@company.com",
    },
  },
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedHowDidYouHear, setSelectedHowDidYouHear] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const t = translations[language]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 9)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      // Add background blur when scrolled
      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  const services = [
    { name: t.services.list[0], icon: "💊" },
    { name: t.services.list[1], icon: "🔧" },
    { name: t.services.list[2], icon: "🏪" },
    { name: t.services.list[3], icon: "🍽️" },
    { name: t.services.list[4], icon: "🛒" },
    { name: t.services.list[5], icon: "🏦" },
    { name: t.services.list[6], icon: "💰" },
    { name: t.services.list[7], icon: "🎓" },
    { name: t.services.list[8], icon: "📚" },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${isDarkMode ? "dark bg-slate-900" : "bg-white"}`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${isDarkMode ? "bg-blue-900/30" : "bg-blue-100"}`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${isDarkMode ? "bg-indigo-900/30" : "bg-indigo-100"}`}
        ></div>
        <div
          className={`absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${isDarkMode ? "bg-purple-900/30" : "bg-purple-100"}`}
        ></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? `backdrop-blur-xl shadow-lg border-b ${isDarkMode ? "bg-slate-900/90 border-slate-700" : "bg-white/90 border-slate-200"}`
            : `backdrop-blur supports-[backdrop-filter]:bg-opacity-60 border-b ${isDarkMode ? "bg-slate-900/95 border-slate-700" : "bg-white/95 border-slate-200"}`
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 group">
                <img
                  src="/hidalsoft-logo.png"
                  alt="HidalSoft Logo"
                  className="h-6 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                {[
                  { key: "inicio", label: t.nav.inicio },
                  { key: "nosotros", label: t.nav.nosotros },
                  { key: "servicios", label: t.nav.servicios },
                  { key: "clientes", label: t.nav.clientes },
                  { key: "contacto", label: t.nav.contacto },
                ].map((item) => (
                  <Link
                    key={item.key}
                    href={`#${item.key}`}
                    className={`px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
                      isDarkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-600 hover:text-blue-900"
                    }`}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-900 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              {/* Language & Theme Toggle Combined */}
              <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                {/* Language Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className={`p-2 rounded-md transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "hover:bg-slate-700 text-slate-300" : "hover:bg-white text-slate-600"
                  }`}
                >
                  <Languages className="h-4 w-4" />
                  <span className="text-xs font-medium ml-1 hidden sm:block">{language.toUpperCase()}</span>
                </Button>

                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-md transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? "hover:bg-slate-700 text-slate-300" : "hover:bg-white text-slate-600"
                  }`}
                >
                  {isDarkMode ? (
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                  ) : (
                    <Moon className="h-4 w-4 rotate-0 scale-100 transition-all duration-300" />
                  )}
                </Button>
              </div>

              {/* Login Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLoginModalOpen(true)}
                className={`flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-400"
                    : "border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-blue-600"
                }`}
              >
                <LogIn className="h-4 w-4" />
                <span className="text-sm hidden sm:block">{t.nav.login}</span>
              </Button>

              {/* CTA Button - Solo en desktop */}
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden lg:flex bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm px-4 py-2"
              >
                {t.nav.solicitar}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section
          id="inicio"
          className={`relative py-20 sm:py-32 overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-slate-900 via-blue-900/20 to-indigo-900/20" : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div
                className={`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse ${isDarkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {t.hero.badge}
                </div>
                <h1
                  className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${isDarkMode ? "text-white" : "text-slate-900"}`}
                >
                  {t.hero.title}{" "}
                  <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                <p className={`mt-6 text-xl leading-8 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {t.hero.description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:max-w-lg sm:mx-auto lg:mx-0">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    {t.hero.cta1}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`text-lg px-8 py-3 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent ${isDarkMode ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900" : ""}`}
                  >
                    {t.hero.cta2}
                  </Button>
                </div>
              </div>
              <div
                className={`mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
                  <div
                    className={`p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border ${isDarkMode ? "bg-slate-800 border-blue-800" : "bg-white border-blue-100"}`}
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-8 w-8 text-blue-900 animate-pulse" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                      {t.hero.cardTitle}
                    </h3>
                    <p className={`mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                      {t.hero.cardDescription}
                    </p>
                    <div className="flex items-center text-green-600 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {t.hero.cardBadge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-6 h-6 bg-indigo-400 rounded-full animate-bounce animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-2000"></div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15+", label: t.stats.experience, icon: TrendingUp },
                { number: "200+", label: t.stats.clients, icon: Users },
                { number: "50+", label: t.stats.projects, icon: CheckCircle },
                { number: "24/7", label: t.stats.support, icon: Shield },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 delay-${index * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mx-auto mb-4 group hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 animate-pulse">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className={`py-20 relative ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-16">
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl mb-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  {t.about.title}
                </span>
              </h2>
              <p className={`max-w-3xl text-xl lg:mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {t.about.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: t.about.mission,
                  icon: Shield,
                  content: t.about.missionText,
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  title: t.about.vision,
                  icon: Code,
                  content: t.about.visionText,
                  gradient: "from-indigo-500 to-indigo-600",
                },
                {
                  title: t.about.values,
                  icon: Users,
                  content: null,
                  gradient: "from-purple-500 to-purple-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`border-2 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group ${isVisible ? "animate-fade-in-up" : ""} ${isDarkMode ? "bg-slate-800 border-slate-700 hover:border-blue-600" : "border-slate-100 hover:border-blue-200 bg-white"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle
                      className={`text-xl group-hover:text-blue-900 transition-colors duration-300 ${isDarkMode ? "text-white group-hover:text-blue-400" : "text-slate-900"}`}
                    >
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.content ? (
                      <p
                        className={`group-hover:text-slate-700 transition-colors duration-300 ${isDarkMode ? "text-slate-300 group-hover:text-slate-200" : "text-slate-600"}`}
                      >
                        {item.content}
                      </p>
                    ) : (
                      <ul className={`space-y-3 ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                        {t.about.valuesList.map((value, i) => (
                          <li
                            key={i}
                            className={`flex items-center group-hover:text-slate-700 transition-colors duration-300 ${isDarkMode ? "group-hover:text-slate-200" : ""}`}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 animate-pulse"></div>
                            {value}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicios"
          className={`py-20 relative overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-slate-800 to-blue-900/20" : "bg-gradient-to-br from-slate-50 to-blue-50"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-16">
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl mb-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  {t.services.title}
                </span>
              </h2>
              <p className={`max-w-2xl text-xl lg:mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {t.services.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 mb-12">
              {services.map((service, index) => (
                <Card
                  key={service.name}
                  className={`text-center p-6 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    activeService === index
                      ? "bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-2xl scale-105"
                      : `hover:shadow-xl ${isDarkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-blue-50"}`
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4 animate-bounce">{service.icon}</div>
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        activeService === index ? "text-white" : isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {service.name}
                    </h3>
                    {activeService === index && (
                      <div className="mt-2 flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-400 animate-spin" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t.services.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clientes" className={`py-20 ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-16">
              <h2
                className={`text-3xl font-bold tracking-tight sm:text-4xl mb-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}
              >
                <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                  {t.clients.title}
                </span>
              </h2>
              <p className={`max-w-2xl text-xl lg:mx-auto ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                {t.clients.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {t.clients.companies.map((client, index) => (
                <Card
                  key={client.name}
                  className={`p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-900 group ${isVisible ? "animate-fade-in-up" : ""} ${isDarkMode ? "bg-slate-800 border-blue-400" : "bg-white"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle
                        className={`text-lg group-hover:text-blue-900 transition-colors duration-300 ${isDarkMode ? "text-white group-hover:text-blue-400" : "text-slate-900"}`}
                      >
                        {client.name}
                      </CardTitle>
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${isDarkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`}
                      >
                        {client.industry}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`group-hover:text-slate-700 transition-colors duration-300 ${isDarkMode ? "text-slate-300 group-hover:text-slate-200" : "text-slate-600"}`}
                    >
                      {client.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{t.clients.badge}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern-plus opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">{t.contact.title}</h2>
              <p className="max-w-2xl text-xl text-blue-100 lg:mx-auto">{t.contact.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: t.contact.address,
                    content: t.contact.addressText,
                    gradient: "from-blue-400 to-blue-500",
                  },
                  {
                    icon: Phone,
                    title: t.contact.phone,
                    content: ["809-241-6609"],
                    gradient: "from-indigo-400 to-indigo-500",
                  },
                  {
                    icon: Mail,
                    title: t.contact.email,
                    content: ["hidalsoft@gmail.com"],
                    gradient: "from-purple-400 to-purple-500",
                  },
                ].map((contact, index) => (
                  <div
                    key={contact.title}
                    className={`flex items-start space-x-4 group transform transition-all duration-500 hover:scale-105 ${isVisible ? "animate-fade-in-up" : ""}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                    >
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                        {contact.title}
                      </h3>
                      {contact.content.map((line, i) => (
                        <p key={i} className="text-blue-100 group-hover:text-white transition-colors duration-300">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Contact Buttons */}
                <div className="pt-6 space-y-4">
                  <Button
                    size="lg"
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    {t.contact.cta1}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    {t.contact.cta2}
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="bg-white rounded-2xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="rounded-xl overflow-hidden h-96 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8234567890123!2d-70.69876842345678!3d19.45123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f0123456789%3A0x1234567890abcdef!2sBella%20Terra%20Mall%2C%20Santiago%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                      title="Ubicación de HidalSoft en Bella Terra Mall, Santiago"
                    ></iframe>

                    {/* Map Overlay */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-900">HidalSoft</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">Bella Terra Mall</p>
                    </div>
                  </div>

                  {/* Map Info Card */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{t.contact.visit}</h4>
                        {t.contact.schedule.map((time, i) => (
                          <p key={i} className="text-sm text-slate-600">
                            {time}
                          </p>
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=Bella+Terra+Mall+Santiago+Dominican+Republic",
                            "_blank",
                          )
                        }
                      >
                        {t.contact.mapButton}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t.contact.moreInfo}</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">{t.contact.moreInfoText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-white">
                  <Phone className="w-5 h-5 mr-2 text-blue-300" />
                  <span>{t.contact.freeCall}</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="w-5 h-5 mr-2 text-blue-300" />
                  <span>{t.contact.quickResponse}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 relative overflow-hidden ${isDarkMode ? "bg-slate-950" : "bg-slate-900"}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
                  HidalSoft
                </h3>
                <p className="text-slate-400">{t.footer.tagline}</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
                <ul className="space-y-2 text-slate-400">
                  {t.footer.servicesList.map((service, i) => (
                    <li key={i} className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">{t.footer.follow}</h4>
                <div className="flex space-x-4">
                  {["Facebook", "LinkedIn", "Twitter"].map((social) => (
                    <div
                      key={social}
                      className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer transform hover:scale-110"
                    >
                      <span className="text-white text-xs">{social[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400">
                Copyright © {new Date().getFullYear()} HidalSoft - {t.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsLoginModalOpen(false)}
          ></div>

          {/* Modal */}
          <div
            className={`relative w-full max-w-md transform transition-all duration-300 scale-100 ${
              isDarkMode ? "bg-slate-900" : "bg-white"
            } rounded-2xl shadow-2xl border ${isDarkMode ? "border-slate-700" : "border-slate-200"}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  {t.login.title}
                </h2>
                <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{t.login.subtitle}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLoginModalOpen(false)}
                className={`rounded-full p-2 ${
                  isDarkMode ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"
                }`}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Form */}
            <form
              className="p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                // Aquí iría la lógica de autenticación
                console.log("Login attempt")
                setIsLoginModalOpen(false)
              }}
            >
              {/* Email Field */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  {t.login.email}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t.login.emailPlaceholder}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  }`}
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  {t.login.password}
                </label>
                <input
                  type="password"
                  required
                  placeholder={t.login.passwordPlaceholder}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  }`}
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.login.rememberMe}
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  {t.login.forgotPassword}
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {t.login.loginButton}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsQuoteModalOpen(false)}
          ></div>

          {/* Modal */}
          <div
            className={`relative w-full max-w-2xl transform transition-all duration-300 scale-100 ${
              isDarkMode ? "bg-slate-900" : "bg-white"
            } rounded-2xl shadow-2xl border ${isDarkMode ? "border-slate-700" : "border-slate-200"} max-h-[90vh] overflow-y-auto`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  {t.quote.title}
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsQuoteModalOpen(false)}
                className={`rounded-full p-2 ${
                  isDarkMode ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-600"
                }`}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Form */}
            <form
              className="p-6 space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                // Aquí iría la lógica de envío del formulario
                console.log("Quote form submitted")
                setIsQuoteModalOpen(false)
              }}
            >
              {/* First Row - Company and Company Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.company}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.quote.companyPlaceholder}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.companyPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.quote.companyPhonePlaceholder}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
              </div>

              {/* Second Row - Contact Name and Contact Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.contactName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.quote.contactNamePlaceholder}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.contactPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={t.quote.contactPhonePlaceholder}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
              </div>

              {/* Third Row - Email and How did you hear */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.email}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.quote.emailPlaceholder}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {t.quote.howDidYouHear}
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between ${
                        isDarkMode
                          ? "bg-slate-800 border-slate-600 text-white"
                          : "bg-white border-slate-300 text-slate-900"
                      }`}
                    >
                      <span className={selectedHowDidYouHear || isDarkMode ? "text-white" : "text-slate-500"}>
                        {selectedHowDidYouHear || t.quote.selectOption}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div
                        className={`absolute top-full left-0 right-0 mt-1 rounded-lg border shadow-lg z-10 ${
                          isDarkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-300"
                        }`}
                      >
                        {t.quote.howOptions.map((option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              setSelectedHowDidYouHear(option)
                              setIsDropdownOpen(false)
                            }}
                            className={`w-full px-4 py-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                              isDarkMode ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* reCAPTCHA */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  {t.quote.robotCheck}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className={`flex-1 py-3 transition-all duration-300 ${
                    isDarkMode
                      ? "border-slate-600 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {t.quote.close}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  {t.quote.send}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/18092416609?text=${language === "es" ? "Hola%2C%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20HidalSoft" : "Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20HidalSoft%20services"}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none">
            <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
            {t.whatsapp.tooltip}
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          </div>
        </a>
      </div>
    </div>
  )
}
