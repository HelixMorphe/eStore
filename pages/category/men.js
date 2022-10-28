import Navbar from "../../components/Navbar";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
const getMenProducts = async () => {
  const products = await axios.get(
    "http://localhost:3000/api/product/getProducts"
  );

  return products;
};
const men = () => {
  //   const queryClient = useQueryClient();
  const query = useQuery(["menProducts"], getMenProducts, { staleTime: 10000 });

  return (
    <div className="wrapper">
      <Navbar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-6 gap-6">
        {query.data?.data?.data?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default men;
