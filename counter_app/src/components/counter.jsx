import React, { Component } from 'react'
class  Counter extends Component {
    state={
        value:this.props.counter.value,
        tags:['tag1','tag2','tag3']
    };

    renderTags(){
        if(this.state.tags.length===0) return <p> There Is No Tag</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }

    // alternative to to inherit the this

    handleIncrement=()=>{
        // this.setState() to increment dynamically
        this.setState({value:this.state.value+1});
    }


    // Virtual DOM -Tree
    render(){
        console.log('prop', this.props)
        return(

        <div>
             <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment</button> 
             <buton onClick={ () =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</buton>
        </div>
        );
    }

    // Yellow for Zero and change to primary when incremented
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.state;
        return value===0 ?"Zero":value;
    }
}
export default Counter;