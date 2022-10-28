import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/features/user/userSlice";
import ProductCheckout from "../atoms/ProductCheckout";
const getCartItems = async (email, dispatch) => {
  const items = await axios.post("http://localhost:3000/api/cart", {
    email: email,
  });

  dispatch(updateCart({ cart: items.data.data }));
  return items.data.data;
};
const Checkout = ({ email }) => {
  const dispatch = useDispatch();
  const query = useQuery(["cart"], () => getCartItems(email, dispatch));
  var total = 0;
  return (
    <div className="">
      <p className="text-lg">Your Order</p>
      <div className="mt-4">
        {query?.data?.map((item) => {
          total = total + item.price;
          return <ProductCheckout product={item} key={item._id} />;
        })}
        <div className="text-xl font-semibold mt-4 flex justify-between items-center">
          <p className="">Total</p>
          <p className="text-2xl">Rs.{total.toLocaleString()}</p>
        </div>
      </div>
      {/* Order Form */}
      <div></div>
    </div>
  );
};

export default Checkout;
