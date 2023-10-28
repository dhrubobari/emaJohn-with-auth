import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import '../Admin/css/Admin.css';
import useGetData from '../../custom-hooks/useGetData';

function Dashboard() {

  const {data: products} = useGetData('products');

  return (
  <>
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="revenue_box">
              <h5>Total Sales</h5>
              <span>$3115</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="orders_box">
              <h5>Orders</h5>
              <span>198</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="products_box">
              <h5>Total Products</h5>
              <span>{products.length}</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="users_box">
              <h5>Total Users</h5>
              <span>1</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
  )
}

export default Dashboard