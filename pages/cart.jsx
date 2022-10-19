import { getSession } from "next-auth/react";
import React from "react";
import { useSession } from "next-auth/react";

function protectedpage({ user }) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }

  return <a href="/api/auth/signin">Sign in</a>;
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
