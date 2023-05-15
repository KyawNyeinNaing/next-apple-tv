import Link from 'next/link';
import React from 'react';

// project imports
import { Image, Text } from '@/components/common';
import useStyledTheme from '@/hooks/useStyled';
import styled from 'styled-components';

const BlogCard = ({ data }: any) => {
  const theme = useStyledTheme();

  return (
    <LinkStyled href="/">
      <div className="flex justify-center">
        <div className="card block max-w-sm rounded-lg p-[24px] bg-blue200">
          <div className="mb-[16px]">
            <Image
              imageType="image"
              src="/images/blogs/blog-img.svg"
              alt="card image"
              className="w-[384px] h-[200px]"
            />
          </div>
          <div className="space-y-[10px]">
            <Text as="h5" color="neutral800" size="md" weight="md">
              {data.title}
            </Text>
            <div className="flex items-center justify-start space-x-1">
              <Text color="gray-900" size="md" weight="md">
                View details
              </Text>
              <Image
                imageType="right-circle"
                alt="right-circle"
                width={18}
                height={18}
                color={theme.violet900}
                fillColor={theme.blue200}
              />
            </div>
          </div>
        </div>
      </div>
    </LinkStyled>
  );
};

export default BlogCard;

const LinkStyled = styled(Link)`
  .card {
    transition: background 0.3s ease;
  }
  &:hover {
    .card {
      background: ${props => props.theme.blue300};
    }
  }
`;
