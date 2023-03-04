import { motion } from "framer-motion"

import { staggerContainer } from '../utils/motion'

import './SectionWrapper.css'

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            variants={ staggerContainer() }
            initial='hidden'
            whileInView='show'
            viewport={{
                once: true,
                amount: 0.25
            }}
            className='app__wrap-section'
        >
            <span id={ idName }>&nbsp;</span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper