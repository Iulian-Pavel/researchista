import Button from "@mui/material/Button";

type ButtonComponentProps = {
  bgColor: string;
  buttonText: string;
  textColor: string;
  borderColor?: string;
};

function ButtonComponent({
  bgColor,
  buttonText,
  textColor,
  borderColor,
}: ButtonComponentProps) {
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        textTransform: "none",
        color: textColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      {buttonText}
    </Button>
  );
}

export default ButtonComponent;
