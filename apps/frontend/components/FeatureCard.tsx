import { motion } from "framer-motion";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all group shadow-md text-center"
    >
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
};
