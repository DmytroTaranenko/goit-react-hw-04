import axios from "axios";

const ACCESS_KEY = "TxBGe9u1QyYlgPAN8EGMx6CaM2o54x3o43nkKQ7oEco";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export const requestAllImages = async () => {
  const { data } = await unsplashApi.get("/photos", {
    params: {
      per_page: 20,
    },
  });
  return data;
};

export const requestPhotosBySearchValue = async (searchValue, page) => {
  const { data } = await unsplashApi.get("/search/photos", {
    params: {
      query: searchValue,
      per_page: 20,
      page: page,
    },
  });
  return {
    results: data.results,
    totalPages: data.total_pages,
  };
};
