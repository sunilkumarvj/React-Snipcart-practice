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
                                   >Add to cart($10)</button>
                                   
                                   {/* <button class="snipcart-checkout">Click here to checkout</button> */}
                                   {/* <Click /> */}
                                   
                                
                                </div>
                            
                          
                    )
                })}
            </div>
            // <div>
            //     {products.map((product, index)=>{
            //             return(
                            
            //                 <div className="container" key={index}>  
            //                     <div className="row">
            //                         <div className="col-md-2 col-sm-2 col-lg-2 s">
            //                             <img src={product.img} /> 
            //                         </div>
            //                         <div className="col-md-10 col-sm-10 col-lg-10 ">
            //                             <h4 className="title">Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <i>{product.Title}</i></h4> 
            //                             <h5 className="id"><b>Id</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Id}</h5>
            //             <h5 className="maker"><b>Maker</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{product.Maker}</h5>
            //                             <p className="Description"><b>Description: </b><i>{product.Description}</i></p>
            //                            <p><b>Url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> <i>{product.Url}</i></p> 
            //                            <Click />
                                    
                                    
            //                         </div>
            //                     </div>
            //                 </div>
                              
            //             )
            //         })}
            //     </div>
            
        )
    }
}