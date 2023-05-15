import React from 'react';
import styled from 'styled-components';
import { Image } from '@/components/common';

type Props = {
  type?: 'text' | 'email' | 'password' | 'number' | 'submit' | 'hidden';
  label?: string;
  placeholder?: string;
  className?: string;
  error?: any;
};

const InputText = React.forwardRef<HTMLInputElement, Props>(
  ({ type, label, placeholder, error, className, ...props }, ref) => {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <InputStyled
            type={type}
            id="name"
            className={`text-black block w-full rounded-md border-[2px] border-primary-100 px-[12px] py-[8px] focus:border-[#00678D] ${className}`}
            placeholder={placeholder}
            aria-invalid="true"
            aria-describedby="name-error"
            ref={ref}
            {...props}
          />
          {type === 'email' && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Image imageType="image" src="/icons/send.svg" className="w-[20px] h-[20px]" alt="exclamation" />
            </div>
          )}
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

InputText.displayName = 'InputText';

InputText.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
};

export default InputText;

const InputStyled = styled.input`
  outline: 0;
  &::placeholder {
    color: ${props => props.theme.gray['700']};
  }
`;
