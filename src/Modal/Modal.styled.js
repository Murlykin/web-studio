import styled from '@emotion/styled';

export const ModalBlockH3 = styled.h3`
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: var(--text-color);
   `;

export const ModalBlockText = styled.div`
    padding: 50px 60px 0 61px;
    margin-bottom: 20px;
`;

export const ModalBlockH3Color = styled.span`
        font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: var(--title-color);
`;

export const ModalContainer = styled.div`
    width: 366px;
    height: 474px;
    background: #303a53;
    border-radius: 10px;
    margin-top: -900px;
@media screen and (min-width: 1200px) {
        margin-top: 0px;
    }
`;
export const ModalContainerButton = styled.button`
    width: 248px;
    height: 51px;
    border: none;
    background: #0048FF;
    border-radius: 5px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    color: var(--text-color);
    margin-bottom: 20px;
    transition: box-shadow 400ms ease-in, color 400ms ease-in, background-color 400ms ease-in;


    &:focus {
            background: #490410;
        }
    
        &:active {
            background: #036c40;
        }        
`;

export const ModalFormInput = styled.input`
    width: 286px;
    height: 46px;
    border: none;
    background: #272d3d;
    border-radius: 4.48087px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #D7D7D7;
    &:focus {
background: #070b1c;}

`;

export const ModalForm = styled.form`
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
     outline: none;
`; 
export const ModalFormText = styled.p`

    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 149%;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
 text-decoration: none;
`;

export const ModalFormDecoration = styled.span`
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 149%;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
       outline: none;
       text-decoration: none;
`; 

