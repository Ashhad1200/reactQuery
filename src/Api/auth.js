import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const urla = 'http://localhost:3002/auth';
const urlu = 'http://localhost:3003/users';
const urll = 'http://localhost:3004/login';

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createUser = useMutation({
    mutationFn: async ({ user }) => {
      const response = await axios.post(urlu, user);
      return response.data;
    },
    onSuccess: () => {
      navigate('/login');
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
  return createUser;
};

export const useLogin = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }) => {
      const query = {
        userName: email,
        password,
      };

      // Perform the POST request using axios
      const response = await axios.post(urll, query);

      // Return the token from the response data
      console.log(response.data);
      return response.data;
    },
    onSuccess: () => {
      // Invalidate the 'auth' query and reset others as needed
      qc.invalidateQueries({ queryKey: ['auth'] });
      qc.resetQueries({ predicate: (query) => query.queryKey[0] !== 'auth' });
    },
  });
};

export const useAuthMe = () =>
  useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const response = await axios.get(urla);
      return response.data;
    },
    staleTime: 5 * 1000 * 60,
  });

export const useLogout = () => {
  localStorage.removeItem('loggedInUser');
};

export const useEditUserProfile = (id) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const { data } = await axios.get(`${urlu}/${id}`);
      return data;
    },
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedUser) => {
      const { id, ...data } = updatedUser;
      return await axios.put(`${urlu}/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};
