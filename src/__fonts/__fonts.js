import GilroyRegularWoff1 from "./Gilroy-Regular.woff";
import GilroyRegularWoff2 from "./Gilroy-Regular.woff2";
import GilroySemiboldWoff1 from "./Gilroy-Semibold.woff";
import GilroySemiboldWoff2 from "./Gilroy-Semibold.woff2";
import GilroyBoldWoff1 from "./Gilroy-Bold.woff";
import GilroyBoldWoff2 from "./Gilroy-Bold.woff2";
import GilroyExtraBoldWoff1 from "./Gilroy-Extrabold.woff";
import GilroyExtraBoldWoff2 from "./Gilroy-Extrabold.woff2";

import BaiJamjureeRegularTtf from "./Bai+Jamjuree/BaiJamjuree-Regular.ttf";
import BaiJamjureeSemiBoldTtf from "./Bai+Jamjuree/BaiJamjuree-SemiBold.ttf";
import BaiJamjureeBoldTtf from "./Bai+Jamjuree/BaiJamjuree-Medium.ttf";
import BaiJamjureeExtraBoldTtf from "./Bai+Jamjuree/BaiJamjuree-Bold.ttf";

const GilroyRegular = `
@font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
    url(${GilroyRegularWoff1}) format('woff'),
    url(${GilroyRegularWoff2}) format('woff2');
    font-style:normal;
    font-swap: swap;
    font-weight:400;
}
`;

const GilroySemibold = `
@font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
    url(${GilroySemiboldWoff1}) format('woff'),
    url(${GilroySemiboldWoff2}) format('woff2');
    font-style:normal;
    font-swap: swap;
    font-weight:600;
}
`;

const GilroyBold = `
@font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
    url(${GilroyBoldWoff1}) format('woff'),
    url(${GilroyBoldWoff2}) format('woff2');
    font-style:normal;
    font-swap: swap;
    font-weight:700;
}
`;

const GilroyExtraBold = `
@font-face {
    font-family: 'Gilroy';
    src: local('Gilroy'),
    url(${GilroyExtraBoldWoff1}) format('woff'),
    url(${GilroyExtraBoldWoff2}) format('woff2');
    font-style:normal;
    font-swap: swap;
    font-weight:800;
}
`;

// BaiJamjuree

const BaiJamjureeRegular = `
@font-face {
    font-family: 'BaiJamjuree';
    src: local('BaiJamjuree'),
    url(${BaiJamjureeRegularTtf}) format('ttf'),
    font-style:normal;
    font-swap: swap;
    font-weight:400;
}
`;

const BaiJamjureeSemibold = `
@font-face {
    font-family: 'BaiJamjuree';
    src: local('BaiJamjuree'),
    url(${BaiJamjureeSemiBoldTtf}) format('ttf'),
    font-style:normal;
    font-swap: swap;
    font-weight:600;
}
`;

const BaiJamjureeBold = `
@font-face {
    font-family: 'BaiJamjuree';
    src: local('BaiJamjuree'),
    url(${BaiJamjureeBoldTtf}) format('ttf');
    font-style:normal;
    font-swap: swap;
    font-weight:700;
}
`;

const BaiJamjureeExtraBold = `
@font-face {
    font-family: 'BaiJamjuree';
    src: local('BaiJamjuree'),
    url(${BaiJamjureeExtraBoldTtf}) format('ttf');
    font-style:normal;
    font-swap: swap;
    font-weight:800;
}
`;

const fonts = `
   ${GilroyRegular}
   ${GilroySemibold}
   ${GilroyBold}
   ${GilroyExtraBold}
   ${BaiJamjureeRegular}
   ${BaiJamjureeSemibold}
   ${BaiJamjureeBold}
   ${BaiJamjureeExtraBold}
`;

export default fonts;
