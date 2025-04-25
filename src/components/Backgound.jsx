import { motion } from 'framer-motion';
import svg1 from '../assets/svg1.svg'
import svg2 from '../assets/svg2.svg'
import image from '../assets/image.png'

const FloatingBackground = () => {
  const bubbles = [
    { id: 1, left: '10%', size: 30, duration: 20 },
    { id: 2, left: '30%', size: 40, duration: 25 },
    { id: 3, left: '50%', size: 25, duration: 18 },
    { id: 4, left: '70%', size: 35, duration: 22 },
    { id: 5, left: '85%', size: 28, duration: 26 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-cover bg-center h-screen "  style={{ backgroundImage: `url(${image})` }}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute opacity-50"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: ['100vh', '-10vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        >
         <img src={svg1}/>
        </motion.div>
      ))}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute opacity-50"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: ['100vh', '-10vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        >
         <img src={svg2}/>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBackground;
