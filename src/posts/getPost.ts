import axios from 'axios';

export const getPost = async (id: string): Promise<Post> => {
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.data;
};
