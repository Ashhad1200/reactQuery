import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const urlp = "http://localhost:3000/products";
// const urlp = 'http://localhost:5222/api/Products';

const urlc = "http://localhost:3001/categories";
// const urlc = 'http://localhost:5222/api/Category';

const urlu = "http://localhost:3003/users";

export const useListUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch(urlu).then((res) => res.json()), // Wrap the fetch in a function
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return query;
};

export const useUserDetails = ({ id }) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["userDetails", "users", id],
    queryFn: () =>
      fetch(`${urlu}?id=${id}`).then((response) => response.json()),
  });
  return query;
};

// const useProducts = (sortBy, order) => {
//   // Construct the URL with sorting parameters
//   const urlWithParams = `${urlp}?sortBy=${sortBy}&order=${order}`;

//   console.log("Fetching from URL:", urlWithParams); // Debugging log

//   // Use React Query to fetch data
//   const query = useQuery({
//     queryKey: ["products", sortBy, order], // Include sort params in query key
//     queryFn: async () => {
//       const res = await fetch(urlWithParams);
//       if (!res.ok) throw new Error("Network response was not ok");
//       const data = await res.json();
//       console.log("Fetched data:", data); // Debugging log
//       return data;
//     },
//     // Optionally, add staleTime or other options here
//   });

//   return query;
// };

export const useProducts = () => {
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

export const useProductsByCategoryId = (categoryId) => {
  const query = useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      if (!categoryId) throw new Error("Category ID is required");
      const response = await axios.get(`${urlp}?categoryId=${categoryId}`);
      return response.data;
    },
  });
  return query;
};

export const useCreateNewProduct = () => {
  const navigate = useNavigate();
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
      navigate("/test");
      queryClint.invalidateQueries({ queryKey: ["products"] });
    },
    mutationKey: ["added"],
  });
  return updateProduct;
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const deleteProduct = useMutation({
    mutationFn: (id) => axios.delete(`${urlp}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries('products'); // Invalidate the products query
    },
  });

  return deleteProduct;
};

export const useEditProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axios.get(`${urlp}/${id}`);
      return data;
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedProduct) => {
      const { id, ...data } = updatedProduct;
      return await axios.put(`${urlp}/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};