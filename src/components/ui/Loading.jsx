import ApperIcon from "@/components/ApperIcon";

const Loading = ({ text = "Loading...", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-100 border-t-primary-600"></div>
        <ApperIcon 
          name="Loader2" 
          className="absolute inset-0 m-auto h-6 w-6 text-primary-600 animate-spin" 
        />
      </div>
      <p className="mt-4 text-sm text-gray-600 animate-pulse">{text}</p>
    </div>
  );
};

export default Loading;