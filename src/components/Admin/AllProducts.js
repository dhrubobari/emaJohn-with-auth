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
      {/* row 1 */}
      <tr>
        <th>
          <h3>Hii</h3>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">Apple Iphone 15</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Mobile
          <br/>
          <span className="badge badge-ghost badge-sm"></span>
        </td>
        <td>$799</td>
        <th>
        <button type="button" class="btn btn-danger">delete</button>
        </th>
      </tr>
      {/* row 2 */}
        {
          productsData.map(item=>(
            <tr key={item.id}>
              <td>
                {item.image}
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <th><button onClick={() => {deleteProduct(item.id)}} type="button" class="btn btn-danger">delete</button></th>
            </tr>
          ))
        }
      {/* row 3 */}
      <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
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