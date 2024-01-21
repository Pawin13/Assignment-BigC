import styled, { css } from "styled-components";

const ContainerDisplay = styled.div`
  align-items: center;
  margin: 30px 15px 0 15px;
  /* Import Google font - Poppins */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .container {
    display: inline-grid; /* or grid based on your need */
    grid-auto-rows: 1fr; /* equal height row */
    overflow: auto;
    background: #f3f9ee;
    border-radius: 8px;
    padding: 13px;
    box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.05);
  }

  .container .content {
    padding: 0.5rem 1rem;
    display: grid;
  }

  .title {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    color: #81c500;
  }
  .btn-layout {
    display: inline-flex;
    justify-content: space-between;
  }

  .card-lists {
    display: flex;
    flex-wrap: wrap;
  }

  .card-item {
    display: flex;
    width: 100%;
    padding: 0px;
    min-height: 160px;
  }
`;

const BtnAnswer = styled.div`
  .button-75 {
    align-items: center;
    background-image: linear-gradient(135deg, rgb(147, 214, 0) 40%, #1c7b00);
    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold", sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 42px;
    justify-content: center;
    letter-spacing: 0.4px;
    line-height: 1;
    max-width: 100%;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 3px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-75:active {
    outline: 0;
  }

  .button-75:hover {
    outline: 0;
  }

  .button-75 span {
    transition: all 200ms;
  }

  .button-75:hover span {
    transform: scale(0.9);
    opacity: 0.75;
  }

  @media screen and (max-width: 991px) {
    .button-75 {
      font-size: 15px;
      height: 50px;
    }

    .button-75 span {
      line-height: 50px;
    }
  }
`;

const InputBox = styled.div`
  .form-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form-input {
    font-family: "Roboto", sans-serif;
    color: #333;
    font-size: 1.2rem;
    margin: 0px 20px 0 0;
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    /* width: 30%; */
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }

  .form-input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;

const cardItems = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@500;600&display=swap");

  @mixin mQ($px) {
    @media screen and (min-width: $px) {
      @content;
    }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    font-family: "Noto Sans", sans-serif;
  }

  .icon {
    display: flex;
    align-items: flex-start;

    svg {
      width: 2.188rem;
      margin-left: -0.188em;
    }
  }

  h1 {
    font-size: 2.35rem;
    text-transform: capitalize;
    padding-bottom: 2rem;
    text-align: center;

    @include mQ(42.5rem) {
      font-size: 3rem;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125" fill="%23FFBB7B"><path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path></svg>');
      background-size: 17.5rem;
      background-repeat: no-repeat;
      background-position: 98% 3.375rem;
      padding-bottom: 3rem;
    }
  }

  section {
    display: grid;
    place-content: center;
    place-items: center;
    min-height: 100vh;
    min-height: 100dvh;
    padding: 4rem clamp(1rem, 5%, 3rem);

    > span {
      display: inline-block;
      margin-bottom: 0.938em;
      text-transform: uppercase;
      letter-spacing: 0.12rem;
      font-size: 0.8rem;
      background: #ffbb7b;
      color: #5c0404;
      font-weight: bold;
      padding: 10px 30px;
      border-radius: 50px;
    }
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
      margin: 0;
      padding: 0;
      list-style: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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
      bottom: 3.75rem;
      right: 1.25rem;
      width: 100%;
      height: 90%;
      border-radius: 0.625rem;
      padding: 1.875rem 2.188rem;
      display: flex;
      flex-direction: column;

      .title {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1rem;
        display: inline-block;
        margin-top: 0.313em;
        margin-bottom: 0.938em;
      }

      .price {
        position: relative;
        display: inline-flex;
        align-items: flex-start;

        &--number {
          font-size: 3rem;
          font-weight: 600;

          &:after {
            position: absolute;
            content: "";
            left: 0;
            bottom: -1.563rem;
            display: block;
            color: red;
            background: #f5f5f5;
            height: 0.125rem;
            width: 100%;
          }
        }

        &--dolar {
          font-size: 1.1rem;
          margin-top: 0.625em;
          font-weight: 500;
        }
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
`;

export default {
  BtnAnswer,
  ContainerDisplay,
  InputBox,
  cardItems,
};
