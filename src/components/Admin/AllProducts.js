import React from 'react';
import useGetData from '../../custom-hooks/useGetData';
import { db } from '../../firebase.init';
import { doc, deleteDoc } from "firebase/firestore";

function AllProducts() {

  const {data:productsData} = useGetData('products');

  console.log(productsData);

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
  }

  return (
  <>
    <div className="overflow-x-auto">
      <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {/* row */}
        {
          productsData.map(item=>(
            <tr key={item.id}>
              <td class="productImg_holder">
                <img src={item.imgUrl} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <th><button onClick={() => {deleteProduct(item.id)}} type="button" class="btn btn-danger">delete</button></th>
            </tr>
          ))
        }  
      </tbody>
    {/* foot */}
    <tfoot>
    </tfoot>
    </table>
  </div>
  </>
  )
}

export default AllProducts;