import { motion } from 'framer-motion';
import heroImage from '../assets/fitness-hero.jpg'; // replace with your image path

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-950 via-purple-900 to-indigo-900 text-white px-6 py-20 md:py-32 overflow-hidden">
      
      {/* Left Side */}
      <div className="z-10 max-w-xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
        >
          Unlock Your Fitness <span className="text-yellow-400">Journey</span> with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          Track your body, follow custom workouts, and get smart nutrition advice. Your AI gym coach is here!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex gap-4"
        >
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12 md:mt-0 w-full md:w-[500px] lg:w-[600px] relative z-10"
      >
        <img
          src={heroImage}
          alt="Fitness Hero"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-[-20%] right-[-30%] w-[400px] h-[400px] bg-pink-500 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse" />
    </section>
  );
}
