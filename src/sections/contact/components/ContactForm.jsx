import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/sections/contact/schema/contact_schemas";
import { Send, Loader2 } from "lucide-react";
import SuccessfullFormSubmission from "@/sections/contact/components/SuccessfullFormSubmission";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });
 
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  }
  
  if (isSubmitSuccessful) {
    return (
      <SuccessfullFormSubmission
        title="Message sent!"
        paragraph="Thank you for contacting me. I'll get back to you as soon as possible."
        buttonText="Send Another Message"
        onReset={reset}
      />
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-bold text-white">Send Me a Message</h3>
      <p className="text-slate-400">
        I'd love to hear about your project or opportunity.
      </p>
      <div className="mt-8">
        <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="mt-6">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-300"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Let's work together"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
          placeholder="Tell me about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            Sending...
            <Loader2 className="animate-spin" size={18} />
          </>
        ) : (
          <>
            Send Message
            <Send />
          </>
        )}
      </button>
    </motion.form>
  );
}

export default ContactForm;
