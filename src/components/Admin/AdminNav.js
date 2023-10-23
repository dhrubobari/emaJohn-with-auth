import React from "react";
import { Container, Row } from "reactstrap";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../custom-hooks/useAuth";
import logo from "../../images/Logo.svg";
import "../Admin/css/Admin.css";
import { Link } from "react-router-dom";

function AdminNav() {
  const adminNav = [
    {
      display: "Dashboard",
      path: "/dashboard",
    },
    {
      display: "All products",
      path: "/dashboard/all-products",
    },
    {
      display: "Orders",
      path: "/orders",
    },
    {
      display: "Users",
      path: "/users",
    },
  ];

  const { currentUser } = useAuth();

  return (
    <>
      <header className="admin_header-container">
        <div className="admin_nav-top">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <img src={logo} alt="" />
            </div>
            <div className="d-flex flex-none gap-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto"
                />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <p>{currentUser?.email}</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="admin_menu header">
        <Container>
          <Row>
            <div className="admin_navigation">
              <div className="admin_menu-list">
                {adminNav.map((item, index) => (
                  <li className="admin_menu-item">
                    <Link
                      to={item.path}
                      activeClassName="active"
                      className="admin-menu" // Set the base class for the navigation item
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AdminNav;
