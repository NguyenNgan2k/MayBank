import styled from "styled-components";

export const Breadcrumb = styled.div`
  display: flex;
  background: #f5f5f5;
  width: 100%;
  border 1px solid #f0eeea;
  border-width: 0 0 1px 0;
  justify-content: space-between;
  padding: 5px 10px;

  div.bread-crumb {
    height: 100%;
    padding-left: 0;
    display: flex;

    a {
      border-left: none;
      display: flex;
      align-items: center;
      border-radius: 8px;
      font-size: 13px;
      color: #6f6f6f;

      &.active {
        color: #007bff;
      }
    }
  }

  div.bread-crumb-report{
    // display: flex;
    font-size: 13px;

    .flex-item{
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: 10px;
        border-style: dashed;
        border-color: rgb(232, 234, 235);
        border-image: initial;
        border-width: 0px 1px 0px 0px;

        img{
            padding-right: 5px;
        }

        &:hover{
            color: #000;
        }
    }
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  background: #ffffff;
  width: 100%;

  div.cash-info {
    background: rgb(247, 247, 247);
    border-radius: 12px;
    box-shadow: none;

    .cash-info-left {
      .cash-item:not(:last-of-type) {
        border-style: dashed;
        border-color: rgb(232, 234, 235);
        border-image: initial;
        border-width: 0px 1px 0px 0px;
      }
    }
    .cash-info-right {
      .cash-item:not(:last-of-type) {
        border-style: dashed;
        border-color: rgb(232, 234, 235);
        border-image: initial;
        border-width: 0px 1px 0px 0px;
      }
    }

    .cash-item {
      text-align: left;
      padding: 0 15px 5px 15px;
      color: #6f6f6f;

      span:last-of-type {
        font-weight: 600;
        font-size: 16px;
        color: rgb(26, 32, 44);
      }

      svg {
        margin-left: 5px;
        font-size: 14px;
        color: #747474;
      }
    }
  }

  div.bg-border {
    width: 100%;
    height: 1px;
    margin: 5px 0 0 0;
    background: #f0eeea;
  }

  .header-text {
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: rgb(26, 32, 44);
    align-items: center;
    padding-top: 5px;

    button {
      height: 25px;
    }
  }
`;

//#region button
const ButtonDef = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 13px;

  &:active,
  :focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background: #ffda79;
  }
`;

export const BtnClose = styled(ButtonDef)`
  background: #fffbeb;
  border: 1px solid #ffa31a;
  min-width: 75px;

  &.active {
    background: #ffa31a;
    color: #fff;
  }
`;

export const BtnPlus = styled(ButtonDef)`
  background: #fffbeb;
  border: 1px solid #ffa31a;
  height: auto;

  &.active {
    background: #ffa31a;
    color: #fff;
  }
`;

export const BtnSubmit = styled(ButtonDef)`
  background: #ffa31a;
  border: 1px solid #ffa31a;
  min-width: 100px;

  &.danger {
    background: #dc3545;
    border-color: #dc3545;
    color: #fff;
  }
  &.success {
    background: #28a745;
    border-color: #28a745;
    color: #fff;
  }
  &.info {
    background: #3448f9;
    border-color: #3448f9;
    color: #fff;
  }
`;


export const BtnFileSample = styled.a`
  background: #28a745;
  border-color: #28a745;
  color: #fff;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 13px;

  &:active,
  :focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background: #ffda79;
  }
`;
//#endregion

export const CreateInfo = styled.div`
  background: #f5f5f5;

  border-top: 1px solid #f9f9f9;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #3790fb;
`;

export const TableContent = styled.div`s
  overflow: hidden;
`;

export const DirectoryList = styled.ul`
  margin-top: 6px;

  ul {
    margin-left: 10px;
    padding-left: 20px;
    border-left: 1px dashed #ddd;
  }

  li {
    list-style: none;
    font-size: 16px;
    font-weight: normal;
    padding: 5px 0;

    &.hasFile {
      border-bottom: 1px dotted #dee2e6;
    }

    .open {
      display: block;
    }

    .close {
      display: none;
    }

    &.show .open {
      display: none;
    }

    &.show .close {
      display: block;
    }
  }

  .folder {
    color: #212529;
    font-weight: bold;

    .d-flex {
      position: relative;
    }

    .hasFolder svg {
      fill: #ffffff;

      path {
        stroke: #4f4e4e;
      }
    }

    ul {
      display: none;
    }

    &.show ul {
      display: block;
      margin-top: 5px;

      .folder ul {
        display: none;
      }

      .folder.show ul {
        display: block;
        margin-top: 5px;
      }
    }
  }

  .folder li {
    padding: 5px 0 5px 5px;

    &.hasFile {
      font-size: 13px;

      .txt-left svg {
        height: 20px;
        fill: #ffffff;

        path {
          stroke: #4f4e4e;
        }
      }
    }
  }
`;

export const HasBottmHr = styled.div`
  height: 0px;
  border-bottom: 1px dotted #dee2e6;
  width: calc(100% - 25px);
  position: absolute;
  bottom: -5px;
  right: 0;
`;
