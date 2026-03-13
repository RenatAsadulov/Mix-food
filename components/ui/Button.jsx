export function Button({
  children,
  className = "",
  asChild = false,
  size,
  variant = "success",
  ...props
}) {
  const Component = asChild ? "a" : "button";
  const sizeClass = size ? `btn-${size}` : "";
  const variantClass = `btn-${variant}`;

  return (
    <Component
      className={`btn ${variantClass} bg-gradient rounded-3 ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
