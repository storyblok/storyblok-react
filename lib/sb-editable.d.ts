import React from 'react';
interface SbEditableProps {
    content: {
        _editable?: string;
    };
}
declare class SbEditable extends React.Component<SbEditableProps, {}> {
    constructor(props: SbEditableProps);
    componentDidMount(): void;
    addClass(el: HTMLElement, className: string): void;
    render(): React.ReactNode;
}
export default SbEditable;
