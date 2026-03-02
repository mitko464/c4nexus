import StarRating from "./StarRating"
import { useProducts } from "../hooks/useProducts";

const ProductCard = ({ product }) => {
    const salePriceMarkup = <><span style={{ textDecoration: "line-through" }}>${product.price}</span> <span style={{ color: "red" }}>${product.salePrice}</span></>;
    const { setIsAddedToCart } = useProducts();

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img className="product-image" src={product.images[0]} alt="product image" />
            </div>
            <div className="product-card__details">
                <h3 className="product__name">{product.title}</h3>
                <p className="product__description">{product.description}</p>
                <div className="product__rating">
                    <StarRating rating={product.rating} />
                </div>
                <p className="product__size">Size: <strong>{product.size}</strong></p>
                <p className="product__color">Color: <strong>{product.color}</strong></p>
                <p className="product__price">{product.salePrice ? salePriceMarkup : `$${product.price}`}</p>
            </div>
            <div className="product__actions">
                <button onClick={setIsAddedToCart} className="btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard