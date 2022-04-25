import { useEffect, useState } from "react"

const useProducts = () =>{
    
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        // fetch('https://lit-reaches-26879.herokuapp.com/product')
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            // console.log(data);
        });
    }, []);

    return [products, setProducts];
}

export default useProducts;