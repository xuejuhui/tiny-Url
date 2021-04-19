import axios from "axios";

export const getNoGroupUrls = async () => {
  const { data = [] } = await axios.get("/api/urls");
  const newData = data?.map((url) => {
    return {
      ...url,
      favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${url.fullUrl}`,
    };
  });
  return newData;
};

export const addNewUrl = async (values) => {
  const { data } = await axios.post("/api/urls", { ...values });

  const newData = {
    ...data,
    favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${data.fullUrl}`,
  };

  return newData;
};

export const deleteUrlById = async (id) => {
  const { data } = await axios.delete(`/api/urls/${id}`);
  return data;
};

export const patchUrl = async (id, fields) => {
  const { data } = await axios.patch(`/api/urls/${id}`, fields);
  return data;
};

export const incrementUrlCounter = async (id) => {
  const { data } = await axios.patch(`/api/urls/${id}/count`);
  return data;
};
