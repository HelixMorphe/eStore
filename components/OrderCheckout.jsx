import React from "react";

const OrderCheckout = () => {
  return (
    <div>
      <p className="text-lg">Shipping Address</p>
      <form>
        <input placeholder="address" />
        <input placeholder="city" />
        <input placeholder="state" />
        <input placeholder="country" />
        <input placeholder="pincode" />
        <input placeholder="mobile" />
      </form>
    </div>
  );
};

export default OrderCheckout;
