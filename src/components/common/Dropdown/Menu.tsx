import React, { Fragment, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Image, Text } from '@/components/common';
import styled, { css } from 'styled-components';
import Link from 'next/link';

type Props = {
  name: string;
  className?: string;
  panelClassName?: string;
  href?: string;
  mouseEnter: boolean;
  children: React.ReactNode;
};

/**
 * @param name Dropdown name
 * @param className Extend button's class
 * @param panelClassName Extend Popover panel's class
 * @param mouseEnter 'If you hover, the dropdown will appear' - `boolean`
 * @param children React Node
 */

const Dropdown: React.FC<Props> = ({ name, className, panelClassName, href, mouseEnter, children }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutDuration = 200;
  let timeout: any | undefined;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: boolean) => {
    clearTimeout(timeout);
    if (open) return;
    return mouseEnter && buttonRef?.current?.click();
  };

  const onMouseLeave = (open: boolean) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <PopoverStyled className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            onMouseEnter={onMouseEnter.bind(null, open)}
            onMouseLeave={onMouseLeave.bind(null, open)}
            className={`flex items-center justify-start px-[16px] py-[8px] text-blue900 ${className}`}
            ref={buttonRef}
          >
            {!href ? (
              <Text color="white" size="md" weight="semilg">
                {name}
              </Text>
            ) : (
              <Link href={href ?? ''}>
                <Text color="white" size="md" weight="semilg">
                  {name}
                </Text>
              </Link>
            )}
            <Image imageType={open ? 'up-caret' : 'down-caret'} alt="down-icon" width={25} height={25} />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute z-10 mt-3 ${panelClassName}`}
              onMouseEnter={onMouseEnter.bind(null, open)}
              onMouseLeave={onMouseLeave.bind(null, open)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative p-[18px] space-y-[20px]">{children}</div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </PopoverStyled>
  );
};

Dropdown.defaultProps = {
  name: 'Dropdown name',
  mouseEnter: false,
};

export default Dropdown;

const PopoverStyled = styled(Popover)`
  button {
    transition: background 0.1s ease, color 0.1s ease, border-radius 0.1s ease;
  }
`;
