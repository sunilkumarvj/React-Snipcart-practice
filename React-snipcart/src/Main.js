import React from 'react';
import products from './products.json';
import './main.css';
import Click from './Click.js';
import './Click.css'

export default class Main extends React.Component{
 

    render(){
        return(
            <div>
                    
            {products.map((product, index)=>{
                    return(
                        
                       
                                <div className="desc" key={index}>
                                    
                                    <h4 className="title">&nbsp;Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{product.Title}</i></h4> 
                                    <h5 className="Id"><b>&nbsp;&nbsp;Id</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Id}</h5>
                                    <h5 className="Maker"><b>&nbsp;&nbsp;Maker</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Maker}</h5>
                                    <p className="Description"><b>&nbsp;&nbsp;Description: </b><i>{product.Description}</i></p>
                                   <p><b>&nbsp;&nbsp;Url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> <i>{product.Url}</i></p> 
                                   <br />
                                   <button  className="buy-button snipcart-add-item" data-item-id={product.Id} 
                                   data-item-price={product.price} 
                                   data-item-url={product.Url} 
                                   data-item-name={product.Title} 
                                   data-item-image={product.img}
                                   data-item-custom1-name="Frame color"
                                   data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]"
                                   >Add to cart</button>
                                   

                                   
                                
                                </div>
                            
                          
                    )
                })}
            </div>
        
            
        )
    }
}
