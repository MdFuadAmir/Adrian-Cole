// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaComments,
  FaRocket,
} from "react-icons/fa";
import { ImRocket } from "react-icons/im";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await axios.post(
        `https://anrian-cole-server.vercel.app/send-email`,
        data,
      );

      toast.success("Message sent successfully! 🚀");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-24 px-6 bg-[#FFF1E6] dark:bg-[#1A1412]">
      <Helmet>
        <title>Contact | Adrian Cole - Hire UI/UX Designer</title>

        <meta
          name="description"
          content="Contact Adrian Cole for UI/UX design and frontend development projects. Available for freelance work and collaborations."
        />

        <meta
          name="keywords"
          content="Hire UI UX Designer, Contact Frontend Developer, Freelance Web Developer"
        />

        <meta property="og:title" content="Contact Adrian Cole" />
        <meta
          property="og:description"
          content="Get in touch for freelance UI/UX design and web development services."
        />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-20">
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5A2E1B] dark:text-white">
            Let’s Build Something{" "}
            <span className="text-[#FF8C69]">Amazing</span>
          </h1>

          <p className="mt-6 text-[#7A4A33] dark:text-[#C9A89A]">
            Whether you have a startup idea, need a modern website, or want to
            redesign your product — I’m here to help you turn ideas into real,
            high-performing digital experiences.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            {/* highlight box */}
            <div className="p-5 rounded-xl bg-[#FF8C69]/10 border border-[#FF8C69]/20">
              <p className="text-sm text-[#5A2E1B] dark:text-[#F5DAD2] flex items-center gap-2">
                <AiOutlineThunderbolt /> I usually respond within a few hours.
              </p>
              <p className="text-sm text-[#5A2E1B] dark:text-[#F5DAD2] flex items-center gap-2">
                <ImRocket />
                Let’s discuss your project and make it real.
              </p>
            </div>
            {/* INFO */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/60 dark:bg-[#2A1E1A] border border-[#FF8C69]/20">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF8C69]" />
                  <h3 className="font-semibold text-[#5A2E1B] dark:text-white">
                    Email
                  </h3>
                </div>
                <p className="text-sm mt-2 text-[#7A4A33] dark:text-[#C9A89A]">
                  mdfuadamir@email.com
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/60 dark:bg-[#2A1E1A] border border-[#FF8C69]/20">
                <div className="flex items-center gap-3">
                  <FaClock className="text-[#FF8C69]" />
                  <h3 className="font-semibold text-[#5A2E1B] dark:text-white">
                    Working Hours
                  </h3>
                </div>
                <p className="text-sm mt-2 text-[#7A4A33] dark:text-[#C9A89A]">
                  Monday – Saturday (9 AM – 8 PM)
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/60 dark:bg-[#2A1E1A] border border-[#FF8C69]/20">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FF8C69]" />
                  <h3 className="font-semibold text-[#5A2E1B] dark:text-white">
                    Availability
                  </h3>
                </div>
                <p className="text-sm mt-2 text-[#7A4A33] dark:text-[#C9A89A]">
                  Available for freelance & remote projects worldwide
                </p>
              </div>
            </div>
            Adrian-Cole-Server
            {/* PROCESS */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#5A2E1B] dark:text-white">
                How I Work
              </h2>

              {[
                "You send me your idea or requirements",
                "We discuss goals, timeline & pricing",
                "I design & develop your product",
                "Final delivery with revisions & support",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-[#7A4A33] dark:text-[#C9A89A]"
                >
                  <FaCheckCircle className="text-[#FF8C69]" />
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* FORM */}
            <div className="p-8 rounded-2xl bg-white/70 dark:bg-[#2A1E1A] border border-[#FF8C69]/20 shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-[#5A2E1B] dark:text-white">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="
      w-full p-3 rounded-lg
      bg-white dark:bg-[#1E1816]
      text-[#5A2E1B] dark:text-white
      placeholder:text-[#9A6B55] dark:placeholder:text-[#A98C80]
      border border-[#FF8C69]/20
      focus:border-[#FF8C69]
      outline-none
    "
                />

                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your Email"
                  className="
      w-full p-3 rounded-lg
      bg-white dark:bg-[#1E1816]
      text-[#5A2E1B] dark:text-white
      placeholder:text-[#9A6B55] dark:placeholder:text-[#A98C80]
      border border-[#FF8C69]/20
      focus:border-[#FF8C69]
      outline-none
    "
                />

                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Project Details..."
                  className="
      w-full p-3 rounded-lg
      bg-white dark:bg-[#1E1816]
      text-[#5A2E1B] dark:text-white
      placeholder:text-[#9A6B55] dark:placeholder:text-[#A98C80]
      border border-[#FF8C69]/20
      focus:border-[#FF8C69]
      outline-none
    "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
      w-full flex items-center justify-center gap-2
      px-6 py-3 rounded-full
      bg-[#FF8C69] text-white
      hover:bg-[#ff7a55]
      hover:scale-105
      transition-all duration-300
    "
                >
                  {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* CTA CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FF8C69]/10 border border-[#FF8C69]/20">
                <FaComments className="text-[#FF8C69] text-xl mb-2" />
                <p className="text-sm text-[#5A2E1B] dark:text-[#F5DAD2]">
                  Need quick discussion? Let’s chat and plan your project.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FF8C69]/10 border border-[#FF8C69]/20">
                <FaRocket className="text-[#FF8C69] text-xl mb-2" />
                <p className="text-sm text-[#5A2E1B] dark:text-[#F5DAD2]">
                  Want fast delivery? I can build and launch quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// {
//   "name": "server",
//   "version": "1.0.0",
//   "description": "",
//   "main": "Server/index.js",
//   "scripts": {
//     "start": "node Server/index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "type": "module",
//   "dependencies": {
//     "cors": "^2.8.6",
//     "dotenv": "^17.4.2",
//     "express": "^5.2.1",
//     "nodemailer": "^8.0.5"
//   }
// }
