export default function ContactPage() {
  return (
    <section className="max-w-lg mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
      <form className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary-dark transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 