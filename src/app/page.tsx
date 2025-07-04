"use client"

import ProfileCard from '../../components/profile'
import SplitText from '../../components/splitText'
import GradientText from '../../components/gradientText'

import SpotlightCard from '../../components/spotlightCard'
import React from 'react';
import Image from "next/image";
  
 

// import ProfileCard from './ProfileCard' // Commented out due to missing module



export default function Home() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "a9aa36a6-8186-4e79-8a94-fee23913977b"); // <-- Replace with your API key
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
            <Image src="/gff.webp" alt="Portfolio Website" width={800} height={160} className="w-full h-40 object-cover rounded mb-4" />
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
            <Image src="/project-2.png" alt="Blog Platform" width={800} height={160} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">Blog Platform</h2>
            <p className="mb-3 text-gray-300">A modern blog platform with markdown support.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">React</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Node.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">MongoDB</span>
            </div>
            <div className="mt-auto  gap-3">
              <a href="https://blog-platform.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Live Demo</a>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Image src="/project-3.png" alt="E-commerce Store" width={800} height={160} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">E-commerce Store</h2>
            <p className="mb-3 text-gray-300">A full-featured e-commerce store with Stripe integration.</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Next.js</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Stripe</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs font-medium">Prisma</span>
            </div>
            <div className="mt-auto flex gap-3">
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
        <form className="w-full max-w-xl bg-black/60 rounded-xl p-12 shadow-lg flex flex-col gap-6" onSubmit={onSubmit}>
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
        <span className="mt-4 text-lg text-black dark:text-white">{result}</span>
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

        <p className="max-w-2xl text-center mt-2 mb-20">I am a creative developer with experience in building beautiful and performant web applications using modern technologies.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/eyram-kwawukume/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-white hover:text-[#40ffaa] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/divin081" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-white hover:text-[#4079ff] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}
