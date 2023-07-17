import {
  Icones,
  IconesPosition,
  IconesPositionRight,
  IconesPositionLeft,
  IconesPositionRightBottom,
  PositionRightBottom,
} from "./Icons.styled";
import ellipse178 from "../images/ellipse178.png";
import logo_and_wordmark from "../images/1452px-CSS3_logo_and_wordmark.png";
import ellipse185 from "../images//ellipse185.png";
import sublime_text from "../images/1505369583_sublime-text.png";
import ellipse184 from "../images//ellipse184.png";
import HTML5_logo_and_wordmark from "../images/1024px-HTML5_logo_and_wordmark.png";
import ellipse183 from "../images//ellipse183.png";
import javascript from "../images/javascript.png";
import ellipse186 from "../images//ellipse186.png";
import Visual_Studio_Code from "../images/Visual_Studio_Code_1.35_icon.png";

const Icons = () => {
  return (
    <Icones>
      <IconesPosition>
        <IconesPositionLeft>
          <div>
            <img src={ellipse178} alt="css_dot" />
          </div>
          <div>
            <img
              src={logo_and_wordmark}
              alt="css"
              width="60.4"
              height="85.45"
            />
          </div>
        </IconesPositionLeft>

        <IconesPositionLeft>
          <div>
            <img src={ellipse185} alt="sublime_dot" />
          </div>
          <div>
            <img
              src={sublime_text}
              alt="sublime"
              width="53.93"
              height="53.93"
            />
          </div>
        </IconesPositionLeft>
      </IconesPosition>

      <IconesPositionRight>
        <PositionRightBottom>
          <div>
            <img src={ellipse184} alt="html5_dot" />
          </div>
          <div>
            <img
              src={HTML5_logo_and_wordmark}
              alt="html5"
              width="88.28"
              height="88.28"
            />
          </div>
        </PositionRightBottom>

        <PositionRightBottom>
          <div>
            <img src={ellipse183} />
          </div>
          <div>
            <img src={javascript} alt="js" width="61.89" height="72.94" />
          </div>
        </PositionRightBottom>

        <IconesPositionRightBottom>
          <div>
            <img src={ellipse186} alt="vsc" />
          </div>
          <div>
            <img
              src={Visual_Studio_Code}
              alt="vsc"
              width="60.62"
              height="60.62"
            />
          </div>
        </IconesPositionRightBottom>
      </IconesPositionRight>
    </Icones>
  );
};

export default Icons;
