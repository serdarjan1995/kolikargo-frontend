import styled from "styled-components/macro";

export const Container = styled.div`
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`}
  align-items: ${({ align }) => align || "flex-start"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "initial"};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width || "auto"};

`;
