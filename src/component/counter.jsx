import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        count: 0,
        tags: [1, 2]
    };

    
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement= product => {
        this.setState({count: this.state.count +1})
    }


    renderTags(){
        if(this.state.tags.length === 0) return null

        return (
    <button onClick={()=>
        this.handleIncrement({product})
    }></button>
    
                );
    }

    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && 'Please create a new tag!'}
               {this.renderTags()}
            </React.Fragment>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
