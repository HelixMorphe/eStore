import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
const test = () => {
  const user = useUser();
  useEffect(() => {
    console.log(user, "USER");
  }, [user]);
  return <div>test</div>;
};

export default test;
