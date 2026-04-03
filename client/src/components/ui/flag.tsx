import { cn } from "@/lib/utils";

interface FlagProps {
  country: "us" | "br";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Flag({ country, className, size = "md" }: FlagProps) {
  const sizeClasses = {
    sm: "w-4 h-3",
    md: "w-5 h-4", 
    lg: "w-6 h-5"
  };

  const flags = {
    us: {
      className: "bg-blue-600 relative",
      children: (
        <>
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-red-600"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2/3 h-1/2 bg-blue-800 rounded-sm"></div>
          </div>
        </>
      )
    },
    br: {
      className: "bg-green-600 relative",
      children: (
        <>
          <div className="absolute inset-0 flex">
            <div className="flex-1 bg-green-600"></div>
            <div className="flex-1 bg-yellow-400"></div>
          </div>
          <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full"></div>
        </>
      )
    }
  };

  const flag = flags[country];

  return (
    <div 
      className={cn(
        "inline-block rounded-sm overflow-hidden border border-gray-300 shadow-sm",
        sizeClasses[size],
        flag.className,
        className
      )}
      role="img"
      aria-label={`${country === 'us' ? 'United States' : 'Brazil'} flag`}
    >
      {flag.children}
    </div>
  );
}
