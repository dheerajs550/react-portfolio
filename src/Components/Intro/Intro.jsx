import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagran from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from './../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Intro = () => {
  const transition = { duration: 2, type: 'spring' }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro' id='Home'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{
            color
              : darkMode ? 'white' : ''
          }}>Hy! I Am</span>
          <span>Dheeraj Sharma</span>
          <span>Frontend Developer with high
            level of experiencen in web designing
            and development, producting the
            Quality work
          </span>
        </div>
        <button className='button i-button'> Hire me</button>
        <div className='i-icons'>
          <img src={Github} alt='' />
          <img src={Linkedin} alt='' />
          <img src={Instagran} alt='' />


        </div>
      </div>
      <div className='i-right'>
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={boy} alt='' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt='' />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '60%' }}
          transition={transition}

          style={{ top: '-4%', left: '68%' }}
          className="floating-div"
        >
          <FloatingDiv Image={Crown} txt1="Web" txt2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}

          style={{ top: '18rem', left: '0rem' }}
          className='floating-div'
        >
          <FloatingDiv Image={thumbup} txt1={"Best Design"} txt2={"Award"} />
        </motion.div>
        {/* blur dive */}
        <div className='blur' style={{ background: "rgb(238 210 255" }}></div>
        <div className='blur'
          style={{
            background: "#C1F5FF",
            top: '17rem',
            width: '21rem',
            left: '-9rem'
          }}></div>

      </div>

    </div>
  )
}

export default Intro
