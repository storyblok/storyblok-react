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
declare class SbEditable extends React.Component<SbEditableProps, {}> {
    constructor(props: SbEditableProps)
    componentDidMount(): void
    hasClass(el: HTMLElement, className: string): void
    addClass(el: HTMLElement, className: string): void
    render(): React.ReactNode
}
export default SbEditable
