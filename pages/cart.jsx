import { getSession } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Checkout from "../components/Checkout";
import OrderCheckout from "../components/OrderCheckout";
function protectedpage({ user }) {
  const { data: session, status } = useSession();
  return (
    <div className="wrapper">
      <Navbar />
      {status === "authenticated" ? (
        <div className="flex justify-between w-[80%] max-w-[1250px] mx-auto">
          <div className="flex-[2] flex-shrink">
            <OrderCheckout />
          </div>
          <div className="flex-[1] flex-grow ">
            <Checkout email={session.user.email} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session === null) {
    context.res.writeHead(302, { Location: "/login" });
    context.res.end();
    return {
      props: {},
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}
export default protectedpage;
