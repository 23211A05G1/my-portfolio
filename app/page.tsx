import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPython, SiPostgresql } from "react-icons/si";
import { FaLinkedin, FaGithub, FaEnvelope, FaGoogle } from "react-icons/fa";
function SkillCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="tilt-card bg-white/70 backdrop-blur-md shadow-md border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 transition">
      <div className="text-3xl text-blue-500">{icon}</div>
      <p className="text-sm font-medium text-gray-700">{name}</p>
    </div>
  );
}
export default function Home() {
  return (
    <> <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Rajasri</h1>

    <div className="space-x-6 text-gray-700 font-medium">
  <a href="#about" className="hover:text-blue-500 transition">About</a>

  <a href="#skills" className="hover:text-blue-600 transition">Skills</a>

  <a href="#projects" className="hover:text-blue-500 transition">Projects</a>

  <a href="#contact" className="hover:text-blue-600 transition">Contact</a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="hover:text-blue-500 transition"
  >
    Resume
  </a>
  
</div>
  </div>
</nav>
    <main className="min-h-screen p-10 pt-24">

      {/* HERO */}
      <section id="home" className="pt-32 max-w-6xl mx-auto">
  <h1 className="text-6xl font-bold">
    Hello, I'm <span className="text-blue-500">Rajasri</span> 👋
  </h1>

  <p className="mt-6 text-gray-500 text-lg max-w-2xl">
    Developer passionate about building scalable web applications and practical solutions.
  </p>
</section>

      {/* ABOUT */}
<section id="about" className="mt-20 max-w-3xl scroll-mt-24">
  <h2 className="text-3xl font-semibold">About Me</h2>
  <p className="mt-4 text-lg">
    I’m a B.Tech CSE student focused on building practical applications and developing scalable solutions to real-world problems.
  </p>
</section>

{/* SKILLS */}
<section id="skills" className="mt-20 scroll-mt-24">
  <h2 className="text-3xl font-semibold mb-8">My Skills</h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    <SkillCard icon={<FaJava size={28} />} name="Java" />
<SkillCard icon={<SiPython size={28} />} name="Python" />
<SkillCard icon={<FaHtml5 size={28} />} name="HTML" />
<SkillCard icon={<FaCss3Alt size={28} />} name="CSS" />
<SkillCard icon={<FaJs size={28} />} name="JavaScript" />
<SkillCard icon={<FaReact size={28} />} name="React" />
<SkillCard icon={<SiNextdotjs size={28} />} name="Next.js" />
<SkillCard icon={<FaNodeJs size={28} />} name="Node.js" />
<SkillCard icon={<SiMongodb size={28} />} name="MongoDB" />
<SkillCard icon={<SiPostgresql size={28} />} name="PostgreSQL" />
<SkillCard icon={<FaGithub />} name="Git / GitHub" />
<SkillCard icon={<FaGoogle />} name="Gemini AI" />
  </div>
</section>

{/* PROJECTS */}
<section id="projects" className="mt-20 scroll-mt-24">
  <h2 className="text-3xl font-semibold">Projects</h2>

  <div className="grid md:grid-cols-2 gap-6 mt-6">

    {/* Project 1 */}
<div className="border border-gray-800 bg-[var(--card)] p-5 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold">NexaStudy – Academic Productivity & Study Management Platform</h3>
  <p className="mt-2 text-gray-400">
    Full-stack study platform with authentication, academic tracking, analytics, and progress insights.
  </p>
  <p className="text-sm mt-2 text-blue-400">
    Tech: Node.js, Express.js, MongoDB, JWT, REST APIs
  </p>
</div>

{/* Project 2 */}
<div className="border border-gray-800 bg-[var(--card)] p-5 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold">BudgetBuddy – AI-Powered Personal Finance Management System</h3>
  <p className="mt-2 text-gray-400">
    Personal finance platform for expense tracking, budgeting, analytics, and AI-powered insights.
  </p>
  <p className="text-sm mt-2 text-blue-400">
    Tech: React.js, TypeScript, Supabase, PostgreSQL, Gemini AI
  </p>
</div>

{/* Project 3 */}
<div className="border border-gray-800 bg-[var(--card)] p-5 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold">EmotionSense – AI-Based Multimodal Emotion Detection & Wellbeing Platform</h3>
  <p className="mt-2 text-gray-400">
    Multimodal platform for face, voice, and text emotion detection with mood journaling.
  </p>
  <p className="text-sm mt-2 text-blue-400">
    Tech: React.js, TypeScript, Python, FastAPI, OpenCV, DeepFace
  </p>
</div>

{/* Project 4 */}
<div className="border border-gray-800 bg-[var(--card)] p-5 rounded-xl shadow-lg">
  <h3 className="text-xl font-bold">Military Tank Detection using YOLOv8 and Satellite Imagery</h3>
  <p className="mt-2 text-gray-400">
    YOLOv8-based tank detection system using satellite imagery and 1,200+ annotated images.
  </p>
  <p className="text-sm mt-2 text-blue-400">
    Tech: YOLOv8, Python, OpenCV
  </p>
</div>

  </div>

</section>

{/* CONTACT */}
<section id="contact" className="mt-20 mb-20 scroll-mt-24 text-center">
  <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>

  <div className="flex justify-center gap-10 text-4xl">

  {/* Email */}
  <a
    href="mailto:23211a05g1@gmail.com"
    className="text-red-500 hover:scale-110 transition"
  >
    <FaEnvelope />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/rajasri-lakkaram-377252293/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:scale-110 transition"
  >
    <FaLinkedin />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/23211A05G1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black hover:scale-110 transition"
  >
    <FaGithub />
  </a>

</div>
</section>

    </main>
  </>
  );
}