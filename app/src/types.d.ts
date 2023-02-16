type ButtonType = "primary" | "secondary" | "destructive";

type Theme = {
  input: {
    bg: string;
    fontColor: string;
  };
  buttons: {
    [key in ButtonType]: { bg: string; fontColor: string; hover: string };
  };
};
