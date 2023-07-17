import Navbar from "./Header/index";
import Footer from "./Footer/index";
import Prodgect from "./Prodgect/index";
import Container from "./Base/Container.styled";
import LightLeft from "./Base/DecorLeft.styled";
import LightRight from "./Base/DecorRight.styled";
import Icons from "./RightIcons/Icons";
import Modal from "./Modal/Modal";
import RightBlock from "./Base/RightBlock.styled";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Prodgect />
        <LightLeft />
        <LightRight />
        <RightBlock>
          <Modal />
          <Icons />
        </RightBlock>
      </Container>
      
      <Footer />
    </div>
  );
};

export default App;
