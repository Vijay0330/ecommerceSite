import React from 'react';
import LeftSideBar from 'components/commons/leftSideBar';
import ProductDatas from './productDatas';

 
export default function Productdetail(props) {
    
    return (
        <div className="container" >
            <div className="row mt-5" >
                <div className="col-sm-3">
                    <LeftSideBar {...props}/>
                </div>
                <div className="col-sm-9 padding-right">
                  <ProductDatas {...props}/>
                </div>
            </div>
			      
            
        </div>
    )
}
