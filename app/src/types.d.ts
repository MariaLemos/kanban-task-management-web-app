type ButtonType = "primary" | "secondary" | "destructive";
type ThemedComponents = "input" | "default";
type Theme = { [key in ThemedComponents]: ThemedComponentProps } & {
  buttons: {
    [key in ButtonType]: ThemedComponentProps;
  };
};

type ThemedComponentProps = { bg?: string; fontColor?: string; hover?: string };
