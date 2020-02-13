import React from 'react';
import products from './products.json';
import './main.css';

export default class Main extends React.Component{
 

    render(){
        return(
            <div className="img">
                {products.map((product, index)=>{
                        return(
                            
                            <div key={index} className="album">  
                                
                                    <img src={product.img} alt="not found" /> 
                                    
                            </div>
                        )
                    })}
                </div>
            
        )
    }
}