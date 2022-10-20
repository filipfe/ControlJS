import React, { useEffect, useRef, useState } from "react"

interface ControlProps {
    element: JSX.Element,
    opacity?: number,
    duration?: number,
    delay?: number,
    ease?: "ease-in" | "ease-out" | "ease-in-out",
    x?: number | string,
    y?: number | string,
    rotate?: number,
    onScroll?: boolean
}

type S = Omit<ControlProps, 'element' | 'mount' | 'x' | 'y' | 'rotate'>

interface Styles extends S {
    transform?: string
}

export default function Control(props:ControlProps):JSX.Element {
    const { element, opacity, duration = 400, ease = 'cubic-bezier(0, 0, 1.0, 1.0)', delay = 0, x, y, rotate = 0, onScroll } = props;

    const firstRender = useRef<boolean>(true)
    const timer = useRef<number | undefined>(undefined)
    const wrapper = useRef<HTMLDivElement | null>(null!)
    const isInViewPort = useRef<boolean>(wrapper.current?.getBoundingClientRect().top ? wrapper.current?.getBoundingClientRect().top < window.innerHeight /1.5 : false)

    // default values for styles

    const [styles, setStyles] = useState<Styles>({
        opacity: 0
    })

    const checkViewPort = ():number | undefined => {
        return wrapper.current?.getBoundingClientRect().top
    }

    useEffect(() => {

        // testing purposes; setting default values for styles

        if(!firstRender.current) setStyles(prev => {
            return {
                ...prev,
                opacity: 0,
                transform: 'none'
            }
        })

        firstRender.current = false

        // different cases for x and y since you can provide a number or a string with sth like % value

        let xValue: number | string = typeof x === 'number' ? x + 'px' : typeof x === 'string' ? x : ''
        let yValue: number | string = typeof y === 'number' ? y + 'px' : typeof y === 'string' ? y : ''

        // full transform syntax for all cases

        let translateValue: string = x && y ? `translate(${xValue}, ${yValue})` : y ? `translateX(${yValue})` : x ? `translateX(${xValue})` : ''

        // rotate value

        let rotateValue: string = `rotate(${rotate}deg)`

        // changing values of different style properties

        

        // onScroll mechanics

        if(onScroll) {
            const scrollCallback = () => {
                let fromElement = checkViewPort()

                isInViewPort.current = fromElement ? fromElement < window.innerHeight / 1.5 : false

                if(isInViewPort.current) timer.current = setTimeout(() => {
                    setStyles(prev => {
                        return {
                            ...prev,
                            opacity: opacity,
                            transform: `${translateValue} ${rotateValue}`
                        }
                    })
                }, firstRender.current ? 1 : duration)
            };
            
            window.addEventListener('scroll', scrollCallback);

            return () => {
                clearTimeout(timer.current);
                window.removeEventListener('scroll', scrollCallback);
            }
        } else {
            timer.current = setTimeout(() => {
                setStyles(prev => {
                    return {
                        ...prev,
                        opacity: opacity,
                        transform: `${translateValue} ${rotateValue}`
                    }
                })
            }, firstRender.current ? 1 : duration)
        }

        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    return <div ref={wrapper} style={{...styles, transition: `all ${duration}ms ${ease} ${delay}ms`, maxWidth: 'max-content'}}>{element}</div>
}