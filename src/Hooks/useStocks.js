import { useState, useEffect } from 'react';

const useStocks = () =>{
    
const [stock, setStock] = useState([]);

useEffect( () =>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setStock(data))
},[])
    return [stock];
}

export default useStocks;