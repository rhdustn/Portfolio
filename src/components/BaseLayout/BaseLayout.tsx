'use client'

import * as React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Footer } from '@/components'
import { ParallaxProvider } from 'react-scroll-parallax'

import styles from './BaseLayout.module.scss'
import { useWindowSize } from '@/hooks/useWindowSize'
import { usePathname } from 'next/navigation'

type BaseLayoutProps = React.PropsWithChildren

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const { width, height } = useWindowSize()
    const pathname = usePathname()
    const lenisRef = React.useRef()

    React.useEffect(() => {
        if (!lenisRef.current) {
            return
        }

        (lenisRef.current as any)?.scrollTo?.(0, {
            duration: 0,
            immediate: true
        })
    }, [pathname])

    React.useEffect(() => {
        document.body.style.setProperty('--vw', `${width / 100}px`)
        document.body.style.setProperty('--vh', `${height / 100}px`)
    }, [width, height])

    return (
        <ParallaxProvider>
            <ReactLenis
                ref={lenisRef}
                root
                options={{
                    lerp: 0.05,
                    wheelMultiplier: 0.9,
                    infinite: false,
                    gestureOrientation: "vertical",
                    normalizeWheel: false,
                    smoothTouch: false,
                }}
                className={styles.base}
            >
                <main className={styles.content}>{children}</main>
                <Footer className={styles.footer} />
            </ReactLenis>
        </ParallaxProvider>
    )
}

export { BaseLayout }
