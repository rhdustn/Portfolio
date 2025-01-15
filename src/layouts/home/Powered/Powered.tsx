'use client'

import * as React from 'react'
import { useParallax } from 'react-scroll-parallax'

import Image from 'next/image'
import Link from 'next/link'

import { Container, Heading, Text, Button } from '@/components'

import styles from './Powered.module.scss'

export const Powered: React.FC = () => {
    const { ref } = useParallax<HTMLImageElement>({
        speed: 5
    })

    return (
        <div className={styles.base}>
            <Container className={styles.container}>
                <div className={styles.title}>
                    <Heading element='h2' className={styles.heading}>Powered by $CVTX</Heading>
                    <div className={styles.backgroundTitle}>
                        $CVTX
                    </div>
                </div>
                <Text size={24} theme={500} className={styles.text}>
                    Everything in the carrieverse metaverse is connected by $CVTX <br /> $CVTX serves as the heart of all economic activities that occur within carrieverse ecosystem.
                </Text>
                <Image ref={ref} className={styles.illstr} src={'/powered/illstr.webp'} alt='illstr' width={1100} height={1100} />
                <Button className={styles.button} as={Link} href={'https://coinmarketcap.com/currencies/carrieverse/'} target='_blank' rel='nofollow noopen norel' size={'default'} variant={'primary'}>
                    View on Coinmarketcap
                    <Image src={'/powered/button.svg'} alt='illstr' width={64} height={64} />
                </Button>
            </Container>
        </div>
    )
}