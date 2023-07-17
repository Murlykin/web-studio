import {
  LeftBlock,
  LeftBlockButton,
  LeftBlockTitle,
  Text,
  LeftBlockB,
  LeftBlockLabel,
  LeftBlockLabell,
  LeftBlockText,
  LeftContText,
    LeftBlockWage,
    LeftBlockMedia,
    LeftBlockSpeaker,
    LeftBlockTextH4,
    LeftBlockTextH4Color,
    LeftBlockSpeakerText,
    LeftBlockBonus,
    LeftBlockTextH41,
  LeftBlockText1 ,
} from "./Prodgect.styled";
import icon from "../images/symbol.svg";
import speaker from "../images/speaker.png";
import bonus from "../images/bonus.png";


const Prodgect = () => {
  return (
    <LeftBlock>
      <Text>
        <LeftBlockButton>
          <svg width="12" height="14">
            <use href={icon + "#icon2"}></use>
          </svg>
          <p>Вебинар</p>
        </LeftBlockButton>

        <LeftBlockTitle>Front-end</LeftBlockTitle>

        <LeftBlockB>
          <LeftBlockLabel>
            <LeftBlockLabell>c нуля</LeftBlockLabell>
          </LeftBlockLabel>
          <div>
            <LeftBlockText>легкий старт в IT профессии</LeftBlockText>
          </div>
        </LeftBlockB>
        <LeftContText>
          <Text>
            Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году
            и как начать карьеру в востебованной профессии с зраплатой &nbsp;
             <LeftBlockWage>от 1 000$ &nbsp; </LeftBlockWage>
         </Text>
        </LeftContText>
      </Text>

      <LeftBlockMedia>
        <LeftBlockSpeaker>
          <img
            src={speaker}
            alt="Photo Kirill Kasatonov "
            width="46.38"
            height="43.63"
          />
          <div>
            <LeftBlockTextH4>
              Киирилл <LeftBlockTextH4Color>Касатонов</LeftBlockTextH4Color>
            </LeftBlockTextH4>
            <LeftBlockSpeakerText>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </LeftBlockSpeakerText>
          </div>
        </LeftBlockSpeaker>
        <LeftBlockBonus>
          <img src={bonus} alt="Photo Gift" />
          <div>
            <LeftBlockTextH41>Бонус за резистрацию</LeftBlockTextH41>
            <LeftBlockText1 >
              PDF-файл "5 преимуществ профессии фронтенд разработчика"
            </LeftBlockText1 >
          </div>
        </LeftBlockBonus>
      </LeftBlockMedia>
    </LeftBlock>
  );
};

export default Prodgect;
