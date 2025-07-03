"use client"
import Link from "next/link";
import ProfileCard from '../../components/profile'
import SplitText from '../../components/splitText'
import GradientText from '../../components/gradientText'
import ProjectCard from '../../components/ProjectCard'
import SpotlightCard from '../../components/spotlightCard'
  
 

// import ProfileCard from './ProfileCard' // Commented out due to missing module



export default function Home() {
  return (
    <main>
      {/* Hero or Intro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white " id="hero">
         <ProfileCard
    name="Divine E. Kwawukume"
    title="Software Engineer"
    handle="divinekwawukume"
    status="Online"
    contactText="Contact Me"
    avatarUrl="/pp.jpg"
    showUserInfo={true}
    enableTilt={true}
    onContactClick={() => console.log('Contact clicked')}
  />
       <div className="text-xl mt-10 mb-4">
          <SplitText
  text="Full-Stack Developer | Next.js | Node.js | Database "
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  
/>
</div>
       
        <a href="#about" className="px-8 py-3 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition font-semibold text-lg border border-primary hover:border-white transform hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#40ffaa] hover:to-[#4079ff]">Learn More</a>
      </section>

     
      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center pt-0 from-black text-white mt-10">
      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-5xl"
>
  Projects
</GradientText>

        <p className="max-w-2xl text-center mt-2 mb-20">Here are some of my favorite projects.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-4">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src="/gff.webp" alt="Portfolio Website" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">Global Football Festival</h2>
            <p className="mb-3 text-gray-300">A company website built with Next.js and Cloudflare.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Next.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Tailwind CSS</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">TypeScript</span>
            </div>
            <div className="mt-auto flex gap-3 items-center">
              <a href="https:globalfootballfestival.pages.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src="/project-2.png" alt="Blog Platform" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blog Platform</h2>
            <p className="mb-3 text-gray-300">A modern blog platform with markdown support.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">React</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Node.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">MongoDB</span>
            </div>
            <div className="mt-auto flex gap-3">
              <a href="https://github.com/yourusername/blog-platform" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
              <a href="https://blog-platform.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <img src="/project-3.png" alt="E-commerce Store" className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">E-commerce Store</h2>
            <p className="mb-3 text-gray-300">A full-featured e-commerce store with Stripe integration.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Next.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Stripe</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Prisma</span>
            </div>
            <div className="mt-auto flex gap-3">
              <a href="https://github.com/yourusername/ecommerce-store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
              <a href="https://ecommerce-store.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center  bg-white text-white mt-10 ">
      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-5xl"
>
  Contact
</GradientText>

        <p className="max-w-2xl text-center mt-2 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
        <form className="w-full max-w-xl bg-black/60 rounded-xl p-12 shadow-lg flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="rounded px-6 py-4 bg-black/40 border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded px-6 py-4 bg-black/40 border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            className="rounded px-6 py-4 bg-black/40 border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="note"
            placeholder="Your Note"
            rows={6}
            className="rounded px-6 py-4 bg-black/40 border border-gray-700 text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            
            className="bg-primary text-white px-8 py-4 rounded shadow hover:bg-primary-dark transition font-semibold text-lg"
          >
            <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-xl"
>
  Submit
</GradientText>
            
          </button>
        </form>
      </section>
       {/* About Section */}
       <section id="about" className="min-h-screen flex flex-col items-center from-black to-gray-900 text-white mt-20 ">
       <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class text-5xl"
>
  About Me
</GradientText>

        <p className="max-w-2xl text-center mt-2 mb-20">I am a passionate developer with experience in building beautiful and performant web applications using modern technologies.</p>
        {/* Add more about content here */}
      </section>

    </main>
  );
}
