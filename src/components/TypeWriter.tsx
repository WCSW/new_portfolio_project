import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TypeWriter = ({ words, className = "" }: TypeWriterProps) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = deleting ? 50 : 100;

    if (!deleting && displayed === word) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        deleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayed, deleting, index, words]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;
