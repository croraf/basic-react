
import React from 'react';

class ComponentB extends React.Component {

    componentWillMount = () => {
        console.log('mounting:', this.props.content);
    }

    componentWillUnmount = () => {
        console.log('unmounting:', this.props.content);
    }

    render() {
        // console.log('rendering:', this.props.content);
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}

export {ComponentB};