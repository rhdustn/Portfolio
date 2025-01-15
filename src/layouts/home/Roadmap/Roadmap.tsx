'use client'

import * as React from 'react'
import cx from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, A11y } from 'swiper/modules'
import 'swiper/css'

import Image from 'next/image'

import { useWindowSize } from '@/hooks/useWindowSize'
import { roadmap } from '@/config'
import { Container, Heading, Text } from '@/components'

import styles from './Roadmap.module.scss'

export const Roadmap: React.FC = () => {
    const [page, setPage] = React.useState(0)
    const [slideIndex, setSlideIndex] = React.useState(0)
    const [swiper, setSwiper] = React.useState<any>(null)
    const { width } = useWindowSize()
    const [canRender, setCanRender] = React.useState(false)

    const slideTo = (index: number) => {
        swiper?.slideTo?.(index * 4)
    }

    React.useEffect(() => {
        slideTo(2)
        setCanRender(true)
    }, [swiper])

    if (!canRender) {
        return null
    }

    return (
        <section id='roadmap' className={styles.base} suppressHydrationWarning>
            <Container className={styles.container}>
                <div className={styles.title}>
                    <div className={styles.back}>
                        Roadmap
                    </div>
                    <Heading element='h3' as='h2' className={styles.heading}>
                        Roadmap
                    </Heading>
                </div>
                <div className={styles.tabs}>
                    {Array.from({ length: roadmap.length / 4 }).map((_, index) => (
                        <button className={cx(styles.tab, index === page && styles.active)} key={index} onClick={() => slideTo(index)}>
                            {2022 + index}
                        </button>
                    ))}
                </div>
                {(() => {
                    switch (true) {
                        case width === 0:
                            return null
                        case width > 1200:
                            return (
                                <Swiper
                                    slidesPerView={4}
                                    slidesPerGroup={4}
                                    spaceBetween={76}
                                    modules={[Controller, A11y]}
                                    onSwiper={setSwiper}
                                    grabCursor={true}
                                    onSlideChange={(swiper) => {
                                        setSlideIndex(swiper.activeIndex)
                                        setPage(swiper.activeIndex / 4)
                                    }}
                                >
                                    {roadmap.map((item, index) => (
                                        <SwiperSlide key={index} className={cx(styles.slide, (index < slideIndex || index >= slideIndex + 4) && styles.opacity, styles[item.type])}>
                                            <Image src={{
                                                ['yellow']: '/roadmap/yellow.webp',
                                                ['purple']: '/roadmap/purple.webp',
                                                ['pink']: '/roadmap/pink.webp',
                                                ['orange']: '/roadmap/orange.webp',
                                            }[item.type]} width={136} height={167} alt='icon' className={styles.icon} />
                                            <div className={styles.content}>
                                                <Heading element="h3" className={styles.title}>
                                                    {item.title}
                                                </Heading>
                                                {item.content.map((row, index) => (
                                                    <Text className={styles.row} size={24} theme={500} key={index}>
                                                        {row}
                                                    </Text>
                                                ))}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )
                        case width <= 1200:
                            return (
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={76}
                                    autoHeight={true}
                                    modules={[Controller, A11y]}
                                    onSwiper={setSwiper}
                                    grabCursor={true}
                                    onSlideChange={(swiper) => {
                                        setSlideIndex(swiper.activeIndex)
                                        setPage(swiper.activeIndex)
                                    }}
                                >
                                    {Array.from({ length: roadmap.length / 4 }).map((_, index) => (
                                        <SwiperSlide key={index} className={styles.grid}>
                                            {[...roadmap].slice(index * 4, index * 4 + 4).map((item, ind) => (
                                                <div key={ind} className={cx(styles.slide, styles[item.type])}>
                                                    <Image src={{
                                                        ['yellow']: '/roadmap/yellow.webp',
                                                        ['purple']: '/roadmap/purple.webp',
                                                        ['pink']: '/roadmap/pink.webp',
                                                        ['orange']: '/roadmap/orange.webp',
                                                    }[item.type]} width={100} height={122} alt='icon' className={styles.icon} />
                                                    <div className={styles.content}>
                                                        <Heading element="h3" className={styles.title}>
                                                            {item.title}
                                                        </Heading>
                                                        {item.content.map((row, id) => (
                                                            <Text className={styles.row} size={24} theme={500} key={id}>
                                                                {row}
                                                            </Text>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )

                        default:
                            break;
                    }
                })()}
            </Container>
        </section>
    )
}