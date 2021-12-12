import React from 'react';

type ButtonProps = {
    color: string,
    currentPage: (e: string) => void
}

type ButtonState = {
    currentIndex: number,
}

export default class Button extends React.Component<ButtonProps, ButtonState> {

    render() {
        return <button className="btn btn-primary" style={{color: this.props.color}} 
        onClick={()=> this.props.currentPage('super')}>My Button</button>
    }
}