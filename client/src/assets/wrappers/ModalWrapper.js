import styled from "styled-components";

const ModalWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #24232350;
  top: 0;
  left: 0;
  z-index: 99;

    .modal-container {
        position: relative;
        width: 100%;
        height: 80%;
        max-width: 800px;
        background: #FFF;
        text-align: left;
        border-radius: 10px;
        padding: 30px;
    }

    .modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 25px;
        height: 25px;
        font-size: 31px;
        background: #FFF;
        border-radius: 50%;
        top: -10px;
        right: -10px;
        cursor: pointer;
    }
`
export default ModalWrapper;