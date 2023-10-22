const url = {
  BASE_URL: "https://semester3shoprunner.azurewebsites.net/api",
  CATEGORY: {
    LIST: "/category",
    CRETE: "/category",
    DETAIL: "/category/get-by-id",
  },
  PRODUCT: {
    LIST: "/product",
    SORT_LIST: "/product/Sorting?sortBy=",
    DETAIL: "/Product/get-by-id",
    RELATED: "/product/related",
  },
};
export default url;
