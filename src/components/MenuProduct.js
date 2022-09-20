export function MenuProduct(props) {
    const {product} = props;
    return <div className="menuProduct">
        <div>{product.name}</div>
        <div>{product.price}</div>
    </div>
}