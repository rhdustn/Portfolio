import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'svg'>

export const Youtube = forwardRef<SVGSVGElement, Props>(
    function Youtube(props, ref) {
        return (
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
                <path fillRule="evenodd" clipRule="evenodd" d="M32.469 10.2123C33.8502 10.5821 34.9357 11.6675 35.3054 13.0487C35.9735 15.5496 35.9762 20.7708 35.9762 20.7708C35.9762 20.7708 35.9762 25.9919 35.3054 28.4929C34.9357 29.8741 33.8502 30.9595 32.469 31.3292C29.9681 32 19.9351 32 19.9351 32C19.9351 32 9.90228 32 7.40131 31.3292C6.02012 30.9595 4.93469 29.8741 4.56496 28.4929C3.89417 25.9919 3.89417 20.7708 3.89417 20.7708C3.89417 20.7708 3.89417 15.5496 4.56496 13.0487C4.93469 11.6675 6.02012 10.5821 7.40131 10.2123C9.90228 9.54153 19.9351 9.54153 19.9351 9.54153C19.9351 9.54153 29.9681 9.54153 32.469 10.2123ZM25.0593 20.7718L16.7245 25.5836V15.96L25.0593 20.7718Z" fill="currentColor" />
            </svg>
        )
    },
)
