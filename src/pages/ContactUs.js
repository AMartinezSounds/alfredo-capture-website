import React from 'react'

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

function ContactUs() {
    return (
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show' style={{ background:'#ffffff' }}>
            <h1>Our Contact</h1>
        </motion.div>
    )
}

export default ContactUs
