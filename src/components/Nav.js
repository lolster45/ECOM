//React...
import React, { useContext } from "react"
import {Link} from "react-router-dom"

//Framer motion...
import {motion} from 'framer-motion'

//Firebase...
import { auth } from "../firebase"
import {useAuthState} from "react-firebase-hooks/auth"

//Icons...
import {BiSearch} from "react-icons/bi"
import {BsFillCartFill} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"

import Logo from '../images/TrendEase-logo.png'
import { MyContext } from "../App"

export default function Nav({className, cartSize}) {



  const [user] = useAuthState(auth);

  const {handleTransition} = useContext(MyContext);

  const handleNavChange = () => {
    handleTransition();
  }

    // Animation variants for staggering
    const navVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1, // Staggering delay for each item
          duration: 0.6,
        },
      }),
    };



  return ( 
    <nav className={className}>
      <motion.div
        className="logo-div"
        initial="hidden"
        animate="visible"
        custom={0} // Starting item for the animation
        variants={navVariants}
      >
        <Link to='/'>
          <img src={Logo} alt="image logo of website"/>
        </Link>
      </motion.div>
      <ul className="links-to-page">

          <motion.li
            custom={0 + 1} // Starting after Oscar Reyes (hence +1)
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <Link onClick={handleNavChange} to="/">Home</Link>
          </motion.li>

          <motion.li
            custom={1 + 1} // Starting after Oscar Reyes (hence +1)
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <Link onClick={handleNavChange} to="/Products">Products</Link>

          </motion.li>
          <motion.li
            custom={2 + 1} // Starting after Oscar Reyes (hence +1)
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <Link onClick={handleNavChange} to="/AboutUs">About</Link>
          </motion.li>
      </ul>
      <div className="icons-wrap">

        <motion.div
          custom={3 + 1}
          initial='hidden'
          animate='visible'
          variants={navVariants}
        >
          <Link to="">
            <BiSearch/>
          </Link>
        </motion.div>

        <motion.div
          onClick={handleNavChange}
          custom={4 + 1}
          initial='hidden'
          animate='visible'
          variants={navVariants}

        >
          <Link to="/CartPage" className="cart-icon">
            <BsFillCartFill/>
            {cartSize > 0 && 
              <div>
                <span>{cartSize}</span>
              </div>
            }
          </Link>
        </motion.div>

        <motion.div
          onClick={handleNavChange}
          custom={5 + 1}
          initial='hidden'
          animate='visible'
          variants={navVariants}
        >
          <Link to={user ? "/Dashboard" : "/signUp" } className="user-profile-picture">
            {!user &&
              <CgProfile/>
            }
            {user && user?.photoURL &&
              <img src={user.photoURL} alt="user profile picture"/> 
            }
            {user && !user?.photoURL &&
              <img src={new URL("https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max")} alt="anonymous profile picture"/>
            }
          </Link>
        </motion.div>
      </div>
    </nav> 
  )
}