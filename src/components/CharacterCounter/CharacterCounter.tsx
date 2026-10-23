import { useState } from "react";
import { type CharacterCounterProps } from "../../types";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";
import { TextInput } from "../TextInput/TextInput";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords,
  targetReadingTime,
}) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="fill p" style={{"--p": "30px" } as React.CSSProperties}>
      <TextInput initialValue={inputText} onTextChange={setInputText} />
      <StatsDisplay
        stats={{
          characterCount: inputText.length,
          wordCount: 0,
          readingTime: 0,
        }}
      />
    </div>
  );
};
