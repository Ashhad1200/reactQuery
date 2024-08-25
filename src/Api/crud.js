import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import axios from "axios";

const urlp = "http://localhost:3000/products";
// const urlp = 'http://localhost:5222/api/Products';

const urlc = "http://localhost:3001/categories";
// const urlc = 'http://localhost:5222/api/Category';

const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch(urlp).then((res) => res.json()),
  });
  return query;
};

export const useCatagory = () => {
  const query = useQuery({
    queryKey: ["Categories"],
    queryFn: () => fetch(urlc).then((res) => res.json()),
  });
  return query;
};

export const useProductsByCategoryId = (categoryId ) => {
  const query = useQuery({
    queryKey: ['products', categoryId],
    queryFn: async () => {
      if (!categoryId) throw new Error('Category ID is required');
      const response = await axios.get(`${urlp}?categoryId=${categoryId}`);
      return response.data;
    },
  });
  return query;
};

export const useCreateNewProduct = () => {
  const queryClint = useQueryClient();
  const updateProduct = useMutation({
    mutationFn: async ({ product }) => {
      return await fetch(urlp, {
        method: "POST",
        body: JSON.stringify(product),
      });
      //   return await axios.post(urlp,product)
    },
    onSuccess: () => {
      queryClint.invalidateQueries({ queryKey: ["products"] });
    },
    mutationKey: ["added"],
  });
  return updateProduct;
};
export default useProducts;
