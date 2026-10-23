import { type TextInputProps } from "../../types";

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <textarea
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={initialValue}
      rows={6}
    ></textarea>
  );
};
