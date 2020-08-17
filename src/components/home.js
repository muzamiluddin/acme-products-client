import React, { useEffect } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Context } from "../context/store";
import axios from "axios";
import request from "../config/request";
import {
  UPDATE_PRODUCTS,
  UPDATE_DEPARTMENTS,
} from "../context/reducer_actions";
import Product from "./product/product";

function Home() {
  const { state, dispatch } = React.useContext(Context);

  const updateDepartments = (res) => {
    dispatch({
      type: UPDATE_DEPARTMENTS,
      payload: res,
    });
  };

  const updateProducts = (res) => {
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: res,
    });
  };

  useEffect(() => {
    request.get(`/v1/departments`).then((res) => {
      updateDepartments(res.data);
    });

    request.get(`/v1/products`).then((res) => {
      updateProducts(res.data);
    });
  }, []);

  return (
    <div className="layout">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Acme Store</h1>
            <div class="list-group">
              {state.departments &&
                state.departments.map((department) => (
                  <a href="#" class="list-group-item">
                    {department.name}
                  </a>
                ))}
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
              {state.products &&
                state.products.map((product) => <Product product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
