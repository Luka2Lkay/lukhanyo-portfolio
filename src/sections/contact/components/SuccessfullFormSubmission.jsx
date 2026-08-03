import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function SuccessfullFormSubmission({ title, paragraph, buttonText, onReset }) {
  console.log("success component!");
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-green-100  bg-green-50 p-8 text-center"
    >
      <CheckCircle size={64} className="text-green-400" />
      <h3 className="mt-6 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 max-w-md text-slate-600">{paragraph}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
      >
        {buttonText}
      </button>
    </motion.article>
  );
}

export default SuccessfullFormSubmission;
