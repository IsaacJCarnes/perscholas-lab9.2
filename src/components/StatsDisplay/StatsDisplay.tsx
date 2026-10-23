import { type StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="flx-around">
      <div className="statLabel">
        <p>Characters</p>
        <span>{stats.characterCount}</span>
      </div>
      <div className="statLabel">
        <p>Words</p>
        <span className="statDisplay">{stats.wordCount}</span>
        <span className="wordLimits">Min: 25 | Max: 100</span>
      </div>
      {showReadingTime && (
        <div className="statLabel">
          <p>Reading Time</p>
          <span>{stats.readingTime}</span>
        </div>
      )}
    </div>
  );
};
