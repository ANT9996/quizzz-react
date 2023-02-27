import { motion } from "framer-motion"
import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = () => (
  <motion.div initial={{opacity:0}} animate={{opacity:1}}>
    <ContentLoader
      speed={2}
      width={212}
      height={234}
      viewBox="0 0 212 234"
      backgroundColor="#e3e3e3a1"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="28" rx="0" ry="0" width="100%" height="15" />
      <rect x="10" y="63" rx="0" ry="0" width="100%" height="11" />
      <rect x="10" y="81" rx="0" ry="0" width="100%" height="10" />
      <rect x="10" y="101" rx="0" ry="0" width="100%" height="15" />
      <rect x="10" y="155" rx="5" ry="5" width="80" height="26" />
    </ContentLoader>
  </motion.div>

)

export default Skeleton

