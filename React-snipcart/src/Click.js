import React from 'react';
import './Click.css';
export default class Click extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
     handleClick = (() => {  
        
      this.setState({value:this.state.value + 1});
    
      console.log(this.state.value);
    });
    render(){
        
        return(
            
<p>
        <button className="btn fa fa-heart"  onClick={this.handleClick}> {this.state.value}</button>
</p>
        )
    }
}
