import React, { useEffect, useState } from "react";
import axios from "axios";
const Checkout = ({ email }) => {
  const [items, setItems] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/cart", { email: email })
      .then((res) => {
        setItems(res.data.data);
      });
  }, []);
  return (
    <div className="">
      {/* Cart Items */}
      <div>
        {items
          ? items.map((item) => (
              <p key={item._id}>
                {item?.itemId} {item?.size}
              </p>
            ))
          : "Loading..."}
      </div>
      {/* Order Form */}
      <div></div>
    </div>
  );
};

export default Checkout;
