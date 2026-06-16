import { FaBuilding } from "react-icons/fa6";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className = "" }: LogoProps) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          light ? "bg-primary" : "bg-primary"
        }`}
      >
        <FaBuilding className="text-lg text-white" />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold tracking-wider ${
            light ? "text-white" : "text-gray-900"
          }`}
        >
          BALAJI
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.3em] ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          ARCHITECT
        </span>
      </div>
    </a>
  );
}
