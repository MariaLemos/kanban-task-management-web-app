type ButtonType = "primary" | "secondary" | "destructive";
type ThemedComponents = "main" | "default";
type Theme = { [key in ThemedComponents]: ThemedComponentProps } & {
  logo: ReactComponent;
  line: string;
  titleColor: string;
  buttons: {
    [key in ButtonType]: ThemedComponentProps;
  };
};

type ThemedComponentProps = { bg?: string; fontColor?: string; hover?: string };
type ThemeName = "light" | "dark";
type SubTask = { title: string; isCompleted: boolean };
type TaskStatus = "Todo" | "";
type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
};
type Column = { name: string; tasks: Task[] };
type Board = { name: string; columns: Column[] };
