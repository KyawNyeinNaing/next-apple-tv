import Image from 'next/image';
import styled, { css } from 'styled-components';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  DownCaretIcon,
  ExclamationCircleIcon,
  InfoColorIcon,
  OutlineLeftCircleIcon,
  OutlineRightCircleIcon,
  RightCaretIcon,
  SearchIcon,
  UpCaretIcon,
} from './Icons';
import { Loading } from './svg';

type Props = {
  sx?: any;
  src?: string;
  imageType: string;
  bgimg?: boolean;
  className?: string;
  onLoadImage?: boolean;
  name?: string;
  width?: number;
  height?: number;
  color?: string;
  fillColor?: string;
  alt?: string;
};

const ImageWrap: React.FC<Props> = (props: Props) => {
  const obj = props?.sx;
  const entries: any = obj && Object.entries(obj);

  const cn = (...classes: any) => {
    return classes.filter(Boolean).join(' ');
  };

  const arr: any = props?.src?.split('.');
  const result = arr.find((f: string) => f === 'pdf');

  if (result === 'pdf') {
    console.log('found it');
  }

  return (
    <Wrap entries={entries}>
      {!props.bgimg ? (
        <Image
          className={cn(`duration-500 ease-in-out ${props.className}`, props.onLoadImage ? 'blur-[3px]' : 'blur-0')}
          src={result === 'pdf' ? '' : props.src || ''}
          alt={(props.name || props.src) ?? ''}
          width="0"
          height="0"
        />
      ) : (
        <BGImg src={props.src} width={props.width} height={props.height} />
      )}
    </Wrap>
  );
};

const ImageComponent: React.FC<Props> = (props: Props) => {
  switch (props.imageType) {
    case 'image':
      return <ImageWrap {...props} />;

    case 'right-caret':
      return <RightCaretIcon {...props} />;

    case 'up-caret':
      return <UpCaretIcon {...props} />;

    case 'down-caret':
      return <DownCaretIcon {...props} />;

    case 'left-arrow':
      return <ArrowLeftIcon {...props} />;

    case 'right-arrow':
      return <ArrowRightIcon {...props} />;

    case 'right-circle':
      return <OutlineRightCircleIcon {...props} />;

    case 'left-circle':
      return <OutlineLeftCircleIcon {...props} />;

    case 'rightArrow-circle':
      return <ArrowCircleRightIcon {...props} />;

    case 'leftArrow-circle':
      return <ArrowCircleLeftIcon {...props} />;

    case 'exclamation-circle':
      return <ExclamationCircleIcon {...props} />;

    case 'check':
      return <CheckIcon {...props} />;

    case 'search':
      return <SearchIcon {...props} />;

    case 'info':
      return <InfoColorIcon {...props} />;

    case 'loading':
      return <Loading {...props} />;

    default:
      return null;
  }
};

export default ImageComponent;

const Wrap = styled.div<{ width?: string; height?: string; entries?: any; fullWidth?: boolean }>`
  width: ${props => props.width && props.width + 'px'};
  height: ${props => props.height && props.height + 'px'};
  ${props =>
    props?.entries &&
    props.entries.map(
      ([key, val]: any) => css`
        ${key}: ${val};
      `
    )}
  img,
  svg {
    width: ${props => props.width && props.width + 'px'};
    height: ${props => props.width && props.height + 'px'};
    color: ${props => (props.color ? props.color : 'black')};
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
        height: 100%;
      `}
  }
`;

const BGImg = styled.div<{ width?: number; height?: number; src?: string }>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url(${props => props.src}) no-repeat center / cover;
`;
