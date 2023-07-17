import {
  Header,
  Headerlogo,
  Logo,
  LogoText,
  LogoAcademy,
  HeaderItemsRight,
  HeaderItem,
  HeaderItemText,
  LogoPowercode,
} from "./Header.styled";
import icon from "../images/symbol.svg";
import Shape from "../images/shape.png";
import Powercode from "../images/POWERCODE.png";
import Academy from "../images/ACADEMY.png";

const Navbar = () => {
  return (
    <Header>
      <Headerlogo>
        <div>
          <Logo src={Shape} alt="Logo" />
        </div>
        <LogoText>
          <LogoPowercode src={Powercode} alt="Logo" />
          <LogoAcademy src={Academy} alt="Logo" />
        </LogoText>
      </Headerlogo>
      <HeaderItemsRight>
        <HeaderItem>
          <svg width="12" height="14">
            <use href={icon + "#icon3"}></use>
          </svg>
          <HeaderItemText>28 декабря</HeaderItemText>
        </HeaderItem>
        <HeaderItem>
          <svg width="12" height="14">
            <use href={icon + "#icon1"}></use>
          </svg>
          <HeaderItemText>3,5 часа</HeaderItemText>
        </HeaderItem>
      </HeaderItemsRight>
    </Header>
  );
};

export default Navbar;
