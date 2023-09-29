import "../App.css";
import { useState } from "react";

const mockPoll = {
  question: "Where do you get your design inspiration?",
  options: ["Pinterest", "Dribbble", "I don't look for inspiration"],
  incorrect: "I don't look for inspiration",
  correct: "",
};

type PollProps = {
  handleIncorrect: () => void;
  handleCorrect: () => void;
};

const Poll = (props: PollProps) => {
  const [selected, setSelected] = useState<null | string>(null);
  const handleSelect = (target: string) => {
    setSelected(target);
    console.log(target === mockPoll.incorrect);
    if (target === mockPoll.incorrect) {
      props.handleIncorrect();
    } else {
      props.handleCorrect();
    }

  };
  return (
    <div className="poll">
      <div className="poll__question">
        <p className="poll__question--text">{mockPoll.question}</p>
      </div>
      <div className="poll__answers">
        <div className="poll__answer">
          {mockPoll.options.map((option, idx) => {
            return (
              <a href="#intro">
                <button
                  onClick={() => handleSelect(option)}
                  key={idx}
                  className={`poll__answer--button ${
                    selected === option ? "selected" : ""
                  }`}
                >
                  {option}
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Poll;
