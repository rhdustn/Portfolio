import localFont from 'next/font/local'

const montserrat = localFont({
  src: [
    {
      path: './Montserrat-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: './Montserrat-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
  ],
  variable: '--font-montserrat',
})

export const fonts = [montserrat]