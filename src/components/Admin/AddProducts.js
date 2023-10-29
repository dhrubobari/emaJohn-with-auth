import React, { useState } from "react";
import { Button,Form,FormGroup,Label,Input,Container,} from "reactstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { db,storage } from '../../firebase.init';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const AddProducts = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productShortDes, setProductShortDes] = useState("");
  const [enterCategory, setenterCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const addProduct = e => {

    e.preventDefault();
    setLoading(true);

    // add to firebase db
    try {
      const docRef = collection(db, 'products')
      const storageRef = ref(storage, `productImages/${Date.now() + setProductImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, productImg)

      uploadTask.on(() => {
        toast.error('images not uploaded!')
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL)=>{
          await addDoc(docRef, {
            name: productTitle,
            shortDesc: productShortDes,
            descripton: productDesc,
            category: enterCategory,
            price: productPrice,
            imgUrl: downloadURL
          })
        })
        setLoading(false);
        toast('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        // toast.success('product sucessfully added!')
        navigate("/dashboard/all-products");
    })

    } catch (error) {
      
    }
    // console.log(product);
  };

  return (
    <Container className="add_product_container">
      {loading ? (<h4 className="py-5">loading..</h4>):<Form onSubmit={addProduct}>
        <FormGroup className="form_group">
          <Label for="title">Product Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            required
            className="border-1 border-secondary"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form_group">
          <Label for="shortDescription">Short Description</Label>
          <Input
            type="text"
            name="shortDescription"
            id="shortDescription"
            className="border-1 border-secondary"
            value={productShortDes}
            onChange={(e) => setProductShortDes(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="form_group">
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            className="border-1 border-secondary"
            required
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </FormGroup>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <FormGroup className="form_group w-50">
            <Label for="price">Price</Label>
            <Input
              type="number"
              required
              value={productPrice}
              className="border-1 border-secondary"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="form_group w-50">
            <div>
              <span>Category</span>
            </div>
            <div>
            <select class="w-100 border-secondary rounded p-2 mt-2" value={enterCategory} onChange={e=> setenterCategory(e.target.value)}>
              <option value="">select category</option>
              <option value="watches">watch</option>
              <option value="shoes">shoes</option>
              <option value="smartphones">phones</option>
              <option value="eyeglasses">eye glasses</option>
              <option value="Cap">cap</option>
            </select>
            </div>
          </FormGroup>
        </div>
        <FormGroup
          action="/upload"
          method="post"
          enctype="multipart/form-data"
          className="form_group"
          onChange={e => setProductImg(e.target.files[0])}>  
          <input type="file" class="w-75" name="image" required accept="image/*" />
          <input type="submit" class="btn btn-secondary w-25" value="Add product" />  
        </FormGroup>
      </Form>}
    </Container>
  );
};

export default AddProducts;
