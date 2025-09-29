export function Button({ children, className = "", asChild = false, size, ...props }) {
  const Component = asChild ? "a" : "button";
  const sizeClass = size ? `btn-${size}` : "";
  return (
    <Component
      className={`btn btn-primary rounded-3 ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}