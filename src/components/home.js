import React, { useEffect } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Context } from "../context/store"
import { UPDATE_PRODUCTS, UPDATE_DEPARTMENTS } from "../context/reducer_actions";
import request from "../config/request";

function Home() {
    const { state, dispatch } = React.useContext(Context);

    const updateDepartments = (res) => {
        this.dispatch({
            type: UPDATE_DEPARTMENTS,
            payload: res
           });
    };

    const updateProducts = ( res ) => {
        this.dispatch({
            type: UPDATE_PRODUCTS,
            payload: res
           }
        );
    };
    
    useEffect(() => {
        request.get(`/v1/departments`)
        .then(res => {
           updateDepartments(res);
        })

        request.get(`/v1/products`)
        .then(res => {
           updateProducts(res);
        })
    });

    return (
        <div className="layout">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <h1 class="my-4">Acme Store</h1>
                        <div class="list-group">
                            {state.departments.map((department) => (
                                <a href="#" class="list-group-item">{department.name}</a>
                            ))}
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item One</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item Two</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item Three</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item Four</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item Five</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100">
                                    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                    <div class="card-body">
                                        <h4 class="card-title">
                                            <a href="#">Item Six</a>
                                        </h4>
                                        <h5>$24.99</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">★ ★ ★ ★ ☆</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;