import { type StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const minWords = stats.minWords || 25

  const maxWords = stats.maxWords || 100
  const validWordCount:boolean =  minWords < stats.wordCount && stats.wordCount < maxWords
  const readingSeconds = (stats.readingTime % 60).toString().padStart(2, "0")
  const readingMinutes = Math.floor(stats.readingTime / 60)
  return (
    <div className="flx-around bg-cw5 rad-sm">
      <div className="statLabel">
        <p>Characters</p>
        <span className="txt-w6 txt-lg2 txt-cb">{stats.characterCount}</span>
      </div>
      <div className="statLabel">
        <p>Words</p>
        <span className={"statDisplay txt-w6 txt-lg2 "+ (validWordCount ? "txt-cg5" : "txt-cr5")}>{stats.wordCount}</span>
        <span className="txt-sm2">
          Min: {minWords} | Max: {maxWords}
        </span>
      </div>
      {showReadingTime && (
        <div className="statLabel">
          <p>Reading Time</p>
          <span className="txt-w6 txt-lg2 txt-cb">{readingMinutes}:{readingSeconds}</span>
        </div>
      )}
    </div>
  );
};
