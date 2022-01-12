import React from 'react';

class Lifecycle extends React.Component {
    constructor (){ 
        super();
        this.state = {
            message : '',
            text : '',
        }
        console.log("This is the constructor!");
    }
    componentDidMount(){
        console.log('This is componentDidMount')
    }
    componentWillUnmount() {
        console.log("this is componentUnmount")
    }
    shouldComponentUpdate(){
        console.log('this is shouldComponentUpdate');
        return true;
    }
    render(){
        console.log('This is the render method')
        return (
            <>
                <button onClick = {() => this.setState(state => ({message : !state.message}) )}>
                    Toggle Lifecycle
                </button>

                <button onClick = {() => this.setState (state => ({text : state.text + this.props.text }))}>
                    Show in-built Text
                </button>
                
                <h2>{this.state.message ? '...LIFECYCLE' : null }</h2>
                <p>{this.state.text}</p>
            </>
            
        )
    }
}

export default Lifecycle;