import instance from "./instance";

export const fetchProducts = async () => {
  const response = await instance.get("/products");
  return response.data;
};
