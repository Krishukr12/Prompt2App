import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IFeatureCard {
  title: string;
  description: string;
  idx: number;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, idx, icon }: IFeatureCard) => {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.1 + 0.3 }}
      className={cn(
        "p-4 rounded-xl bg-white border border-slate-200",
        "hover:border-sky-300 hover:shadow-lg transition-all",
        "flex items-start gap-4 group cursor-pointer"
      )}
    >
      <div className="p-2 rounded-lg bg-sky-50">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
