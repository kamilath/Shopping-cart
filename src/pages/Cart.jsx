import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">{t("yourCartIsEmpty")}</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> {t("continueShopping")}
          </Link>
        </div>
      </div>
    </div>
  );

  const addItem = (product) => dispatch(addCart(product));
  const removeItem = (product) => dispatch(delCart(product));

  const getOriginalPrice = (price) => (price * 1.2).toFixed(2);

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">{t("itemList")}</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => {
                    const originalPrice = getOriginalPrice(item.price);
                    const priceDropped = item.price < originalPrice;

                    return (
                      <div key={item.id}>
                        <div className="row d-flex align-items-center">
                          <div className="col-lg-3 col-md-12">
                            <div className="bg-image rounded">
                              <img src={item.image} alt={item.title} width={100} height={75} />
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-6">
                            <p>
                              <strong>{item.title}</strong>
                              {priceDropped && (
                                <span className="badge bg-info text-dark ms-2">
                                  {t("priceDropped")}
                                </span>
                              )}
                            </p>
                          </div>

                          <div className="col-lg-4 col-md-6">
                            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                              <button
                                className="btn px-3 btn-outline-dark"
                                onClick={() => removeItem(item)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                              <p className="mx-5 my-auto">{item.qty}</p>
                              <button
                                className="btn px-3 btn-outline-dark"
                                onClick={() => addItem(item)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <p className="text-start text-md-center">
                              <strong>
                                <span className="text-muted text-decoration-line-through me-2">
                                  ₹{originalPrice}
                                </span>
                                ₹{item.price} x {item.qty}
                              </strong>
                            </p>
                          </div>
                        </div>
                        <hr className="my-4" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">{t("orderSummary")}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      {t("products")} ({totalItems})
                      <span>₹{Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      {t("shipping")}
                      <span>₹{shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>{t("totalAmount")}</strong>
                      </div>
                      <span>
                        <strong>₹{Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>

                  <Link to="/checkout" className="btn btn-dark btn-lg btn-block w-100">
                    {t("goToCheckout")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">{t("cart")}</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Cart;
