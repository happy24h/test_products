import React from "react";
import { NavLink } from "react-router-dom";

const ProductSort = ({ product }) => {
  const { name, price, thumbnail, id } = product;
  return (
    <div className="row g-4">
      <div className="col-12 col-sm-6 col-lg-4">
        {/* <!-- Card Product--> */}
        <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
          <div className="card-img position-relative">
            <div className="card-badges">
              <span className="badge badge-card">
                <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span>{" "}
                Sale
              </span>
            </div>
            <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted">
              <i className="ri-heart-line"></i>
            </span>
            <picture className="position-relative overflow-hidden d-block bg-light">
              <img
                className=" position-relative z-index-10 object-fit-cover "
                style={{
                  height: "350px",
                  width: "300px",
                }}
                title=""
                src={thumbnail}
                alt=""
              />
            </picture>
            <div className="position-absolute start-0 bottom-0 end-0 z-index-40 p-2">
              <NavLink className="btn btn-quick-add" to={`/products/${id}`}>
                By Now
              </NavLink>
            </div>
          </div>
          <div className="card-body px-0">
            <NavLink className="text-decoration-none link-cover" to="/">
              {name}
            </NavLink>
            <small className="text-muted d-block">4 colours, 10 sizes</small>
            <p className="mt-2 mb-0 small">
              <s className="text-muted">$329.99</s>
              <span className="text-danger">{price}</span>
            </p>
          </div>
        </div>

        {/* <!--/ Card Product--> */}
      </div>
    </div>
  );
};

export default ProductSort;
