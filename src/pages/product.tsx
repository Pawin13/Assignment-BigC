import React from "react";
import Style from "@/styles/product.style";
import { IProduct } from "@/interfaces/profile";
import jsonData from "@/public/json/productList.json" assert { type: "json" };

const ProductList: React.FC<IProduct[]> = () => {
  const formatPrice = (price: number, unit: string) => {
    return unit ? `$ ${price}.00` : `$ ${price}.00`;
  };

  return (
    <Style.ContainerDisplay>
      {/* <h1>อาหารสดและเบเกอรี่</h1> */}
      <Style.ContainerCard>
        <div className="grid-container">
          {jsonData &&
            jsonData.map((item, i) => {
              return (
                <div key={i} className="cards card-ss">
                  <div className="card card--red active">
                    <div className="card__outer">
                      <div className="title-product">
                        <span className="title-product-text">{item.name}</span>
                        <span className="id-product-text">ID:{item.id}</span>
                      </div>
                      <div className="card__inner">
                        <div className="productCard-img-wrappe ">
                          <div className="addtocart">
                            <Style.ShopCart width={20} height={20} />
                          </div>
                          <img
                            src={item.thumb}
                            alt={item.name}
                            width={200}
                            height={200}
                          />
                        </div>
                        <ul>
                          <li key={i}>
                            <span className="price-item">{`$ ${item.price}.00`}</span>
                            {item?.unit && `/ ${item.unit}`}
                          </li>
                          <li>{item.desc}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Style.ContainerCard>
    </Style.ContainerDisplay>
  );
};

export default ProductList;
