import styled, { css } from "styled-components";

const ContainerUpload = styled.div`
  align-items: center;
  margin: 30px 15px 0 15px;
  /* Import Google font - Poppins */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  * {
    font-family: "Poppins", sans-serif;
  }
  .container {
    display: inline-flex; /* or grid based on your need */
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
    font-size: 16px;
    font-weight: 700;
    height: 54px;
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
    margin-top: 20px;
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

export default {
  BtnAnswer,
  ContainerUpload,
};
