// pages/index.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <section className="max-w-4xl mx-auto text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Kartik Sharma
        </motion.h1>
        <p className="text-xl mb-6">
          Backend Engineer (Fintech) | Data Platforms | Distributed Systems
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="mailto:kartik8569@gmail.com">
            <Button>Email Me</Button>
          </Link>
          <Link href="https://www.linkedin.com/in/kartiksh07" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              Backend engineer building fintech data platforms and secure
              microservices. I work on authentication systems, distributed data
              pipelines, and scalable backend architecture using Django,
              FastAPI, Kafka, and Airflow, focusing on reliability, performance,
              and secure financial data processing.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>Python</li>
              <li>Django</li>
              <li>FastAPI</li>
              <li>Flask</li>
              <li>Kafka</li>
              <li>Apache Airflow</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>Grafana & Loki</li>
              <li>REST APIs</li>
              <li>Data Pipelines</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>
                <strong>Fintech Data Pipeline:</strong> Designed ingestion
                workflows using Kafka, Airflow, and Parquet storage for scalable
                financial data processing.
              </li>
              <li>
                <strong>Auth & Org Platform Services:</strong> Built role-based
                access, token privilege architecture, and caching for
                high-scale backend systems.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <ul className="text-sm space-y-2">
              <li>
                <strong>Backend Engineer, Acumen Strategy</strong> (Feb 2026–Present)
              </li>
              <li>
                <strong>Software Engineer, Sterlite Technologies</strong> (Aug 2024–Sep 2025)
              </li>
              <li>
                <strong>Software Developer Intern, Sterlite Technologies</strong> (Aug 2023–Jul 2024)
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>B.Tech CSE, Chitkara University (2019–2023) — CGPA: 8.78/10</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
