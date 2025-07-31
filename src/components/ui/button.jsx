export function Button({ children, className = "", asChild = false, ...props }) {
  const Component = asChild ? "a" : "button";
  return (
    <Component className={`btn btn-primary ${className}`} {...props}>
      {children}
    </Component>
  );
}