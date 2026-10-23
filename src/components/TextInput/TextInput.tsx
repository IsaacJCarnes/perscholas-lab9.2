import { type TextInputProps } from "../../types";

export default function TextInput(props: TextInputProps) {
  return (
    <input
      type="text"
      onChange={(e) => props.onTextChange(e.target.value)}
      placeholder={props.placeholder}
    >
      {props.initialValue}
    </input>
  );
}
