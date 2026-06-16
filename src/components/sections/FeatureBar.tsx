import {
  HiOutlineColorSwatch,
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineClock,
} from "react-icons/hi";
import { FadeIn } from "@/components/animations/FadeIn";
import { HERO_FEATURES } from "@/constants";

const iconMap = {
  design: HiOutlineColorSwatch,
  vastu: HiOutlineHome,
  quality: HiOutlineShieldCheck,
  delivery: HiOutlineClock,
};

export default function FeatureBar() {
  return (
    <div className="absolute right-0 bottom-0 left-0 z-10 bg-white/80 backdrop-blur-sm border-t border-gray-200">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {HERO_FEATURES.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <FadeIn key={feature.title} delay={0.8 + index * 0.1} direction="up">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="text-xl text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] leading-snug text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
