

export default function Heading({ children, className }) {
  return <h2 className={`text-primary mt-3 text-3xl font-bold font-jetbrains mb-16 ${className}`}>{children}</h2>
}
