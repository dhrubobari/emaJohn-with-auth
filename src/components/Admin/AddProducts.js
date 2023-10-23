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

const AddProductPage = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setProductDetails({ ...productDetails, [name]: value });
  // };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setProductDetails({ ...productDetails, productImage: file });
  // };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const addProduct = async (e) => {
    e.preventDefault();

    const product = {
      title: enterTitle,
      shortDesc: enterShortDesc,
      description: enterDesc,
      category: enterCategory,
      price: enterPrice,
      imgUrl: enterProductImg,
    };
    console.log(product);
  };

  return (
    <Container className="add_product_container">
      <Form onSubmit={addProduct}>
        <FormGroup className="custom_form_group">
          <Label for="title">Product Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            required
            value={enterTitle}
            onChange={(e) => setEnterTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="custom_form_group">
          <Label for="shortDescription">Short Description</Label>
          <Input
            type="text"
            name="shortDescription"
            id="shortDescription"
            required
            value={enterShortDesc}
            onChange={(e) => setEnterShortDesc(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="custom_form_group">
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            required
            value={enterDesc}
            onChange={(e) => setEnterDesc(e.target.value)}
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
              value={enterPrice}
              onChange={(e) => setEnterPrice(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="custom_form_group w-50">
            <Label for="category">Category</Label>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              required
              value={enterCategory}
              onChange={(e) => setEnterCategory(e.target.value)}
            >
              <DropdownToggle caret>
                {enterCategory ? enterCategory : "Select Category"}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setEnterCategory("")}>
                  Phone
                </DropdownItem>
                <DropdownItem onClick={() => setEnterCategory("")}>
                  Watch
                </DropdownItem>
                <DropdownItem onClick={() => setEnterCategory("")}>
                  Wallet
                </DropdownItem>
                <DropdownItem onClick={() => setEnterCategory("")}>
                  Shoes
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </FormGroup>
        </div>
        <FormGroup className="custom_form_group">
          <Label
            for="productImage"
            onChange={(e) => setEnterProductImg(e.target.files(0))}
          >
            Product Image
          </Label>
          <Input type="file" required />
        </FormGroup>
        <Button color="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProductPage;
