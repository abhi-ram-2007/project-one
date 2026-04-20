import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import "./home.css";
import ProductCard from "../components/ProductCard";
export default function Home(){
    const products = getProducts();
    return <div className="home">
        <div className="page">
            <h1>Welcome to our shop!</h1>
            <p>Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive deals and discounts!</p>
        </div>
        <div className="container">
            <h2 className="page-title">Featured Products</h2>
            <div className="product-grid">
                {getProducts().map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
}