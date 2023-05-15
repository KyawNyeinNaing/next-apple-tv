import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import configs from '@/configs.json';
import { Image, Text } from '@/components/common';
import { PageType } from '@/types/PageList';

interface Props {
  pageList: PageType[];
}

const Profile: React.FC<Props> = ({ pageList }: Props) => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const router = useRouter();

  useEffect(() => {
    const profilePage = pageList[pageList.length - 1];
    setName(configs.userName);
    setSlug(profilePage.slug);
  }, [pageList]);

  return (
    <div>
      <Link
        href={slug}
        className={`flex relative items-center py-2 mt-5 font-medium ${
          router.pathname === '/product-service' ? 'active' : ''
        }`}
      >
        <div className="flex space-x-[25px]">
          <Image imageType="image" src={configs.userAvatar} alt={configs.userName} className="w-6 h-6 rounded" />
          <Text color="gray-100" size="md" weight="md">
            {name}
          </Text>
        </div>
      </Link>

      <Link
        href={'/logout'}
        className={`flex relative items-center py-2 mt-5 font-medium ${
          router.pathname === '/product-service' ? 'active' : ''
        }`}
      >
        <div className="flex space-x-[25px]">
          <Text color="gray-100" size="md" weight="md">
            Logout
          </Text>
        </div>
      </Link>
    </div>
  );
};

export default Profile;
