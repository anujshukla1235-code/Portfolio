import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-3/5 space-y-8 z-10 relative">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="text-zinc-800 dark:text-zinc-400 block">Data Scientist</span>
            <span className="text-blue-600 block">& ML Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
            I am a final-year MCA student who builds end-to-end machine learning models that drive real business impact. From demand forecasting to scalable data pipelines, I turn raw data into decisions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 h-12 px-8 shadow-md"
            >
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-white dark:border-zinc-200 shadow-2xl overflow-hidden">
            <img 
              src="/images/profile.webp" 
              alt="Anuj Shukla" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
        <hr className="border-zinc-200 dark:border-zinc-800/80" />
      </div>

      {/* ABOUT ME & CORE COMPETENCIES */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: About Me */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed">
              <p>
                My background in data science started during my BCA, where I developed an interest in solving real-world problems using machine learning. My focus is on writing clean, scalable code and building models that are production-ready.
              </p>
              <p>
                Instead of just training models in notebooks, my work covers the entire pipeline. I write custom API endpoints using FastAPI, containerize them with Docker, and build user-friendly dashboards in Streamlit or Next.js so that the final product is practical and easy to use.
              </p>
            </div>
          </div>

          {/* Right Column: Core Competencies */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-xl">
                <h3 className="text-[#38bdf8] font-semibold text-lg mb-2">Machine Learning</h3>
                <p className="text-sm text-zinc-400">XGBoost, Scikit-Learn, PyTorch, LLMs</p>
              </div>
              
              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-xl">
                <h3 className="text-[#38bdf8] font-semibold text-lg mb-2">Data Engineering</h3>
                <p className="text-sm text-zinc-400">Pandas, SQL, Apache Airflow</p>
              </div>
              
              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-xl">
                <h3 className="text-[#38bdf8] font-semibold text-lg mb-2">MLOps & Deployment</h3>
                <p className="text-sm text-zinc-400">FastAPI, Docker, Streamlit, Git</p>
              </div>
              
              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-xl">
                <h3 className="text-[#38bdf8] font-semibold text-lg mb-2">Web Development</h3>
                <p className="text-sm text-zinc-400">Next.js, TypeScript, Tailwind CSS</p>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* CONTACT CTA - BLUE SECTION */}
      <section className="w-full bg-blue-600 text-white py-24 px-6 mt-10 rounded-t-[3rem]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold">Let's build something great.</h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            I am currently looking for new opportunities in Data Science and Machine Learning. Whether you have a question or just want to say hi, feel free to drop a message.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-lg text-blue-600 bg-white hover:bg-zinc-100 font-bold h-12 px-10 transition-colors"
            >
              Contact Me &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
