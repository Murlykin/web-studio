import {
  ModalContainer,
  ModalBlockText,
  ModalBlockH3,
  ModalBlockH3Color,
  ModalForm,
  ModalFormInput,
  ModalContainerButton,
  ModalFormText,
  ModalFormDecoration,
} from "./Modal.styled";

const Modal = () => {
  return (
    <ModalContainer>
      <ModalBlockText>
        <ModalBlockH3>
          Запишитесь <ModalBlockH3Color>бесплатно</ModalBlockH3Color> и получите
          подарок
        </ModalBlockH3>
      </ModalBlockText>
      <ModalForm id="form">
        <ModalForm>
          <ModalFormInput
            id="formName"
            type="text"
            required
            placeholder="Ваше имя и фамилия"
          />
        </ModalForm>
        <ModalForm id="login" onsubmit="process(event)">
          <ModalFormInput
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="Ваш номер телефона"
          />
        </ModalForm>
        <ModalForm>
          <ModalFormInput
            id="formEmail"
            type="text"
            name="email"
            required
            class="form-input _req"
            placeholder="Ваш email"
          />
        </ModalForm>
        <ModalContainerButton type="submit">
          Записаться бесплатно
        </ModalContainerButton>
      </ModalForm>
      <ModalFormText>
        Нажимая на кнопку я согашаюсь
        <br />
        <a href="#"> <ModalFormDecoration>с политикой конфидециальности</ModalFormDecoration></a>
      </ModalFormText>
    </ModalContainer>
  );
};

export default Modal;