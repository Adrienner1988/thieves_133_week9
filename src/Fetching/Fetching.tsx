import { useEffect, useState, } from 'react';


interface Makeup {
    brand: string;
    image?: string;
    item_name: string;
    category: string;
    description: string;
    product_link: string;
  }
  
  const Fetching = () => {
    const [products, setProducts] = useState<Makeup[]>([]);
    const [searchProducts, setSearchProducts] = useState<string>('');
  
    useEffect(() => {
      if (searchProducts) {
        getProduct();
      }
    }, [searchProducts]);

const getProduct = async () => {
  try {
    const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchProducts}`);
    if (response.ok) {
      const data = await response.json();
      // const data: Makeup[] = await response.json();
      // setProducts(data);
      
      //I now we should not use any type and should make it explicit. I have tried many different variations of pulling the data and this is the only one that works pulling the images like I want.
        const productData = data.map((item: any) => ({
            brand: item.brand,
            image: item.api_featured_image,
            item_name: item.name,
            category: item.category,
            description: item.description
          }));
          setProducts(productData);
    } 
  } catch (error) {
    console.error(error);
  }
}
    
    return (
      <>
        <h1 className="header-fetching">Search your new favorite products!</h1>
        <h3 className="suggestions">Try: Fenty, Colourpop, nyx</h3>
  
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            value={searchProducts}
            onChange={(event) => setSearchProducts(event.target.value)}
          />
        </form>
        <div className='card-container'>
        {products && products.map((item, index) => (
          <div key={index} className="card">
            <h1 className='brand-name'><b>{item.brand}</b></h1>
            <img className='brand-image' src={item.image} />
            <h3 className='product-name'>{item.item_name}</h3>
            <h3 className="category">{item.category}</h3>
            <h4 className="description">{item.description}</h4>
          </div>
        ))}
        </div>
      </>
    )
  }
export default Fetching