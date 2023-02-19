import { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "./modal";
type ModalProps = {
  onCloseModal?: () => void;
};
type ModalContextType = {
  openModal: (props: ModalProps, children: JSX.Element) => null;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  closeModal: () => {},
  openModal: () => null,
});
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const [modalProps, setModalProps] = useState<ModalProps>();

  const openModal = (props: ModalProps, children: JSX.Element) => {
    setModalContent(children);
    setModalProps(props);
    return null;
  };
  const closeModal = () => {
    if (modalProps?.onCloseModal) {
      modalProps?.onCloseModal();
    }
    setModalProps({});
    setModalContent(undefined);
  };
  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      {modalContent && <Modal closeModal={closeModal}>{modalContent}</Modal>}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  return useContext(ModalContext);
};
