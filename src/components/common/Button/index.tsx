import React, { LegacyRef } from 'react';
import Link from 'next/link';
import { Button as MTButton, ButtonProps } from '@material-tailwind/react';
import { Image } from '@/components/common';

interface Props extends ButtonProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  href?: string;
  className?: string;
  bordercolor?: boolean;
  children: React.ReactNode;
}

const getButton: React.FC<Props> = (
  { isDisabled, isLoading, children, ...others },
  ref: LegacyRef<HTMLButtonElement>
) => {
  return (
    <MTButton {...others} disabled={isDisabled || isLoading} ref={ref as any}>
      {isLoading ? <Image imageType="loading" width={20} height={20} alt="loading" /> : <>{children}</>}
    </MTButton>
  );
};

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return props.href ? <Link href={props.href}>{getButton(props, ref)}</Link> : getButton(props, ref);
});

Button.displayName = 'Button';

getButton.defaultProps = {
  isDisabled: false,
  isLoading: true,
  size: 'md',
};

export default Button;
