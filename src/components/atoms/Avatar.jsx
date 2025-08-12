import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Avatar = forwardRef(({ 
  className, 
  src,
  alt,
  size = "md",
  fallbackText,
  ...props 
}, ref) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
    "2xl": "h-20 w-20"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg",
    "2xl": "text-xl"
  };

  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary-800 font-medium";

  if (src) {
    return (
      <div
        ref={ref}
        className={cn(baseClasses, sizes[size], className)}
        {...props}
      >
        <img
          src={src}
          alt={alt || "Avatar"}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {!src && (
          <div className={cn("flex items-center justify-center h-full w-full", textSizes[size])}>
            {fallbackText ? (
              <span>{fallbackText.charAt(0).toUpperCase()}</span>
            ) : (
              <ApperIcon name="User" className="h-1/2 w-1/2" />
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(baseClasses, sizes[size], textSizes[size], className)}
      {...props}
    >
      {fallbackText ? (
        <span>{fallbackText.charAt(0).toUpperCase()}</span>
      ) : (
        <ApperIcon name="User" className="h-1/2 w-1/2" />
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
export default Avatar;