type ButtonType = "primary" | "secondary" | "destructive";
type ThemedComponents = "main" | "input" | "default" | "input";
type Theme = { [key in ThemedComponents]: ThemedComponentProps } & {
  logo: ReactComponent;
  buttons: {
    [key in ButtonType]: ThemedComponentProps;
  };
};

type ThemedComponentProps = { bg?: string; fontColor?: string; hover?: string };
type ThemeName = "light" | "dark";
