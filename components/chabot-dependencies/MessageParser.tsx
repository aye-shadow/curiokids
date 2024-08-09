import React, { ReactNode } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: {
    [key: string]: (...args: any[]) => void;
  };
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string): void => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
