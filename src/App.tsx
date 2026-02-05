import { useEffect, useState } from 'react';
import { 
  BarChart3, 
  BrainCircuit, 
  LayoutDashboard, 
  WifiOff, 
  FileEdit, 
  FileText,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Building2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ExternalLink,
  LogIn,
  TrendingUp,
  Eye
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will contact you soon.');
    setContactDialogOpen(false);
  };

  const features = [
    {
      title: 'Budget Tracking',
      description: 'Real-time budget monitoring with variance alerts and forecasting. See exactly where every dollar is committed and spent across all project categories.',
      image: '/assets/image.png'
    },
    {
      title: 'Invoice Management',
      description: 'AI-powered invoice parsing and approval workflows. Our team processes invoices in minutes with automated data extraction and validation.',
      image: '/assets/image(1).png'
    },
    {
      title: 'Executive Reports',
      description: 'Professional, client-branded reports delivered automatically. Get clear visibility into project health with KPIs, budget status, and action items.',
      image: '/assets/image.png'
    }
  ];

  const featureCards = [
    {
      icon: BarChart3,
      title: 'Real-Time Budget Tracking',
      description: 'Monitor budgets across all projects with instant variance alerts and forecasting.'
    },
    {
      icon: BrainCircuit,
      title: 'AI Invoice Processing',
      description: 'Automatically extract data from invoices and route for approval with 99% accuracy.'
    },
    {
      icon: LayoutDashboard,
      title: 'Executive Dashboards',
      description: 'High-level views for stakeholders with drill-down capabilities.'
    },
    {
      icon: WifiOff,
      title: 'Offline-First Design',
      description: 'Work seamlessly on job sites with poor connectivity. Changes sync automatically.'
    },
    {
      icon: FileEdit,
      title: 'Change Order Management',
      description: 'Track, approve, and document all changes with full audit trails.'
    },
    {
      icon: FileText,
      title: 'Client-Branded Reports',
      description: 'Generate professional reports with your branding in one click.'
    }
  ];

  const projectTypes = [
    { name: 'Senior Living', description: 'Assisted living, memory care, independent living facilities' },
    { name: 'Commercial Office', description: 'New construction and tenant improvements' },
    { name: 'Healthcare', description: 'Medical facilities, clinics, specialty buildings' },
    { name: 'Education', description: 'Schools, universities, training facilities' },
    { name: 'Tenant Fit-Out', description: 'Interior buildouts within existing structures' }
  ];

  const reports = [
    {
      title: 'Executive Dashboard Report',
      description: 'Monthly comprehensive overview with KPIs, budget utilization, schedule progress, and risk indicators.',
      file: '/assets/Cannonball_February_2026_Report_Report.pdf'
    },
    {
      title: 'Payment Recommendation',
      description: 'Detailed vendor payment lists with invoice tracking, approval status, and payment recommendations.',
      file: '/assets/PaymentRec_3_CoverLetter.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-aerie">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src={isScrolled ? '/assets/AERIE-Horizontal.png' : '/assets/ApexWings-MonoWhite.png'}
                alt="Aerie by Pandion" 
                className={`transition-transform duration-300 group-hover:scale-105 ${isScrolled ? 'h-10' : 'h-12'}`}
              />
              {!isScrolled && (
                <span className="text-white font-semibold text-xl tracking-tight">AERIE</span>
              )}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className={`nav-link ${!isScrolled ? 'text-white/80 hover:text-white' : ''}`}>Features</button>
              <button onClick={() => scrollToSection('reports')} className={`nav-link ${!isScrolled ? 'text-white/80 hover:text-white' : ''}`}>Reports</button>
              <button onClick={() => scrollToSection('why-pandion')} className={`nav-link ${!isScrolled ? 'text-white/80 hover:text-white' : ''}`}>Why Pandion</button>
              <button onClick={() => scrollToSection('contact')} className={`nav-link ${!isScrolled ? 'text-white/80 hover:text-white' : ''}`}>Contact</button>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => setLoginDialogOpen(true)}
                className={`flex items-center gap-2 font-medium transition-colors ${
                  isScrolled ? 'text-[#505759] hover:text-[#1E3A5F]' : 'text-white/80 hover:text-white'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button 
                onClick={() => setContactDialogOpen(true)}
                className="px-5 py-2.5 bg-[#EAAA00] text-[#1E3A5F] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:-translate-y-0.5"
              >
                Work With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? 'text-[#1E3A5F]' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1E3A5F]' : 'text-white'}`} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="container-aerie py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-[#505759]">Features</button>
              <button onClick={() => scrollToSection('reports')} className="text-left py-2 text-[#505759]">Reports</button>
              <button onClick={() => scrollToSection('why-pandion')} className="text-left py-2 text-[#505759]">Why Pandion</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[#505759]">Contact</button>
              <hr />
              <button 
                onClick={() => setLoginDialogOpen(true)}
                className="flex items-center gap-2 text-[#505759] py-2"
              >
                <LogIn className="w-4 h-4" />
                Login to Aerie
              </button>
              <button 
                onClick={() => setContactDialogOpen(true)}
                className="btn-primary text-center"
              >
                Work With Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F] to-[#0F1D2F]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#EAAA00] rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#407EC9] rounded-full blur-3xl" />
          </div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 border-2 border-[#EAAA00]/30 rotate-45 animate-pulse" />
          <div className="absolute top-1/3 right-20 w-6 h-6 border-2 border-white/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#EAAA00]/20 rotate-12" />
        </div>

        <div className="container-aerie relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#EAAA00] rounded-full animate-pulse" />
                <span className="text-sm font-medium">Pandion's Proprietary Project Management Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                See How We Manage{' '}
                <span className="text-gradient-gold">Your</span>{' '}
                Project
              </h1>
              
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
                Aerie is our intelligent project management platform designed exclusively for owner's representatives. 
                When you work with Pandion, you get the transparency, precision, and oversight that only Aerie can deliver.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="px-8 py-4 bg-[#EAAA00] text-[#1E3A5F] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
                >
                  Explore Aerie
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setContactDialogOpen(true)}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Start Your Project
                </button>
              </div>

              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-[#EAAA00]">$2B+</div>
                  <div className="text-sm text-white/60">Projects Managed</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-[#EAAA00]">500+</div>
                  <div className="text-sm text-white/60">Projects Completed</div>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <div className="text-3xl font-bold text-[#EAAA00]">99%</div>
                  <div className="text-sm text-white/60">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative transform perspective-1000 hover:rotate-y-[-3deg] transition-transform duration-500">
                <img 
                  src="/assets/image.png" 
                  alt="Aerie Dashboard" 
                  className="rounded-xl shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1E3A5F]">Invoice Approved</div>
                      <div className="text-xs text-[#505759]">$18,000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-[#F8F9FA] border-y">
        <div className="container-aerie">
          <p className="text-center text-[#505759] text-sm font-medium mb-8 uppercase tracking-wider">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {['Senior Living', 'Healthcare', 'Education', 'Commercial', 'Mixed-Use', 'Industrial'].map((name) => (
              <div key={name} className="flex items-center gap-2 text-[#1E3A5F] font-semibold text-lg hover:opacity-100 transition-opacity cursor-default">
                <Building2 className="w-5 h-5" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-aerie">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
              The Aerie Advantage
            </h2>
            <p className="text-lg text-[#505759]">
              Powerful tools we use to deliver exceptional project oversight for our clients
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-[#1E3A5F] text-white shadow-lg'
                    : 'bg-[#F8F9FA] text-[#505759] hover:bg-[#1E3A5F]/10'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-[#505759] mb-6">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time visibility into your project finances',
                  'Automated alerts when budgets need attention',
                  'Comprehensive audit trails for every transaction',
                  'Seamless integration with accounting systems'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#505759]">
                    <CheckCircle2 className="w-5 h-5 text-[#EAAA00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setContactDialogOpen(true)}
                className="mt-8 flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#EAAA00] transition-colors"
              >
                Learn how this benefits you <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="rounded-xl shadow-2xl border border-gray-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F8F9FA]">
        <div className="container-aerie">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
              Built for Precision
            </h2>
            <p className="text-lg text-[#505759]">
              Every feature designed to deliver the oversight and transparency you deserve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover group"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#EAAA00]/20 transition-colors">
                  <card.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-[#EAAA00] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{card.title}</h3>
                <p className="text-[#505759]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="section-padding bg-white">
        <div className="container-aerie">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
              Professional Reports
            </h2>
            <p className="text-lg text-[#505759]">
              Clear, executive-ready reports that keep you informed every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reports.map((report, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{report.title}</h3>
                <p className="text-[#505759] mb-6">{report.description}</p>
                <a 
                  href={report.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#EAAA00] transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Sample Report
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#505759] mb-4">
              Want to see more examples of our reporting?
            </p>
            <button 
              onClick={() => setContactDialogOpen(true)}
              className="btn-primary"
            >
              Request a Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Why Pandion Section */}
      <section id="why-pandion" className="section-padding bg-gradient-to-br from-[#1E3A5F] to-[#0F1D2F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-aerie relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Work With Pandion?
            </h2>
            <p className="text-lg text-white/70">
              Decades of experience combined with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-[#EAAA00] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
              <p className="text-white/70">
                Over $2 billion in successfully managed projects across senior living, healthcare, education, and commercial sectors.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-[#EAAA00] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Total Transparency</h3>
              <p className="text-white/70">
                Aerie gives you real-time visibility into every aspect of your project. No surprises, just clear communication.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-14 h-14 bg-[#EAAA00] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-[#1E3A5F]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Owner's Rep Focus</h3>
              <p className="text-white/70">
                We work exclusively for owners, not contractors. Our loyalty is to your interests and your project's success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section-padding bg-white">
        <div className="container-aerie">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
              Projects We Specialize In
            </h2>
            <p className="text-lg text-[#505759]">
              Experience across a wide range of project types and sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-6 border border-gray-100 hover:border-[#EAAA00] transition-colors group"
              >
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2 group-hover:text-[#EAAA00] transition-colors">{type.name}</h3>
                <p className="text-[#505759] text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container-aerie">
          <div className="bg-[#1E3A5F] rounded-2xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EAAA00]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#407EC9]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Experience the Aerie Difference?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Let's discuss how Pandion can bring precision, transparency, and expertise to your next project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setContactDialogOpen(true)}
                  className="px-8 py-4 bg-[#EAAA00] text-[#1E3A5F] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="https://www.pandion-dms.com/projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  View Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-aerie">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-[#505759] mb-8">
                Have a project in mind? Let's discuss how Pandion and Aerie can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Email</div>
                    <a href="mailto:info@pandion-dms.com" className="text-[#505759] hover:text-[#EAAA00] transition-colors">
                      info@pandion-dms.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Phone</div>
                    <a href="tel:2155188602" className="text-[#505759] hover:text-[#EAAA00] transition-colors">
                      (215) 518-8602
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1E3A5F]">Office</div>
                    <span className="text-[#505759]">Pandion Development Management</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://www.pandion-dms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#EAAA00] transition-colors"
                >
                  Visit Pandion Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-xl p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">First Name</label>
                    <Input placeholder="John" className="bg-white" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-white" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-white" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Company</label>
                  <Input placeholder="Your company name" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Project Type</label>
                  <Input placeholder="e.g., Senior Living, Healthcare, Commercial..." className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="bg-white min-h-[120px]" />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] text-white py-16">
        <div className="container-aerie">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/ApexWings-MonoWhite.png" alt="Aerie" className="h-10" />
                <span className="text-2xl font-bold">AERIE</span>
              </div>
              <p className="text-white/70 mb-2 max-w-sm">
                Pandion's proprietary project management platform.
              </p>
              <p className="text-white/50 text-sm max-w-sm">
                Built by owner's representatives, for owner's representatives.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EAAA00] hover:text-[#1E3A5F] transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EAAA00] hover:text-[#1E3A5F] transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#EAAA00] hover:text-[#1E3A5F] transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Aerie</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('features')} className="text-white/70 hover:text-[#EAAA00] transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('reports')} className="text-white/70 hover:text-[#EAAA00] transition-colors">Reports</button></li>
                <li><button onClick={() => setLoginDialogOpen(true)} className="text-white/70 hover:text-[#EAAA00] transition-colors">Login</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Pandion</h4>
              <ul className="space-y-3">
                <li><a href="https://www.pandion-dms.com/about/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EAAA00] transition-colors flex items-center gap-1">About <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://www.pandion-dms.com/projects/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EAAA00] transition-colors flex items-center gap-1">Projects <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://www.pandion-dms.com/services/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EAAA00] transition-colors flex items-center gap-1">Services <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://www.pandion-dms.com/contact/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#EAAA00] transition-colors flex items-center gap-1">Contact <ExternalLink className="w-3 h-3" /></a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2026 Aerie by Pandion. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="https://www.pandion-dms.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#EAAA00] transition-colors flex items-center gap-1">
                pandion-dms.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#1E3A5F]">Start Your Project</DialogTitle>
            <DialogDescription>
              Tell us about your project and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-1">First Name</label>
                <Input placeholder="John" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Last Name</label>
                <Input placeholder="Doe" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Email</label>
              <Input type="email" placeholder="john@company.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Company</label>
              <Input placeholder="Your company name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Project Type</label>
              <Input placeholder="e.g., Senior Living, Healthcare..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E3A5F] mb-1">Message</label>
              <Textarea placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full btn-primary">
              Submit Request
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#1E3A5F]">Aerie Login</DialogTitle>
            <DialogDescription>
              Access your project management dashboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="bg-[#F8F9FA] rounded-lg p-6 text-center">
              <img src="/assets/ApexWings-Full Color.png" alt="Aerie" className="h-20 mx-auto mb-4" />
              <p className="text-[#505759] mb-4">
                Aerie is Pandion's proprietary project management platform. Access is available to Pandion team members and authorized client representatives.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://www.aeriepm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#EAAA00] transition-colors text-center"
                >
                  Go to Aerie Login
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-[#505759]">
              Need access? <button onClick={() => {setLoginDialogOpen(false); setContactDialogOpen(true);}} className="text-[#EAAA00] hover:underline">Contact your Pandion representative</button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
