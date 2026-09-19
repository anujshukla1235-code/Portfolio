import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Vrittant",
  description: "About Anuj Shukla, Data Scientist and Machine Learning Engineer.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight mb-12 text-zinc-900 dark:text-zinc-50">
        About Me
      </h1>
      
      <div className="space-y-12">
        {/* Professional Summary Section */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 lg:p-10">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">Professional Summary</h2>
          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            <p>
              Hi, I am Anuj Shukla, a Data Science and Machine Learning enthusiast currently pursuing my MCA at ITM University, Gwalior. I have hands-on experience building full-stack predictive models, time-series forecasting solutions, and end-to-end MLOps pipelines.
            </p>
            <p>
              My expertise lies in architecting CI/CD workflows, model registries, and developing Explainable AI (XAI) solutions. Whether it's predicting customer churn (Sthirta), forecasting demand (Purvabhas), or deploying models using FastAPI and Docker, I love solving complex data problems.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Leadership & Experience Section */}
          <section className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Leadership & Experience</h2>
            <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li><strong>2x Hackathon Leader:</strong> Led teams in Smart India Hackathon (SIH) 2025 and 2026 (Qualified internal round with team "Samriddhi").</li>
              <li><strong>Eureka! IIT Bombay:</strong> Led a strategic team in conceptualizing and pitching an innovative tech-driven solution.</li>
            </ul>
          </section>

          {/* Education & Certifications Section */}
          <section className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Education & Technical Skills</h2>
            <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li><strong>MCA (Data Science)</strong> - ITM University, Gwalior (2025-2027)</li>
              <li><strong>BCA</strong> - Jiwaji University (2021-2024)</li>
              <li><strong>ML Tools:</strong> XGBoost, LightGBM, Scikit-Learn, SHAP, Prophet</li>
              <li><strong>MLOps:</strong> Docker, GitHub Actions, MLflow, FastAPI</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
