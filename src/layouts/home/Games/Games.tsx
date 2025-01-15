'use client'

import * as React from 'react'

import Image from 'next/image'

import { useScrollProgress } from '@/hooks'

import { Carrieverse } from '../Carrieverse/Carrieverse'
import { Superkola } from '../Superkola/Superkola'

import styles from './Games.module.scss'

export const Games: React.FC = () => {
    const rootRef = React.useRef<HTMLDivElement>(null)
    const scrollProgress = useScrollProgress(rootRef)

    const progress = React.useMemo(() => Math.min(0.8, scrollProgress / 0.8), [scrollProgress])

    return (
        <div ref={rootRef} className={styles.base}>
            <div className={styles.inner}>
                <div 
                className={styles.title}
                style={{
                    opacity: 1 - 5 * (0.2 - progress),
                    transform: `scale(${1 + (1.3 * progress)}) translateY(${-progress * 4.5}vh)`
                }}
                >
                    <div className={styles.back}>
                        Our games
                    </div>
                    <div className={styles.front} style={{
                        transform: `scale(${1 + (0.55 * progress)})`
                    }}>
                        Our games
                    </div>
                </div>
                <Image style={{
                    opacity: 2.5 * ((Math.max(0.4, Math.min(1, progress / 0.5)) - 0.4))
                }} className={styles.illstr} src={'/games/illstr.webp'} width={1325} height={691} alt={'illstr'} />
                <Image style={{
                    opacity: 2.5 * ((Math.max(0.4, Math.min(1, progress / 0.5)) - 0.4))
                }} className={styles.illstrMob} src={'/games/illstr-mob.png'} width={734} height={353} alt={'illstr'} />
                <Image style={{
                    opacity: progress < 0.3 ? 0 : 1
                }} className={styles.light1} src={'/games/light1.svg'} width={489} height={446} alt={'light'} />
                <Image style={{
                    opacity: progress < 0.45 ? 0 : 1
                }} className={styles.light2} src={'/games/light2.svg'} width={464} height={137} alt={'light'} />
                <Image style={{
                    opacity: progress < 0.6 ? 0 : 1
                }} className={styles.light3} src={'/games/light3.svg'} width={1353} height={448} alt={'light'} />
            </div>
            <div className={styles.track} />
            <Carrieverse />
            <Superkola />
        </div>
    )
}