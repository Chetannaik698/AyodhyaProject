import React, { useState, useEffect } from "react";

const Tagline = () => {
  const texts = ["FAMILY RESTAURANT", "PURE VEG"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Faster deleting speed

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      // Switch to the next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="tagline-container">
      <div className="logo">
        <img src="/logo.jpg"alt="" />
        <img src="/logo2.jpg" alt="" />
      </div>
      {/* <h4 className="typing">{currentText}</h4> */}
    </div>
  );
};

export default Tagline;
