

const ProductCard = ({price,category,image}) => {
 

    return ( 
        <>
            <img src={image} alt="" />
            <div className="flex justify-between">
            <p>{category}</p>
            <p>{price}€ </p>
            
            </div>
            
        </>
     );
}
 
export default ProductCard;