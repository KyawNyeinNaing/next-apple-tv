import React from 'react';
import Link from 'next/link';
import configs from '@/configs.json';
import { Text } from '@/components/common';

const Logo: React.FC = () => {
  return (
    <Link href={'/'} className="font-bold text-xl text-glitch-orange">
      <Text color="white" size="lg" weight="lg">
        {configs.sitename}.
      </Text>
    </Link>
  );
};

export default Logo;
