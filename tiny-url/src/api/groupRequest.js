import axios from "axios";

export const getGroupUrls = async () => {
  const { data = [] } = await axios.get("/api/groups");

  const newData = data?.map((group) => {
    const newUrls = group.urls?.map((url) => {
      return {
        ...url,
        favicons: `https://www.google.com/s2/favicons?sz=32&domain_url=${url.fullUrl}`,
      };
    });
    return { ...group, urls: newUrls };
  });

  return newData;
};

export const addNewGroup = async (values) => {
  const { data } = await axios.post("/api/groups", { ...values });
  return data;
};

export const deleteGroupById = async (id) => {
  const { data } = await axios.delete(`/api/groups/${id}`);
  return data;
};
