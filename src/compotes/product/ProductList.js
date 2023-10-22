import React, { useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import ProductSort from "./ProductSort";

const ProductList = () => {
  // Định nghĩa một biến trạng thái gọi là products để lưu trữ dữ liệu sản phẩm
  const [products, setProducts] = useState([]);
  // Định nghĩa một biến trạng thái gọi là sort để lưu trữ thứ tự sắp xếp
  const [sort, setSort] = useState("desc");
  // Định nghĩa một useEffect hook để lấy dữ liệu sản phẩm từ một API
  useEffect(() => {
    // Định nghĩa một hàm async để lấy dữ liệu
    const fetchData = async () => {
      // Sử dụng try/catch để xử lý lỗi
      try {
        // Sử dụng fetch để tạo một yêu cầu GET đến API endpoint
        const response = await fetch(
          `https://semester3shoprunner.azurewebsites.net/api/Product/Sorting?sortBy=${sort}`
        );
        // Kiểm tra nếu response là ok
        if (response.ok) {
          // Chuyển response sang định dạng JSON
          const data = await response.json();
          // Cập nhật trạng thái products với data
          setProducts(data);
        } else {
          // Ném ra một lỗi nếu response không ok
          throw new Error("Something went wrong");
        }
      } catch (error) {
        // Ghi lỗi ra console
        console.error(error);
      }
    };
    // Gọi hàm lấy dữ liệu
    fetchData();
  }, []);

  const handleSortChange = (e) => {
    // Lấy giá trị của phần tử select
    const value = e.target.value;
    setSort(value);
  };
  const sortProductsByPrice = (products, sort) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sort === "desc") {
        return b.price - a.price;
      }
      if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "nameDesc") {
        // Compare by name in descending order
        return b.name.localeCompare(a.name);
      } else {
        // No sorting
        return 0;
      }
    });

    return sortedProducts;
  };
  const sortedProducts = sortProductsByPrice(products, sort);
  return (
    <div>
      {/* <SortSelect
        sort={sort}
        handleSortChange={handleSortChange}
        setSort={setSort}
      /> */}
      <div>
        {sortedProducts.map((product) => (
          <ProductSort key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Xuất component ProductList làm mặc định
export default ProductList;
