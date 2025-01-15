'use client'

import * as React from 'react'
import { useScroll, useSpring, useTransform, motion } from 'framer-motion'

import Link from 'next/link'
import Image from 'next/image'

import { Text, Heading, Button, Container } from '@/components'

import styles from './About.module.scss'
import { useWindowSize } from '@/hooks/useWindowSize'

export const About: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null)
    const { height } = useWindowSize()

    const { scrollYProgress } = useScroll({
        target: rootRef,
        offset: ["start start", "end end"]
    })
    const scrollProgress = useSpring(scrollYProgress, {
        bounce: 0
    })

    const textOpacityAnimation = useTransform(scrollProgress, [0, 0.2, 1], [0, 1, 1])
    const textTransformAnimation = useTransform(scrollProgress, [0, 0.5, 1], [0, -(0.19 * height), -(0.19 * height)])
    const backgroundAnimation = useTransform(scrollProgress, [0, 0.5, 1], [1, 1, 0.55])
    const titleAnimation = useTransform(scrollProgress, [0, 0.5, 1], [1, 1, 0.45])
    const firstOpacity = useTransform(scrollProgress, [0, 0.55, 0.56, 1], [0, 0, 1, 1])
    const secondOpacity = useTransform(scrollProgress, [0, 0.65, 0.66, 1], [0, 0, 1, 1])
    const thirdOpacity = useTransform(scrollProgress, [0, 0.75, 0.76, 1], [0, 0, 1, 1])
    const fourthOpacity = useTransform(scrollProgress, [0, 0.85, 0.86, 1], [0, 0, 1, 1])

    return (
        <div id='about' className={styles.base} ref={rootRef}>
            <section className={styles.inner}>
                <Container className={styles.container}>
                    <motion.div
                        className={styles.text}
                        style={{
                            opacity: textOpacityAnimation,
                            y: textTransformAnimation
                        }}
                    >
                        <motion.div
                            className={styles.backgroundText}
                            style={{ scale: backgroundAnimation }}
                        >
                            Welcome to WEB3 Metaverse!
                        </motion.div>
                        <Heading
                            element='h2'
                            as={motion.div}
                            className={styles.title}
                            style={{ scale: titleAnimation }}
                        >
                            Welcome to <b>WEB3 Metaverse!</b>
                        </Heading>
                        <Text size={24} theme={500} className={styles.subtitle}>
                            Web3 metaverse where game, fun, great, content and earnings coexist.
                        </Text>
                        <Button as={Link} href={'/about'} size={'default'} variant={'primary'} className={styles.button}>
                            About us
                        </Button>
                    </motion.div>
                    <motion.div className={styles.illstr1} style={{ opacity: firstOpacity }}>
                        <Image
                            src={'/about/illstr1.webp'}
                            width={456}
                            height={600}
                            alt='illstr'
                        />
                    </motion.div>
                    <motion.div className={styles.illstr2} style={{ opacity: secondOpacity }}>
                        <Image
                            src={'/about/illstr2.webp'}
                            width={216}
                            height={300}
                            alt='illstr'
                        />
                    </motion.div>
                    <motion.div className={styles.illstr3} style={{ opacity: thirdOpacity }}>
                        <Image
                            src={'/about/illstr3.webp'}
                            width={216}
                            height={300}
                            alt='illstr'
                        />
                    </motion.div>
                    <motion.div className={styles.illstr4} style={{ opacity: fourthOpacity }}>
                        <Image
                            src={'/about/illstr4.webp'}
                            width={110}
                            height={150}
                            alt='illstr'
                        />
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}