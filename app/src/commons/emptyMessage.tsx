import styled from "styled-components";
import { Button } from "./button";

export const EmptyMessage: React.FC<{
  contextName: string;
  createAction: () => void;
  children: string;
}> = ({ contextName, createAction, children }) => {
  return (
    <Message>
      <span> {children}</span>
      <Button size="large" onClick={createAction}>
        <> + Add New {contextName}</>
      </Button>
    </Message>
  );
};
const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
`;
