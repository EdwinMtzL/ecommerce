
export default function ProductCard( {img,id,title,description, price} ) {

    // const {title, description, price} = prop;
  
return (
    <div className='card mt-4 m-lg-1' key={id}>
        <img />
        <h2> {title} </h2>
        <h3> {description} </h3>
        <p> {price} </p>
    </div>
  )
}
