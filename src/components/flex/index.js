import React from 'react';
import { Container } from './styles/flex';

const Flex = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <Container ref={ref} {...rest}>
      {children}
    </Container>
  );
});

export default Flex;