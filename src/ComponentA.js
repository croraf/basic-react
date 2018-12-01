
import React from 'react';
import {ComponentB} from './ComponentB';
import {ComponentC} from './ComponentC';

class ComponentA extends React.Component {

    state = {
        first: true
    }

    clickHandler = () => {
        this.setState({
            first: !this.state.first
        })
    }

    render() {

        const first = (
            <div>
                <ComponentC content='1' />
                <ComponentB content='2' />
                <ComponentB content='3' />
            </div>
        );

        const second = (
            <div>
                <ComponentB content='2' />
                <ComponentB content='3' />
            </div>
        );

        return (
            <div>
                {this.state.first ? first : second}
                <button onClick={this.clickHandler}>click me</button>
            </div>
            )
    }
}

export {ComponentA};