import { keyframes } from "styled-components";

export const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const slideInBottomToTop = keyframes`
from {
    transform: translateY(200%)
}
    to {
        transform: translateY(0)
    }
`;

export const slideInTopToBottom = keyframes`
    from {
        transform: translateY(-200%)
    }

    to {
        transform: translateY(0)
    }
`;
