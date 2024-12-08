import React, { useState, useEffect } from 'react';


const Typewriter = ({ text, speed = 80, loop = true }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true); // To track typing state

    useEffect(() => {
        if (index < text.length) {
            // Typing effect
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (loop) {
            // Reset typing effect when finished
            setIsTyping(false); // Finish typing
            const loopTimeout = setTimeout(() => {
                setDisplayedText(''); // Clear text
                setIndex(0); // Reset the index to start typing again
                setIsTyping(true); // Start typing again
            }, 1000); // Wait for 1 second before looping
            return () => clearTimeout(loopTimeout);
        }
    }, [index, text, speed, loop]);

    return (
        <span>
      {displayedText}
            {isTyping && <span className="typewriter-cursor">|</span>}
    </span>
    );
};

export default Typewriter;
