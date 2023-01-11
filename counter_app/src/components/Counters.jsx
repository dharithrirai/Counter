import React, { Component } from 'react'
import Counter from './counter'
class Counters  extends Component {
    state = { 
        Counters:[
            {id:1, value:0},

        ]
     };

     handleDelete=counterId=>{
        const counters=this.state.Counters.filter(c=>c.id!==counterId);
        console.log(counters )
        this.setState({Counters});
     };

    render() {
        return (<div>

            <h2 style={{textAlign:"center", fontWeight:"bold"}} >Counter Application</h2>
            {this.state.Counters.map(counter=>
            <Counter key={counter.id}  onDelete={this.handleDelete} counter={counter}>
            </Counter>)}
        </div>);
    }
}
 
export default Counters ;