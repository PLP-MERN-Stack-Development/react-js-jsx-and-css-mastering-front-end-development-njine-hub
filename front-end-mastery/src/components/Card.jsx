export default function Card({ title, children }) {
  return (
    <div className="p-5 rounded-xl border shadow-md bg-white dark:bg-gray-900 dark:border-gray-700 transition-all hover:-translate-y-1 hover:shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

