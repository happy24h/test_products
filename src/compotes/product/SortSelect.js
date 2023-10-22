const SortSelect = ({ sort, setSort }) => {
  //   const [sort, setSort] = useState(""); // Khởi tạo giá trị ban đầu cho sort

  const handleSort = (event) => {
    const selectedValue = event.target.value;
    setSort(selectedValue); // Cập nhật giá trị sort khi có sự thay đổi
    console.log("check value sort--->", selectedValue);
  };

  //   useEffect(() => {
  //     // Định nghĩa một hàm async để lấy dữ liệu
  //     const fetchData = async () => {
  //       // Sử dụng try/catch để xử lý lỗi
  //       try {
  //         // Sử dụng fetch để tạo một yêu cầu GET đến API endpoint
  //         const response = await fetch(
  //           `https://semester3shoprunner.azurewebsites.net/api/Product/Sorting?sortBy=${sort}`
  //         );
  //         // Kiểm tra nếu response là ok
  //         if (response.ok) {
  //           // Chuyển response sang định dạng JSON
  //           const data = await response.json();
  //           // Cập nhật trạng thái products với data
  //           setProducts(data);
  //         } else {
  //           // Ném ra một lỗi nếu response không ok
  //           throw new Error("Something went wrong");
  //         }
  //       } catch (error) {
  //         // Ghi lỗi ra console
  //         console.error(error);
  //       }
  //     };
  //     // Gọi hàm lấy dữ liệu
  //     fetchData();
  //   }, []);

  return (
    <select
      id="sort"
      value={sort}
      onChange={handleSort}
      className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7 bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto ">
      <option selected>Sort By</option>
      <option value="NAME_DESC">Tên Z-A</option>
      <option value="desc">High to low</option>
      <option value="asc">Low to high</option>
    </select>
  );
};

export default SortSelect;
