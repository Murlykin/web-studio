import styled from '@emotion/styled';

export const Header = styled.div`

  display: flex;
  margin: 30px 0px 36px 28px;
  width: 350px;
  height: 104px;
 padding: 24px 0 24px;
  position: relative;
  z-index: +1;
 @media screen and (min-width: 1200px) {
 
     width: 1040px;
     height: 104px;
     margin: 10px 200px 116px 120px;
  }

`;
export const Headerlogo = styled.div`

   display: flex;
   align-items: center;
`;
export const Logo = styled.img`
width: 27.68px;
height: 32px;
 @media screen and (min-width: 1200px) {
     margin-left: 50px;
     width: 49.87px;
     height: 56px;
   }

`;
export const LogoAcademy = styled.img`

 width: 65.55px;
  height: 7px;
 @media screen and (min-width: 1200px) {
     width: 118.13px;
     height: 15.75px;
   }
`;

export const LogoText = styled.p`

  display: flex;
  margin-left: 10px;
  flex-direction: column;
  gap: 7px;
`; 

export const LogoPowercode = styled.img`

  width: 65.55px;
   height: 7px;
 @media screen and (min-width: 1200px) {

     width: 118.13px;
     height: 12.25px;

 }`;

export const HeaderItemsRight = styled.ul`
  display: flex;
 margin-left: 35px;
 gap: 6px;
 align-items: center;
 @media screen and (min-width: 1200px) {
 
     margin-left: 460px;
     gap: 18px;
   }
`;
export const HeaderItem = styled.li`

display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  background: #302e5a;
  border-radius: 10px;
  width: 88px;
  height: 24px;


 @media screen and (min-width: 1200px) {

     width: 141px;
     height: 40px;
   }
 `;

export const HeaderItemText = styled.p`

   font-family: "Gilroy";
   font-style: normal;
   font-weight: 600;
   font-size: 11px;
   line-height: 8px;
   color: #FFFFFF;
`
