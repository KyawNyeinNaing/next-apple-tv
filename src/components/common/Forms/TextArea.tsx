import React from 'react';
import styled from 'styled-components';
import { Image } from '@/components/common';

type Props = {
  rows?: number;
  label?: string;
  placeholder?: string;
  className: string;
  error?: any;
};

const InputTextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ rows, label, placeholder, error, className, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <TextArea
            rows={rows}
            id="name"
            className={`block w-full rounded-md border border-violet100 px-[12px] py-[8px] focus:border-[#00678D] ${className}`}
            placeholder={placeholder}
            aria-invalid="true"
            aria-describedby="name-error"
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputTextArea.displayName = 'InputTextArea';

InputTextArea.defaultProps = {
  rows: 6,
  placeholder: 'Placeholder',
};

export default InputTextArea;

const TextArea = styled.textarea`
  outline: 0;
`;
