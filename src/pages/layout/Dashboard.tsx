import React from 'react'
import { TypeProducts } from '../../type/typeProducts'
import ProductsPage from '../products'

type DashboardProps = {
  products: TypeProducts[]
}

const Dashboard = (props: DashboardProps) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button className='btn btn-danger'>Xóa</button></td>
            <td><button className='btn btn-success'>Sửa</button></td>

          </tr>)}


        </tbody>
      </table>
    </div>
  )
}

export default Dashboard