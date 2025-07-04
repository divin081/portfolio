import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center text-center">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
      />
      <h1 className="text-3xl font-bold mb-1">Your Name</h1>
      <h2 className="text-lg text-primary mb-4">Frontend Developer</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Short bio goes here. Passionate about building beautiful web experiences with modern technologies.
      </p>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Skills & Stack</h3>
        <ul className="flex flex-wrap gap-2 justify-center">
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Next.js</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">React</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">TypeScript</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded">Node.js</li>
        </ul>
      </div>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary-dark transition"
      >
        Download Resume
      </a>
    </section>
  );
} 