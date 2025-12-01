export default function Button({ children, variant="primary", ...rest }) {
  const base = "px-4 py-2 rounded font-medium transition-all active:scale-95";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }
  return <button className={`${base} ${variants[variant]}`} {...rest}>{children}</button>
}
