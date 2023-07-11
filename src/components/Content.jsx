import Info from '../pages/Info';
import { motion } from "framer-motion";

// Routes should be placed here

function Content() {
  return (
    <main className="page-main">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <Info />
      </motion.div>
    </main>
  )
}

export default Content
