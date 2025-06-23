function Catalog({products}) {
 

  return (
    <>
    <ul>
        {products.map(
            product => 
            <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </li>
        )}
    </ul>
    </>
  );
}

export default Catalog;
