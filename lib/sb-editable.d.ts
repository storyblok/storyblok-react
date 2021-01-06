import React from 'react'
export interface SbEditableContent {
    _uid: string
    _editable?: string
    component: string
    [index: string]: any
}
interface SbEditableProps {
    content: SbEditableContent
}
declare class SbEditable extends React.PureComponent<SbEditableProps, {}> {
    constructor(props: SbEditableProps)
    componentDidMount(): void
    componentDidUpdate(): void
    addPropsOnChildren(): void
    addClass(el: HTMLElement, className: string): void
    render(): React.ReactNode
}
export default SbEditable
