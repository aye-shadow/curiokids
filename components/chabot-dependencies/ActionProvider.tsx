import React, { ReactNode } from 'react';

interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
  const handleHello = (): void => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
