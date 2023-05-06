import styled from "styled-components";
const Div = styled.div`
   display: ${(props) => (props.flag ? "grid" : "none")};
   grid-template-columns: repeat(4, 1fr);
   justify-content: center;
   align-items: center;
   gap: 20px;
   width: 80%;
   border: 2px solid rgba(170, 165, 165, 0.29);
   padding: 1rem;
`;

export { Div };
