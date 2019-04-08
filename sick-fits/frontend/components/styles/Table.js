import styled from "styled-components";

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid #e5e5e5;
  thead {
    font-size: 10px;
  }
  td,
  th {
    border-bottom: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    padding: 5px;
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label {
      padding: 10px 5px;
      display: block;
    }
  }

  tr {
    &:hover {
      background: #e5e5e5;
    }
  }
`;

export default Table;
