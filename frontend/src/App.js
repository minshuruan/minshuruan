import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1599658880436-c61792e70672')`
          }}
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Business Analytics
            <span className="block text-4xl md:text-6xl mt-2 font-extralight">Professional</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 opacity-90">
            Transforming data into actionable insights for strategic decision making
          </p>
          <a 
            href="#about" 
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Discover My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate business analytics professional with expertise in transforming complex data into clear, actionable insights. My approach combines technical proficiency with strategic thinking to drive business growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on data-driven decision making, I help organizations unlock the potential of their data through advanced analytics, visualization, and strategic reporting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Data-driven insights</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Strategic thinking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Continuous learning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">Business impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Skills & Expertise</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Data Analysis</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Python & R</li>
                <li>SQL & NoSQL</li>
                <li>Statistical Analysis</li>
                <li>Machine Learning</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Visualization</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Tableau</li>
                <li>Power BI</li>
                <li>D3.js</li>
                <li>Excel Advanced</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Business Intelligence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Strategy Development</li>
                <li>KPI Design</li>
                <li>Process Optimization</li>
                <li>Report Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Experience</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Senior Business Analyst</h3>
                  <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2022 - Present</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Led data-driven initiatives to optimize business processes, resulting in 25% efficiency improvement. 
                Developed comprehensive dashboards and reporting systems for executive decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Data Analyst</h3>
                  <p className="text-blue-600 font-medium">InnovateData Inc.</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2020 - 2022</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Conducted advanced statistical analysis and created predictive models that increased revenue forecasting accuracy by 30%. 
                Collaborated with cross-functional teams to implement data-driven strategies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Junior Analyst</h3>
                  <p className="text-blue-600 font-medium">DataFlow Systems</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">2019 - 2020</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Supported senior analysts in data collection, cleaning, and visualization projects. 
                Developed automated reporting solutions that reduced manual work by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Featured Projects</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Revenue Optimization Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Interactive Tableau dashboard analyzing sales performance across multiple regions, 
                  identifying key growth opportunities and revenue drivers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Tableau</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">SQL</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Customer Churn Prediction</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning model predicting customer churn with 89% accuracy, 
                  enabling proactive retention strategies and reducing churn by 15%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">ML</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Supply Chain Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of supply chain efficiency, optimizing inventory levels 
                  and reducing costs by 20% through data-driven recommendations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Power BI</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Excel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Let's Work Together</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm always interested in discussing new opportunities and challenging projects. 
                Whether you need data analysis, business intelligence, or strategic insights, 
                let's connect and explore how we can drive your business forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">your.email@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-600">LinkedIn: /in/your-profile</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Business Analytics Portfolio. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;