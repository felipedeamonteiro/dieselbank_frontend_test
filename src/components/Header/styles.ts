import styled from 'styled-components';

export const Container = styled.header`
  top: 0;
  height: 60px;
  background: #121212;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-div {
    width: 400px;

    .localization-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: #fff;
      }

      button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
      }
    }

    .search-input {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 100%;
        background: none;
        border: none;
        color: #fff;
      }
    }
  }
`;
