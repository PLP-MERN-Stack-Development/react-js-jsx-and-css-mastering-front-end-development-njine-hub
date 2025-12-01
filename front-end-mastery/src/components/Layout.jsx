import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="p-6">{children}</main>
      <Footer />
    </div>
  )
}
