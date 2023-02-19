import styled from "styled-components";

export const Modal: React.FC<{
  children: JSX.Element;
  closeModal: () => void;
}> = ({ children, closeModal }) => {
  return (
    <OpacityShadow onClick={closeModal}>
      <StyledModal onClick={(event) => event.stopPropagation()}>
        {children}
      </StyledModal>
    </OpacityShadow>
  );
};
const OpacityShadow = styled.div`
  display: table;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.default.bg};
  color: ${({ theme }) => theme.default.fontColor};
  top: 6rem;

  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  width: 260px;
`;
