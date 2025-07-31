export function Button({ children, className = "", asChild = false, ...props }) {
  const Component = asChild ? "a" : "button";
  return (
    <Component
      className={`bg-primary text-white py-2 px-5 rounded-xl hover:bg-primary/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}