import ProductCard from "./ProductCard";


const Features = (props) => {
    
    return ( <div className="min-h-[40vh] grid md:grid-cols-4 gap-8 w-[70%]">
        {props.Products ? props.Products.map((e)=>{
            return <ProductCard productInfo={e}/>
        }) :null}
        
    </div> );
}
 
export default Features;