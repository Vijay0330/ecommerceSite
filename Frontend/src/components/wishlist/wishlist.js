import React, { useEffect, useState } from 'react';
import LeftSideBar from '../commons/leftSideBar';
import {useSelector,useDispatch} from 'react-redux';
import CartButton from "../commons/addToCartButton";
import {RemoveFromWishlist} from 'redux/actions/wishlistAction';
import {productclick} from 'components/commons/productClick';


const WishList = () => {
    const dispatch = useDispatch();
    const [empty, isempty] = useState(true);
    const wishlist = useSelector((state) => state.WishlistReducer);
    const [wishlistItems, delWishlist] = useState(wishlist.addtowishlist);
    useEffect(() => {
        if (wishlist !== [] || undefined) {
        return isempty(false);
        } else {
        isempty(true);}}, [wishlist]);
    const deleteHandler = (wish) => {
        const deletedProduct = wishlistItems.filter(
        (item) => item.web_id !== wish.web_id);
        delWishlist([...deletedProduct]);
        {dispatch(RemoveFromWishlist(wishlist, wish));}
    };
    return (
        <>
            <div className='container '>
                <div className='row mt-5'>
                    <div className='col-sm-3'>
                    <LeftSideBar />
                    </div>
                    <div className='col-sm-9 padding-right'>
                    <div className='features_items'>
                    <h2 className='title text-center'>WISH LIST</h2>
                    {!empty &&wishlistItems.map((wish,i) => (<>
                        <div className='col-sm-4' key={i}>
                        <div className='product-image-wrapper'>
                        <div className='single-products'>
                        <div className='productinfo text-center'>
                        <img src={wish.image}  alt=''  onClick={()=>productclick(wish.web_id)} />
                        <h2>${wish.price}</h2>
                        <p>{wish.image_name}</p>
                        <CartButton item={wish}/>
                        <button className='cart_quantity_delete'onClick={(e) => {  deleteHandler(wish);}}>
                        <label><i className='fa fa-heart  redheart'></i></label></button>    
                        </div>
                        </div>
                        </div>
                        </div>
                        </>
                        ))}
            {wishlistItems.length===0 && <span><i className="fa fa-exclamation-circle emptywishlist" aria-hidden="true"></i></span>}
            </div>
            </div>
        </div>
        </div>
    </>);
}

export default WishList;
