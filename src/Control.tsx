import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

interface Control {
    element: JSX.Element,
    opacity?: number,
    duration?: number,
    delay?: number,
    ease?: "ease-in" | "ease-out" | "ease-in-out"
}

type Styles = Omit<Control, 'element'>

export default function Control(props:Control):JSX.Element {
    const { element, opacity, duration, ease, delay } = props;

    const wrapper = useRef<HTMLDivElement | null>(null)

    const [styles, setStyles] = useState<Styles>({
        opacity: opacity
    })

    useLayoutEffect(() => {
        if(opacity) setStyles(prev => {
            return {
                ...prev,
                opacity: 0
            }
        })
    }, [])

    useEffect(() => {
        if(opacity) setStyles(prev => {
            return {
                ...prev,
                opacity: opacity
            }
        })
    }, [])

    return <div ref={wrapper} style={{...styles, transition: `all ${duration}ms ${ease} ${delay}ms`}}>{element}</div>
}