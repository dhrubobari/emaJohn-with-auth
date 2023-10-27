import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import {db,storage } from '../../firebase.init';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const AddProducts = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productShortDes, setProductShortDes] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImg, setProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
            title: productTitle,
            shortDesc: productShortDes,
            descripton: productDesc,
            category: productCategory,
            price: productPrice,
            imgUrl: downloadURL
          })
        })
        setLoading(false);
        toast.success('product sucessfully added!')
        navigate("/dashboard/all-products");
    })

    } catch (error) {
      
    }
    // console.log(product);
  };

  return (
    <Container className="add_product_container">
      {loading ? (<h4 className="py-5">loading..</h4>):<Form onSubmit={addProduct}>
        <FormGroup className="custom_form_group">
          <Label for="title">Product Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            required
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="custom_form_group">
          <Label for="shortDescription">Short Description</Label>
          <Input
            type="text"
            name="shortDescription"
            id="shortDescription"
            required
            value={productShortDes}
            onChange={(e) => setProductShortDes(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="custom_form_group">
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            required
            value={productDesc}
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </FormGroup>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <FormGroup className="custom_form_group w-50">
            <Label for="price">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              required
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="custom_form_group w-50">
            <Label for="category">Category</Label>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              required
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <DropdownToggle caret>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Phone
                </DropdownItem>
                <DropdownItem>
                  Watch
                </DropdownItem>
                <DropdownItem>
                  Wallet
                </DropdownItem>
                <DropdownItem>
                  Shoes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </div>
        <FormGroup className="custom_form_group">
          <Label
            onChange={(e) => (e.target.files(0))}
          >
            Product Image
          </Label>
          <Input type="file" required onChange={e => setProductImg(e.target.files[0])} />
        </FormGroup>
        <Button color="primary" type="submit">
          Add Product
        </Button>
      </Form>}
    </Container>
  );
};

export default AddProducts;
