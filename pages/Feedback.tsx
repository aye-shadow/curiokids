import React from 'react';
import { FilloutStandardEmbed } from '@fillout/react';
import '@fillout/react/style.css';

const Form: React.FC = () => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
      }}
    >
      <FilloutStandardEmbed filloutId="7kh4wquKJ6us" />
    </div>
  );
}

export default Form;