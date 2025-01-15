import * as React from 'react'

import { Intro } from './Intro/Intro'
import { About } from './About/About'
import { Powered } from './Powered/Powered'
import { Games } from './Games/Games'
import { Platform } from './Platform/Platform'
import { Press } from './Press/Press'
import { Roadmap } from './Roadmap/Roadmap'
import { Partners } from './Partners/Partners'

export const HomePage: React.FC = () => {
    return (
        <React.Suspense>
            <Intro />
            <About />
            <Powered />
            <Games />
            <Platform />
            <Press />
            <Roadmap />
            <Partners />
        </React.Suspense>
    )
}