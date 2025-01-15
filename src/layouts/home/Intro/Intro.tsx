'use client'

import * as React from 'react'
import { useScroll, cubicBezier, easeIn, motion, useTransform, useSpring } from 'framer-motion'

import Image from 'next/image'

import { Header } from '@/components'

// @ts-expect-error
import video from 'public/intro/video.mp4'

import styles from './Intro.module.scss'

export const Intro: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: rootRef,
        offset: ["start start", "end end"]
    })
    const scrollProgress = useSpring(scrollYProgress, {
        bounce: 0
    })

    const wrapAnimation = useTransform(scrollProgress, [0, 1], [1, 0.35])
    const fadeOutAnimation = useTransform(scrollProgress, [0, 0.7, 0.9, 1], [1, 1, 0, 0])
    const circleAnimation = useTransform(scrollProgress, [0, 1], [1, 6])
    const borderAnimation = useTransform(scrollProgress, [0, 1], [1, 3.2])

    return (
        <div ref={rootRef} className={styles.base}>
            <div className={styles.inner}>
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.text}>
                        <motion.span
                            className={styles.wrap}
                            style={{ scale: wrapAnimation }}
                        >
                            <motion.span
                                style={{ opacity: fadeOutAnimation }}
                                className={styles.subtitle}
                            >
                                New Era
                            </motion.span>
                            <motion.span
                                style={{ opacity: fadeOutAnimation }}
                                className={styles.title}
                            >
                                in Metaverse
                            </motion.span>
                        </motion.span>
                        <motion.div
                            style={{ opacity: fadeOutAnimation }}
                            className={styles.shadow}
                        />
                        <motion.div
                            className={styles.circle}
                            style={{ scale: circleAnimation }}
                        />
                    </h1>
                    <motion.div
                        className={styles.border}
                        style={{ scale: borderAnimation }}
                    />
                </div>
                <video src={video} autoPlay muted playsInline loop className={styles.video} />
                <Image className={styles.background} src={'/intro/background.webp'} fill alt='bg' />
            </div>
        </div>
    )
}