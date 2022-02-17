import { colors, fonts, screens, transitions } from "./variables";

export const HoveredBlueBtnStyle = `
background: ${colors.greenButtonHover};
box-shadow: 0px 10px 30px rgba(0, 176, 87, 0.4);
`;

export const HoveredBlackBtnStyle = `
background: ${colors.black};
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
`;

export const PrimaryBtnStyle = `
 background: #3B71FE;
 color: white;
font-family: ${fonts.dmSans};
font-size: 1.4rem;
font-weight: 700;
transition: ${transitions.buttonBgHover};

 &:hover,
 &:focus {
    background: #2965E5;
 }
 
`;

export const SecondaryBtnStyle = `
 background: white;
 border: 1.6px solid rgba(173, 173, 173, 1); 
 color: black;

 &:hover,
 &:focus {
   background:#F1F6FF;
   border-color: #F1F6FF;
   box-shadow: none;
   color: #3371F5;
 }
`;

export const ProfileSectionTitleStyle = `
font-size: 2.4rem;
font-weight: 600;
margin: 0 auto;
position: relative;
right: 13px;


@media ${screens.lg} {
  font-family: ${fonts.gilroy};
  font-size: 3rem;
  font-weight: 700;
  margin: initial;
  position: static;
}
`;

export const circledIconStyle = `align-items: center;
border: 2px solid #E6E8EC;
border-radius: 50%;
color:#777E90;
display: flex;
height: 32px;
justify-content: center;
width: 32px;`;

