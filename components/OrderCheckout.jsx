import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const OrderCheckout = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState();
  useEffect(() => {
    if (status === "authenticated") {
      setEmail(session.user.email);
      console.log(session.user.email);
    }
  }, [status]);

  const { cart } = useSelector((state) => state.user);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/checkout", {
        email: email,
        orderDetails: {
          ...data,
          items: cart,
        },
      })
      .then((res) => router.push("/"));
  };
  return (
    <div className="mr-10">
      <p className="text-lg mb-3 font-semibold">Shipping Address</p>
      {/* <form>
        <input placeholder="address" />
        <input placeholder="city" />
        <input placeholder="state" />
        <input placeholder="country" />
        <input placeholder="pincode" />
        <input placeholder="mobile" />
      </form> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="address"
            {...register("address", { required: true })}
          />
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="city"
            {...register("city", { required: true })}
          />
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="state"
            {...register("state", { required: true })}
          />
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="country"
            {...register("country", { required: true })}
          />
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="pincode"
            {...register("pincode", { required: true })}
          />
          <input
            className="border border-gray-500 p-3 rounded-lg"
            required={true}
            placeholder="mobile"
            {...register("mobile", { required: true })}
          />
        </div>

        <div>
          <p className="font-semibold text-lg mt-3">Payment Options</p>
          <div>
            <input type={"radio"} className="mr-2" />
            <label>COD</label>
          </div>
        </div>
        <input
          className="p-3 w-full hover:bg-black hover:text-white cursor-pointer mt-6 border border-black"
          type="submit"
        />
      </form>
    </div>
  );
};

export default OrderCheckout;
