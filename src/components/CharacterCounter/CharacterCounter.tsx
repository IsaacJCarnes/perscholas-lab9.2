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
  const wordCount = inputText ? inputText.trim().split(/\s+/).length : 0
  return (
    <div className="fill p" style={{"--p": "30px" } as React.CSSProperties}>
      <TextInput initialValue={inputText} onTextChange={setInputText} />
      <StatsDisplay
        stats={{
          characterCount: inputText.length,
          wordCount: wordCount,
          readingTime: Math.floor(wordCount / 3),
          minWords: minWords,
          maxWords: maxWords,
        }}
      />
    </div>
  );
};
