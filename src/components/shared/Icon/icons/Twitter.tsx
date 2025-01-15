import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'svg'>

export const Twitter = forwardRef<SVGSVGElement, Props>(
    function Twitter(props, ref) {
        return (
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
                <path d="M27.805 8H31.94L22.9062 18.325L33.5337 32.375H25.2125L18.695 23.8538L11.2375 32.375H7.10001L16.7625 21.3313L6.5675 8H15.1L20.9912 15.7887L27.805 8ZM26.3537 29.9H28.645L13.855 10.345H11.3962L26.3537 29.9Z" fill="currentColor"/>
            </svg>
        )
    },
)
