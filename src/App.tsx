import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { getAll } from './api/Products';
import './App.css'
import ShowInfo from './component/ShowInfo';
import ProductsPage from './pages/products';
import type { Products } from './type/typeProducts'
import Home from './pages/home';
import About from './pages/About';
import Blog from './pages/Blog';
import Admin from './pages/layout/Admin';
import Website from './pages/layout/Website';
import AdminProducts from './pages/layout/AdminProducts';
import Dashboard from './pages/layout/Dashboard';
function App() {

  const [products, setProducts] = useState<{ _id: Number, name: String }[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data);
    }
    getProducts();
  })
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

          <Route path='admin' element={<Admin />} >
            <Route index element={<Navigate to="/admin/dashboard" />}/>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />

          </Route>
          {/* <Route  path="about" element={<About />} />
          <Route  path="blog" element={<Blog />} /> */}

        </Routes>

      </main>
    </div>
  )
}

export default App
