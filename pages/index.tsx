// pages/index.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Kartik Sharma
          </h1>
          <p className="text-2xl text-slate-700 mb-6">
            Backend Engineer | Fintech Infrastructure
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Building production-grade backend systems, secure data pipelines, and platform services for financial data workflows at Acumen Strategy
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="default" size="lg">
              <a href="mailto:kartik8569@gmail.com">Email Me</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/kartiksh07/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8 shadow-lg border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Backend Engineer at Acumen Strategy specializing in fintech infrastructure. I design and build scalable microservices, secure data pipelines, and platform services that power financial data workflows.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                My work focuses on authentication and authorization systems, PII masking, role-based access control, and reliable data ingestion pipelines across multiple financial integrations. I collaborate with Data, AI, and DevOps teams to ship production-ready services with improved performance through caching and observability.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Currently deepening expertise in distributed systems, data platform engineering, and fintech infrastructure—with a focus on building secure, high-reliability backend systems.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="mb-8 shadow-lg border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tech Stack</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Backend & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Django", "FastAPI", "Flask", "Node.js", "Spring Boot"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Data & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kafka", "Airflow", "MySQL", "PostgreSQL", "Redis", "AWS"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Additional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Microservices", "Event-Driven Systems", "Docker", "Git", "CI/CD", "React.js"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="mb-8 shadow-lg border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience</h2>
              
              <div className="mb-6 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <h3 className="text-xl font-semibold text-slate-900">Backend Engineer (Fintech)</h3>
                <p className="text-slate-600 mb-2">Acumen Strategy • Nov 2024–Present</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Building production-grade backend systems and secure data pipelines for financial workflows</li>
                  <li>Designing scalable microservices and APIs using Python, Django, FastAPI, and Flask</li>
                  <li>Implementing authentication, authorization, PII masking, and role-based access control</li>
                  <li>Developing distributed data processing with Kafka and orchestration with Airflow</li>
                  <li>Collaborating with Data, AI, and DevOps teams to improve system performance and observability</li>
                </ul>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
                <h3 className="text-xl font-semibold text-slate-900">Application Developer</h3>
                <p className="text-slate-600 mb-2">Sterlite Technologies • Nov 2023–Oct 2024</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Drove finance-grade analytics and SaaS platforms with Python, Node.js, and React</li>
                  <li>Delivered solutions saving 40 analyst-hours/month and achieving 15% revenue wins</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">Software Developer Intern</h3>
                <p className="text-slate-600 mb-2">Sterlite Technologies • Prior to Nov 2023</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Contributed to full-stack development projects and analytics platforms</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="mb-8 shadow-lg border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Projects</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Deep Learning Image Classifier</h3>
                  <p className="text-slate-700">Reduced misclassification by 70% using ReLU activation and NumPy-based implementations</p>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Real Estate Price Prediction</h3>
                  <p className="text-slate-700">Boosted prediction accuracy by 60% with machine learning models and built interactive data visualizations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Bachelor of Technology in Computer Science</h3>
                <p className="text-slate-600">Chitkara University • 2019–2023</p>
                <p className="text-slate-700 mt-2">CGPA: 8.78/10</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}