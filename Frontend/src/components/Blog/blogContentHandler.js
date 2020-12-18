import React,{useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {Server} from "services/commonServer";
import *as actionType from "constants/action-types";


export default function BlogContentHandler() {
    const dispatch = useDispatch();
    useEffect(() => {
          dispatch(Server("get","http://localhost:3000/product/blog",null,actionType.BLOG));
      }, [dispatch]);
    return (<>
        
    </>);
}