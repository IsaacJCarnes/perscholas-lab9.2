import { type StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div>
      <div>
        <div className="statLabel">
          <p>Characters</p>
          <span>{stats.characterCount}</span>
        </div>
        <div className="statLabel">
          <p>Words</p>
          <span>{stats.wordCount}</span>
        </div>
        {showReadingTime && (
          <div className="statLabel">
            <p>Reading Time</p>
            <span>{stats.readingTime}</span>
          </div>
        )}
      </div>
    </div>
  );
};
