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

export default {
  BtnAnswer,
  ContainerDisplay,
  InputBox,
};
