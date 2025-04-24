
interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
