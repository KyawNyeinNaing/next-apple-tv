import styled from 'styled-components';

// icon imports
import { RxCaretRight, RxCaretUp, RxCaretDown, RxArrowRight, RxArrowLeft } from 'react-icons/rx';
import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle, HiExclamationCircle } from 'react-icons/hi2';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';
import { RiCheckFill, RiSearchLine } from 'react-icons/ri';
import { FcInfo } from 'react-icons/fc';

type Props = {
  width?: number;
  height?: number;
  fillColor?: string;
};

export const RightCaretIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RxCaretRight />
    </IconWrap>
  );
};

export const UpCaretIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RxCaretUp />
    </IconWrap>
  );
};

export const DownCaretIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RxCaretDown />
    </IconWrap>
  );
};

export const ArrowLeftIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RxArrowLeft />
    </IconWrap>
  );
};

export const ArrowRightIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RxArrowRight />
    </IconWrap>
  );
};

export const OutlineRightCircleIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <HiOutlineArrowRightCircle />
    </IconWrap>
  );
};

export const OutlineLeftCircleIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <HiOutlineArrowLeftCircle />
    </IconWrap>
  );
};

export const ArrowCircleLeftIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <HiArrowCircleLeft />
    </IconWrap>
  );
};

export const ArrowCircleRightIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <HiArrowCircleRight />
    </IconWrap>
  );
};

export const ExclamationCircleIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <HiExclamationCircle />
    </IconWrap>
  );
};

export const CheckIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RiCheckFill />
    </IconWrap>
  );
};

export const SearchIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <RiSearchLine />
    </IconWrap>
  );
};

export const InfoColorIcon = (props: Props) => {
  return (
    <IconWrap {...props}>
      <FcInfo />
    </IconWrap>
  );
};

const IconWrap = styled.div<Props>`
  width: ${props => (props.width ? props.width : '35')}px;
  height: ${props => (props.height ? props.height : '35')}px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    padding: 0;
    fill: ${props => (props.fillColor ? props.fillColor : props.theme.white)};
    color: ${props => (props.color ? props.color : props.theme.primary)};
  }
`;
