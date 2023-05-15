import React, { memo } from 'react';

type Props = {
  className?: string;
  show: boolean;
  content: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<Props> = memo(({ className, show, content, children }: Props) => {
  return (
    <div className="group relative">
      <div
        className={`${className} h-auto pointer-events-none absolute left-[15px] -translate-x-1/2 rounded px-2 py-3 transition before:absolute before:left-1/2 before:-translate-x-1/2 before:border-[10px] before:border-transparent before:content-[''] ${
          !show && 'opacity-0 group-hover:opacity-100'
        }`}
      >
        {content}
      </div>
      {children}
    </div>
  );
});

Tooltip.defaultProps = {
  content: 'Tooltip',
  show: false,
  className: 'bg-sky700 max-w-[250px] top-[50px] text-white before:border-b-sky700 before:top-[-18px]',
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
