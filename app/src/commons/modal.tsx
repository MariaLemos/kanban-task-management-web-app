import styled from "styled-components";

export const Modal: React.FC<{
  children: JSX.Element;
  onClose: () => void;
}> = ({ children, onClose }) => {
  return (
    <OpacityShadow onClick={onClose}>
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
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.default.bg};
  position: absolute;
  z-index: 2;
  top: 6rem;
  left: calc(50% - 260px / 2);
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
`;
