
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-cart'

const Home = () => {
  const addToCartHandler =()=>{}
  return (
    <div className='home'>
      <section>

      </section>

      <h1>Latest Products
      <Link to="/search" className='findmore'>More</Link>
      </h1>
      
      <main>
        <ProductCard productId='adsssf'
         name='macbook'
         price={1666} 
         stock={22}
         handler={addToCartHandler}
         photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
         />

      </main>
    </div>
  )
}

export default Home
