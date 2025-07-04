import React, { useState } from 'react';
import { 
  MapPin, 
  ExternalLink, 
  Mail,
  Phone,
  Linkedin,
  Globe,
  Calendar,
  Zap,
  Sun,
  Battery,
  Home,
  Building,
  Wrench,
  Award,
  Star,
  Eye,
  ArrowRight,
  Download,
  Send,
  Calculator,
  FileText,
  Box,
  Settings,
  Camera,
  Image
} from 'lucide-react';

function App() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Smart Meter Installation & Monitoring System",
      description: "Installation and configuration of smart meters for real-time power consumption monitoring. This smart meter measures in real-time the power consumed by the house on the public electricity distribution network, enabling precise energy management and optimization.",
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Smart Monitoring",
      capacity: "Monitoring System",
      location: "Morocco",
      year: "2024",
      features: ["Real-time Monitoring", "Grid Integration", "Smart Technology", "Energy Optimization"],
      savings: "Real-time Energy Management",
      gallery: [
        "Smart meter placement and configuration",
        "Real-time power measurement setup",
        "Grid connection optimization"
      ]
    },
    {
      id: 2,
      title: "Commercial Solar Installation - 60kWc Casablanca",
      description: "Large-scale commercial solar installation in Casablanca with 60kWc capacity. The system features 5 string configurations with optimized wiring design for maximum efficiency. Complete AC/DC cabinet installation with professional inverter placement and final mounting systems.",
      image: "https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Commercial",
      capacity: "60kWc",
      location: "Casablanca, Morocco",
      year: "2024",
      features: ["5 String Configuration", "Commercial Grade", "AC/DC Cabinets", "Professional Wiring"],
      savings: "75% Energy Cost Reduction",
      gallery: [
        "Inverter placement and configuration",
        "AC/DC cabinet installation",
        "Final mounting and fixation systems"
      ]
    }
  ];

  const workGallery = [
    {
      title: "Smart Meter Installation",
      description: "Installing and configuring smart meters for real-time monitoring",
      image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Installation"
    },
    {
      title: "Inverter Configuration",
      description: "Professional inverter placement and system configuration",
      image: "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technical Setup"
    },
    {
      title: "AC/DC Cabinet Work",
      description: "Installing and wiring AC/DC cabinets for solar systems",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Electrical Work"
    },
    {
      title: "Solar Panel Mounting",
      description: "Final mounting and fixation systems installation",
      image: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mounting"
    },
    {
      title: "System Wiring",
      description: "Professional wiring and cable management for solar installations",
      image: "https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Wiring"
    },
    {
      title: "Quality Control",
      description: "Final inspection and system testing procedures",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Testing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Ayoub ELHOUZ</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Projects</a>
              <a href="#gallery" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Gallery</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-2">Ayoub ELHOUZ</h1>
                  <p className="text-xl text-emerald-200">Solar Technician</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-emerald-400" />
                  <span className="text-lg">Specializing in PV Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Battery className="h-5 w-5 text-emerald-400" />
                  <span className="text-lg">Off-Grid & Hybrid Installations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-emerald-400" />
                  <span className="text-lg">Electrical Schematic Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Box className="h-5 w-5 text-emerald-400" />
                  <span className="text-lg">Design 3D SketchUp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calculator className="h-5 w-5 text-emerald-400" />
                  <span className="text-lg">Dimensionnement & Études PV</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Projects
                </a>
                <a 
                  href="#gallery" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Work Gallery
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Ayoub ELHOUZ"
                  className="w-80 h-80 rounded-full object-cover border-8 border-white/20 shadow-2xl mx-auto"
                />
              </div>
              <div className="absolute top-4 right-4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 left-4 w-64 h-64 bg-gradient-to-r from-slate-400/20 to-gray-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">
              Showcasing key technical installations and smart monitoring solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Project Gallery</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.gallery.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Result</p>
                      <p className="font-semibold text-emerald-600">{project.savings}</p>
                    </div>
                    <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium">
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Gallery</h2>
            <p className="text-xl text-gray-600">
              Behind the scenes of professional solar installations and technical work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workGallery.map((item, index) => (
              <div key={index} className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
                <div className="p-4 group-hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <Camera className="h-4 w-4 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Image className="h-5 w-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Professional installations and technical expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Ayoub ELHOUZ</span>
            </div>
            <p className="text-gray-400 mb-6">Solar Technician | Powering the Future with Clean Energy</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Phone className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2024 Ayoub ELHOUZ. All rights reserved. | Specializing in Solar Energy Solutions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;