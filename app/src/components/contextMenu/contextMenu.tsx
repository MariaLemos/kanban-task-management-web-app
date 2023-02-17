import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Ellipses } from "../../assets/icon-vertical-ellipsis.svg";

export const ContextMenu: React.FC<{
  contextName: "board" | "task";
  editAction: () => void;
  deleteAction: () => void;
}> = ({ contextName, editAction, deleteAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMenuSecondary>
      <ButtonToggleVisibility
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Ellipses />
      </ButtonToggleVisibility>
      {isOpen && (
        <Menu>
          <MenuOption onClick={editAction}>Edit {contextName}</MenuOption>
          <DeleteOption onClick={deleteAction}>
            Delete {contextName}
          </DeleteOption>
        </Menu>
      )}
    </StyledMenuSecondary>
  );
};

const StyledMenuSecondary = styled.div`
  position: relative;
  display: flex;
  justify-content: right;
`;
const ButtonToggleVisibility = styled.button`
  background-color: transparent;
  border: none;
`;
const Menu = styled.ul`
  background-color: ${({ theme }) => theme.default.bg};
  width: 10rem;
  position: absolute;
  list-style: none;
  right: 0rem;
  top: 3rem;
`;
const MenuOption = styled.li`
  padding: 1rem;
`;
const DeleteOption = styled(MenuOption)`
  color: ${({ theme }) => theme.red};
`;
