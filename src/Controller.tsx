import React, { Children, cloneElement, isValidElement } from "react"
import { ControlProps } from './Control'

type C = Omit<ControlProps, 'element' | 'mount'>

interface Props extends C {
    children: JSX.Element | JSX.Element[],
    className?: string,
    stagger?: number,
    onScroll?: boolean
}

export default function Controller(props: Props):JSX.Element {
    const { children, className, stagger, ...rest } = props;

    let delay: number = 0;

    const defaultProps = rest;

    const childrenWithScroll = Children.map(children, (child, i) => {
        const dynamicProps = {
            ...(stagger && { delay: delay += stagger * i })
        }

        if(isValidElement(child)) {
            return cloneElement(child, {...defaultProps, ...dynamicProps})
        }
        return children
    })
    return <div className={className}>{childrenWithScroll}</div>
}