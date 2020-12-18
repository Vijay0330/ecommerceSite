
import React from "react";
import CartButton from "../commons/addToCartButton";
import AddWishlistButton from "../Home/addWishlistButton"
import {productclick} from 'components/commons/productClick'
import  {Loader}  from "components/commons/loader";

const Features=(props)=> {
	
		let array=[];
		const content=props.data;
		if(content){
			content.message.forEach((e)=>{
				if(e.features_item){
					array.push(e.features_item);
				}
			})
		}
    return(<>
    		   	
		<div className="features_items">
		 <h2 className="title text-center">Features Items</h2>
		 {array.length ?<>
		 {array.map((item)=>(
		 
		 item.map((it,i)=>
			 <div className="col-sm-4" key={i}>
				 <div className="product-image-wrapper">
					 <div className="single-products">
						 <div className="productinfo text-center"> 
							 <div className='proImageDiv'>
								 <img src={it.image} onClick={()=>productclick(it.web_id)}  alt=""/>
							 </div>
							 <h2><span>{it.currency_type}</span>{it.price}</h2>
							 <p>{it.image_name}</p>
						  </div>
						 <div className="product-overlay" >
							 <div className="overlay-content">
								 <h2 style={{cursor:"pointer"}} onClick={()=>productclick(it.web_id)}>Details</h2>
								 <h2><span>{it.currency_type}</span>{it.price}</h2>
								 <p>{it.image_name}</p>
								 <CartButton item={it}/>		
								 </div>
							 </div>		
					 </div>
					 <div className="choose">
							<ul className="nav ml-3">
								<li><AddWishlistButton product={it}/></li>
								<li className="ml-3"><a href="#"><i className="fa fa-plus-square"></i>Add to compare</a></li>
							</ul>
					 </div>
							 
					 </div>
				 </div>
		 )))	}</>:Loader}
			 </div>  		
	 
	 </>);
  }
   export default Features;



