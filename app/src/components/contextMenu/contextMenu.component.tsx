import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Ellipses } from "../../assets/icon-vertical-ellipsis.svg";
import { useModal } from "../../commons/modal/modal.Provider";
import { DeleteModalComponent } from "./deleteModal.component";

export const ContextMenuComponent: React.FC<{
  contextName: "board" | "task";
  editAction: () => void;
  deleteAction: () => void;
  selectedItemName: string;
}> = ({ contextName, editAction, deleteAction, selectedItemName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <ContextMenu>
      <ButtonToggleVisibility
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Ellipses />
      </ButtonToggleVisibility>
      {isOpen && (
        <Menu>
          <MenuOption
            onClick={() => {
              setIsOpen(!isOpen);
              editAction();
            }}
          >
            Edit {contextName}
          </MenuOption>
          <DeleteOption
            onClick={() => {
              setIsOpen(!isOpen);
              openModal(
                {},
                <DeleteModalComponent
                  contextName={contextName}
                  deleteAction={deleteAction}
                  name={selectedItemName}
                />
              );
            }}
          >
            Delete {contextName}
          </DeleteOption>
        </Menu>
      )}
    </ContextMenu>
  );
};

const ContextMenu = styled.div`
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
  box-shadow: 0 0 0 100vh rgba(0, 0, 0, 0.5);
`;
const MenuOption = styled.li`
  padding: 1rem;
`;
const DeleteOption = styled(MenuOption)`
  color: ${({ theme }) => theme.red};
`;
