import React from "react";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

function Home({ data }) {
  return (
    <>
      <section class=" grid grid-cols-12 gap-8 mt-16">
        <div class="col-span-3 ml-16 ">
          <h2 class="font-semibold text-xl mb-4 text-[24px] mt-6 ">
            Danh Mục Sản Phẩm
          </h2>
          <ul class="*:text-[16px]">
            <li class="mb-4">
              <a href="" class=" font-medium mb-6">
                Điện Thoại
              </a>
            </li>
            <li class="mb-4">
              <a href="" class="text-[#5d4949] font-medium mb-6">
                Kem da
              </a>
            </li>
            <li class="mb-4">
              <a href="" class="text-[#737373] font-medium mb-4">
                Nước Hoa
              </a>
            </li>
            <li class="mb-4">
              <a href="" class="text-[#737373] font-medium mb-4">
                Đèn
              </a>
            </li>
            <li class="mb-4">
              <a href="" class="text-[#737373] font-medium mb-6">
                Cabinet
              </a>
            </li>
            <li class="mb-4">
              <a href="" class="text-[#737373] font-medium mb-6">
                Dầu Thơm
              </a>
            </li>
          </ul>
        </div>

        <div class="col-span-9 grid grid-cols-3 ">
          {data.map((product) => (
            <div class="grid grid-cols-1 gap-4 m-2 ">
              <div class="" key={product.id}>
                <Link to={`/product-detail/${product.id} `}>
                  <img src={product.thumbnail} alt="" class="w-full h-60  " />
                </Link>
                <div class="bg-[#f5f5f5] p-4 text-center w-full h-full ">
                  <p class="text-[32px]">{product.brand}</p>
                  <p>{product.title}</p>
                  <p class="text-red-600 font-semibold text-xl mb-3">
                    Giá: ${product.price}
                  </p>
                  <button className="btn btn-danger w-full">Mua Ngay</button>
                  <Link to={`/product-detail/${product.id} `}>
                    <button className="btn btn-primary w-full mt-4 ">
                      Xem Chi Tiết
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
