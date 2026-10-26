import { type TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="fill-x m align-center bg-cw5 rad-sm" style={{ "--m-b": "15px"} as React.CSSProperties}>
      <textarea
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        defaultValue={initialValue}
        className="flx fill-x p bg-none bd-none txt-cb txt-lg"
        style={{ "--p": "15px"} as React.CSSProperties}
        rows={6}
      ></textarea>
    </div>
  );
};
