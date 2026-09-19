import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Projects | Vrittant",
  description: "Machine Learning and Data Science Projects",
};

export default async function ProjectsPage() {
  const caseStudies = await getAllPosts();

  const otherProjects = [
    {
      title: "Samdarshi: Resume/CV Bias Checker",
      description: "Audit a resume-screening classifier for gender, college-tier, and age bias using fairness metrics.",
      tags: ["Python", "Fairness Metrics", "Explainable AI"]
    },
    {
      title: "Ayur-Ganit: Healthcare Risk Prediction",
      description: "Cardiovascular disease risk prediction system with rigorous clinical boundary validation and SHAP feature attribution.",
      tags: ["Python", "Machine Learning", "Healthcare"]
    },
    {
      title: "Artha-Niti: Dynamic Pricing Simulator",
      description: "Simulate demand elasticity and dynamic price changes to show revenue impact for cab-fares and e-commerce.",
      tags: ["Python", "Simulation", "Data Science"]
    },
    {
      title: "Bhaav-Darshi: Agri Mandi Prices",
      description: "Predict crop/mandi prices using India's open government data to help farmers and traders plan effectively.",
      tags: ["Time Series", "Prophet", "Data Analysis"]
    },
    {
      title: "Sanyojak: End-to-End MLOps Pipeline",
      description: "Wrapped predictive models in a full production-style pipeline with validation, model registry, monitoring, and CI/CD.",
      tags: ["MLflow", "FastAPI", "Docker", "Evidently AI"]
    },
    {
      title: "Placement OS",
      description: "Comprehensive full-stack web application to streamline campus placement workflows, recruiter management, and student applications.",
      tags: ["Next.js", "Node.js", "SQL"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 lg:px-8">
      <div className="mb-12 inline-block">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 pb-2">
          Projects & Case Studies
        </h1>
        <div className="h-1 w-full bg-blue-600 rounded-full mt-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Render Case Studies with Links */}
        {caseStudies.map((post) => (
          <Link key={post.slug} href={`/projects/${post.slug}`} className="group">
            <article className="h-full flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                {post.description && (
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {post.description}
                  </p>
                )}
                
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {post.tags.map((tag: string) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 inline-flex items-center">
                  Read Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </article>
          </Link>
        ))}

        {/* Render Other Projects without Links */}
        {otherProjects.map((project, idx) => (
          <div key={idx} className="h-full flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
