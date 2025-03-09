import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
    id: number,
    title: string,
    category: string,
    price: number,
}

export default function Card() {
    const [product, setProduct]= useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get('/products');
            setProduct(res.data)
        })()

        console.log(product)
    }, [])

    console.log(product)

    return (
        <div>
            <ul>
                {product.map((value) => (
                    <li>{value.id}</li>
                ))}
            </ul>
        </div>
    )
}