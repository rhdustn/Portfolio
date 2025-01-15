'use client'

import * as React from 'react'

import Link from 'next/link'

import { Container, Heading, Button } from '@/components'
import { useParallax } from 'react-scroll-parallax'

import styles from './Platform.module.scss'
import Image from 'next/image'

export const Platform: React.FC = () => {
    const { ref } = useParallax<HTMLImageElement>({
        speed: 20
    })

    return (
        <section id='platform' className={styles.base}>
            <Container className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.back}>
                        Platform
                    </div>
                    <Heading element='h2' as='h2' className={styles.title}>Cling</Heading>
                    <Heading element='h2' as='h3' className={styles.title}>Cling VAULT</Heading>
                    <Heading element='h2' as='h4' className={styles.title}>Cling Wallet</Heading>
                </div>
                <div className={styles.buttons}>
                    <Button as={Link} href={'https://play.google.com/store/apps/details?id=com.carrieverse.cling.wallet'} target='_blank' rel='nofollow norel noopen' className={styles.button} size={'default'} variant={'primary'}>
                        Learn more
                        <Image src={'/next.svg'} alt='icon' width={64} height={64} />
                    </Button>
                    <Button as={Link} href={'https://clingswap.io/vault'} target='_blank' rel='nofollow norel noopen' className={styles.button} size={'default'} variant={'gold'}>
                        Stake $CVTX
                        <Image src={'/wallet.svg'} alt='icon' width={64} height={64} />
                    </Button>
                </div>
                <Image ref={ref} className={styles.illstr} src={'/platform-illstr.webp'} alt='illstr' width={1335} height={1373} />
            </Container>
        </section>
    )
}