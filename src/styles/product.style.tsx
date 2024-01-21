import styled from "styled-components";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";

const ContainerDisplay = styled.div`
  margin: 30px;

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  body {
    background-color: #f2f2f2;
  }
  .container {
    background-color: #f2f2f2;
    width: 100%;
    max-width: 1200px; /* Adjust the max-width based on your design needs */
    margin: 0 auto; /* Center the container horizontally */

    /* Add additional styles as needed */
  }

  /* Example of making the container responsive for smaller screens */
  @media (max-width: 768px) {
    .container {
      max-width: 100%; /* Set the max-width to 100% for screens up to 768px */
    }
  }
`;

const ContainerCard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Default to one column */
    gap: 20px; /* Adjust the gap between cards as needed */

    @media (min-width: 768px) {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* Two columns for screens 768px and above */
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card {
    /* height: 100px;  */
    /* border: 1px solid #ddd; */

    position: relative;
    display: block;
    padding: 8px;
    border-radius: 10px;
    background-color: rgb(147, 214, 0);
    transition: box-shadow 0.4s;
    -webkit-text-size-adjust: 100%;
  }

  .productCard-img-wrappe {
    position: relative;
  }
  .productCard-img {
    max-height: 168px;
    height: 16.6666666667vw;
    display: flex;
    justify-content: center;
  }
  .productCard_car {
    position: absolute;
    right: 0;
    bottom: 4px;
    width: 100%;
  }

  .cards {
    margin-top: 3em;
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    width: 17.5rem;
    cursor: pointer;

    ul {
      margin: 0.5rem 0 0 0;
      padding: 0;
      list-style: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: #595959;
    }

    &__outer {
      background: #ebecee;
      position: relative;
      height: 23.438rem;
      border-radius: 0.625rem;
      display: flex;
      align-items: flex-end;
      padding: 1.25rem;
      transition: 0.3s ease-in-out;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: bold;

        svg {
          margin-left: 0.375em;
          width: 1.125rem;
        }
      }
    }

    &__inner {
      background: #fff;
      position: absolute;
      bottom: -1.25rem;
      width: 78%;
      height: 70%;
      border-radius: 0.625rem;
      padding: 1.875rem 2.188rem;
      display: flex;
      flex-direction: column;
      box-shadow: 27px 16px 25px rgba(0, 0, 0, 0.05);

      .title {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1rem;
        display: inline-block;
        margin-top: 0.313em;
        margin-bottom: 0.938em;
      }
    }
  }
  .card.active .card__outer a {
    color: #fff;
  }

  .card {
    &:nth-child(1).active {
      .card__inner svg {
        color: rgb(147, 214, 0);
      }
      .card__outer {
        background: rgb(147, 214, 0);
        /* box-shadow: 5px 18px 13px hsl(79, 100%, 39%); */
      }
    }
  }
  .grid-container-ss {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
    gap: 20px; /* Adjust the gap between cards as needed */
  }
  .title-product {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 102%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-product-text {
    color: #fff;
    font-family: "Codec cold", sans-serif;
    font-size: 20px;
    font-weight: 500;
  }
  .id-product-text {
    color: #fff;
    font-family: "Codec cold", sans-serif;
    font-size: 14px;
  }
  .price-item {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    padding-right: 14px;
    margin-top: -7px;
    font-size: 1.8rem;
    font-weight: 700;
    color: #db000e;
    float: left;
  }
  .addtocart {
    cursor: pointer;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: rgb(147, 214, 0);
    transition: background-color 0.4s;
  }
`;
const ShopCart = styled(ShoppingCart)`
  color: black !important;
  height: 25px;
  width: 25px;
`;

export default {
  ContainerCard,
  ContainerDisplay,
  ShopCart,
};
