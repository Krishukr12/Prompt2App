import { Settings, Send, Sparkles, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Features {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export const features: Features[] = [
  {
    title: "AI Generation",
    description: "Instantly transform text prompts into full applications.",
    icon: Sparkles,
  },
  {
    title: "One-Click Deploy",
    description: "Launch your app within minutes, no coding required.",
    icon: Send,
  },
  {
    title: "Custom Enhancements",
    description: "AI-powered suggestions to refine and improve your app.",
    icon: Settings,
  },
] as const;
