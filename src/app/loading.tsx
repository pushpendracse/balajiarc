import { SITE } from "@/constants";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      </div>
      <p className="mt-6 text-sm font-semibold tracking-[0.3em] text-gray-700 uppercase">
        {SITE.name}
      </p>
    </div>
  );
}
