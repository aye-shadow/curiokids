import React, { ReactNode } from 'react';

interface MessageParserProps {
  children: ReactNode;
  actions: {
    handleHello: () => void;
  };
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string): void => {
    if (message.includes('hello')) {
      actions.handleHello();
    }
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
