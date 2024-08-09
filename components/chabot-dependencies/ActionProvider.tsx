import React, { ReactNode } from 'react';

interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          actions: {},
        });
      })}
    </div>
  );
};

export default ActionProvider;
