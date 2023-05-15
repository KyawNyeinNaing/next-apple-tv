import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { PageType } from '@/types/PageList';
import { Image, Text } from '@/components/common';
import Profile from './Profile';
/**
 * Sidebar navigation
 */
const SideNav: React.FC = () => {
  const router = useRouter();

  const pageList: PageType[] = [
    { label: 'Dashboard', slug: '/', icon: 'dashboard' },
    { label: 'Customer list', slug: '/customer-list', icon: 'people_alt' },
    { label: 'Manage orders', slug: '/manage-orders', icon: 'leaderboard' },
    {
      label: 'Online payments',
      slug: '/online-payments',
      icon: 'account_balance_wallet',
    },
    { label: 'Products', slug: '/products', icon: 'shop_2' },
    { label: 'Settings', slug: '/settings', icon: 'settings' },
    { label: 'Login', slug: '/login', icon: 'login' },
  ];

  return (
    <nav
      className="flex-col sticky top-0 left-0 h-screen mr-4 lg:mr-0  px-5 pr-12 bg-gray-800 md:flex hidden"
      aria-label="Sidebar navigation"
    >
      <div className="mt-5">
        <Logo />
      </div>

      <ul className="pb-5 mt-10">
        {pageList &&
          pageList.map(({ icon, label, slug }, i) => (
            <li key={i}>
              <Link
                href={slug}
                className={`flex relative items-center py-2 mt-5 font-medium ${
                  router.pathname === '/product-service' ? 'active' : ''
                }`}
              >
                <div className="flex space-x-[25px]">
                  <Image imageType="check" width={24} height={24} alt="check icon" />
                  <Text color="gray-100" size="md" weight="md">
                    {label}
                  </Text>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      {/* Profile */}
      <div className="flex-1 flex flex-col justify-end mb-5">
        <Profile pageList={pageList} />
      </div>
    </nav>
  );
};

export default SideNav;
