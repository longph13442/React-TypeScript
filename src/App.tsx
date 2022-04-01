import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { add, getAll } from './api/Products';
import './App.css'
import ShowInfo from './component/ShowInfo';
import ProductsPage from './pages/products';
import type { TypeProducts } from './type/typeProducts'
import Home from './pages/home';
import About from './pages/About';
import Blog from './pages/Blog';
import Admin from './pages/layout/Admin';
import Website from './pages/layout/Website';
import Dashboard from './pages/layout/Dashboard';
import AddProducts from './pages/layout/AddProducts';
function App() {

  const [Products, setProducts] = useState<TypeProducts[]>([]);
 
  
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    }
    getProducts();
  })
  const onHandleAdd = async (products: TypeProducts) =>{
    console.log("app.js", products);
    // api axios
    const {data} = await add(products)
    // return

    setProducts([...Products, data])

  }
  return (
    <div>
      {/* {products.map((item,index) => <div key={index}>
        {item.name}
      </div>
      )} */}

      <main>
        <Routes>

          <Route path='/' element={<Website />} >
            
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />

          </Route>

          <Route path='/admin' element={<Admin />} >

            <Route index element={<Navigate to="dashboard" />}/>
            <Route path="dashboard" element={<Dashboard products={Products}/>} />
            <Route path="products" element={<AddProducts onAdd={onHandleAdd}/>} />

          </Route>
          {/* <Route  path="about" element={<About />} />
          <Route  path="blog" element={<Blog />} /> */}

        </Routes>

      </main>
    </div>
  )
}

export default App
