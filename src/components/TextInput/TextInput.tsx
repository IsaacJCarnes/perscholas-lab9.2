import { type TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="fill-x m align-center" style={{ "--m": "5px"} as React.CSSProperties}>
      <textarea
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        defaultValue={initialValue}
        className="flx fill-x p"
        rows={6}
      ></textarea>
    </div>
  );
};
