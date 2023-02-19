import Data from "../data.json";

export function updateLocalBoards(boardList: Board[]) {
  localStorage.setItem("boards", JSON.stringify(boardList));
}
export function getLocalBoards(): Board[] {
  return JSON.parse(localStorage.getItem("boards") ?? "[]");
}
