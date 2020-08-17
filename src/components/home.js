import React, { useEffect, useState } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Context } from "../context/store";
import axios from "axios";
import request from "../config/request";
import { Link } from "react-router-dom";

import {
  UPDATE_PRODUCTS,
  UPDATE_DEPARTMENTS,
} from "../context/reducer_actions";
import Product from "./product/product";

function Home() {
  const { state, dispatch } = React.useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

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

  const loadProductsPage = (page) => {
    page = page || 1;
    request.get(`/v1/products?page=${page}`).then((res) => {
      updateProducts(res.data.products);
      setTotalPages(res.data.total_pages);
      setCurrentPage(page);
    });
  };

  useEffect(() => {
    request.get(`/v1/departments`).then((res) => {
      updateDepartments(res.data);
    });

    loadProductsPage(1);
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

        <div class="row">
          <div class="col-6"></div>
          <div class="col-6">
            <nav aria-label="Page navigation example" className="pull-right">
              <ul class="pagination">
                {totalPages &&
                  totalPages > 1 &&
                  Array.apply(null, { length: totalPages }).map((e, i) => (
                    <li className="page-item">
                      <button
                        className={`btn ${
                          currentPage === i + 1 ? "btn-primary" : "btn-light"
                        }`}
                        onClick={() => loadProductsPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
