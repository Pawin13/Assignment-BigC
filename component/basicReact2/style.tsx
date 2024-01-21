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
    margin-top: 20px;
    color: #81c500;
  }
`;

export default {
  ContainerDisplay,
};
