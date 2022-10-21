import React, { Children, cloneElement, isValidElement } from "react"

interface Props {
    children: JSX.Element | JSX.Element[],
    className?: string
}

export default function OnScroll({ children, className }: Props):JSX.Element {
    const props = {
        onScroll: true
    }
    const childrenWithScroll = Children.map(children, child => {
        if(isValidElement(child)) {
            return cloneElement(child, props)
        }
        return children
    })
    return <div className={className}>{childrenWithScroll}</div>
}