import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { MdChevronRight } from 'react-icons/md';
import { ParallaxBanner, useParallax } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';

import { Button } from '@/components/common';
import Layout from '@/components/layout';
import { withAuth } from '@/components/WithSignIn';
import { Accordion, AccordionBody, AccordionHeader, Typography } from '@material-tailwind/react';
import useResponsive from '@/hooks/useMediaQuery';

const Icon = (props: { id: number; open: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${props.id === props.open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Home = () => {
  const [open, setOpen] = useState<number>(0);
  const { isMobile } = useResponsive();

  const background: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="grid grid-cols-12 h-full maxSm:px-[16px]">
        <div className="md:col-start-2 md:col-span-10 col-span-12 h-full flex items-center maxSm:flex-col maxSm:justify-center">
          <TypographyStyled
            varient="h1"
            className={`${
              isMobile ? 'text-[36px]' : 'text-[80px]'
            } -tracking-[0.015em] leading-[1.05] bold text-white md:mb-[55px] mb-[130px] space-y-[40px]`}
          >
            All Apple Originals. <br />
            Only on Apple TV+.

          <div>
            <ButtonStyled className="bg-white text-black w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
              Stream now
            </ButtonStyled>
          </div>
          </TypographyStyled>

        </div>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <Gradient className="gradient absolute inset-0" />,
  };

  const parallax = useParallax<HTMLDivElement>({
    easing: [1, -0.75, 0.5, 1.34],
    translateY: [10, 100],
  });

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Layout>
        <div className="relative">
          <ParallaxBanner layers={[background, headline, foreground, gradientOverlay]} className="h-screen" />

          <div className="bg-[#000] w-full">
            <div className="grid grid-cols-12" ref={parallax.ref}>
              <div className="col-start-2 col-span-10">
                <TypographyStyled className="h2 text-white" ismobile={isMobile?.toString()}>
                  New Apple Originals every month.
                  <br />
                  Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.
                  <br />
                  Share Apple TV+ with your family.
                </TypographyStyled>

                <div className="grid grid-cols-12 gap-[40px] md:pt-[150px]">
                  <div className="md:col-span-4 col-span-12 text-white space-y-[10px]">
                    <TypographyStyled className="semi-bold md:text-[28px]">Buy an Apple device</TypographyStyled>
                    <TypographyStyled className="bold md:text-[48px] text-[28px]">3 months free.</TypographyStyled>
                    <TypographyStyled className="medium text-[#a1a1a6] text-[17px] leading-[1.4705882353] -tracking-[0.022em]">
                      Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer
                      within 90 days.
                    </TypographyStyled>

                    <div>
                      <ButtonStyled className="bg-white mt-[40px] text-black w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                        Check eligibility
                      </ButtonStyled>
                    </div>
                  </div>

                  <div className="md:col-span-4 col-span-12 text-white space-y-[10px]">
                    <TypographyStyled className="semi-bold md:text-[28px]">Free 7-day trial</TypographyStyled>
                    <TypographyStyled className="bold md:text-[48px] text-[28px]">$6.99/mo.</TypographyStyled>
                    <TypographyStyled className="medium text-[#a1a1a6] text-[17px] leading-[1.4705882353] -tracking-[0.022em]">
                      A monthly subscription is just $6.99 per month after a free 7-day trial. Share Apple TV+ with your
                      family.<sup>2</sup>
                    </TypographyStyled>
                    <div>
                      <ButtonStyled className="bg-white mt-[40px] text-black w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                        Try it free
                      </ButtonStyled>
                    </div>
                  </div>

                  <div className="md:col-span-4 col-span-12 text-white space-y-[10px]">
                    <TypographyStyled className="semi-bold md:text-[28px]">Free 1‑month trial</TypographyStyled>
                    <TypographyStyled className="bold md:text-[48px] text-[28px]">Apple One</TypographyStyled>
                    <TypographyStyled className="medium text-[#a1a1a6] text-[17px] leading-[1.4705882353] -tracking-[0.022em]">
                      Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more
                      for less.
                    </TypographyStyled>

                    <div>
                      <ButtonStyled className="bg-white mt-[40px] text-black w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                        Try Apple One free<sup>3</sup>
                      </ButtonStyled>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-[39px]">
          <section className="grid grid-cols-12 maxSm:px-[16px] md:mt-[130px] mt-[100px]">
            <div className="col-span-12 space-y-[50px]">
              <div className="flex flex-col justify-center items-center space-y-[25px]">
                <Image
                  src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_app_icon__cth1s5qlqpyu_xlarge.png"
                  width={86}
                  height={86}
                  alt="apple tv plus"
                />
                <div>
                  <TypographyStyled
                    varient="h1"
                    className={`${
                      isMobile ? 'text-[28px]' : 'text-[80px]'
                    } -tracking-[0.015em] leading-[1.05] text-center bold`}
                  >
                    Watch Apple TV+ anywhere <br /> on the Apple TV app.
                  </TypographyStyled>
                </div>
                <TypographyStyled className="text-center">
                  Find the Apple TV app on your favorite Apple devices. <br /> Or watch Apple TV+ online at{' '}
                  <Link className="text-[#06c]" href="https://tv.apple.com/">
                    tv.apple.com.
                  </Link>
                </TypographyStyled>
              </div>

              <div
                className={`flex items-center md:justify-center justify-start md:gap-x-[100px] gap-x-[50px] ${
                  isMobile && 'flex-wrap'
                }`}
              >
                <div className="flex flex-col justify-center items-center space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_apple_tv__r2nel0gcigam_large.jpg"
                    width={isMobile ? 45 : 66}
                    height={isMobile ? 51 : 82}
                    alt="apple tv"
                  />
                  <TypographyStyled>Apple TV</TypographyStyled>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_iphone__c914mkstye0y_large.jpg"
                    width={isMobile ? 60 : 90}
                    height={isMobile ? 51 : 81}
                    alt="iphone"
                  />
                  <TypographyStyled>iPhone</TypographyStyled>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_ipad__cyk6qow5fiqa_large.jpg"
                    width={isMobile ? 58 : 85}
                    height={isMobile ? 51 : 81}
                    alt="ipad"
                  />
                  <TypographyStyled>iPad</TypographyStyled>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_mac__b7y797p7oouq_large.jpg"
                    width={isMobile ? 77 : 114}
                    height={isMobile ? 51 : 81}
                    alt="mac"
                  />
                  <TypographyStyled>Mac</TypographyStyled>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_airplay__ddkvcm0sxtm6_large.jpg"
                    width={isMobile ? 35 : 54}
                    height={isMobile ? 51 : 81}
                    alt="airplay"
                  />
                  <TypographyStyled>AirPlay</TypographyStyled>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <TypographyStyled className="semi-bold md:text-[40px] text-[28px] leading-[1.1] maxSm:text-center">
                  See it on your smart TV <br /> or streaming device.
                </TypographyStyled>
                <Link href="https://support.apple.com/guide/tvplus/welcome/web" className="mt-[10px]">
                  <TypographyStyled className="flex items-center text-[17px] text-[#06c]">
                    <span>Set up your device</span>
                    <MdChevronRight width={18} height={18} />
                  </TypographyStyled>
                </Link>
              </div>

              <div className="grid grid-cols-12">
                <div className="md:col-start-2 md:col-span-10 col-span-12">
                  <div className="space-y-[26px] md:px-[30px]">
                    <div
                      className={`flex flex-wrap items-center justify-center md:gap-x-[100px] gap-x-[50px] space-y-[10px]`}
                    >
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_samsung__er6s8sp9t126_large.jpg"
                        width={isMobile ? 71 : 117}
                        height={isMobile ? 51 : 81}
                        alt="samsung"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_lg__7fxn3l0zf5ua_large.jpg"
                        width={isMobile ? 86 : 161}
                        height={isMobile ? 51 : 81}
                        alt="lg"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_vizio__crgnno5ezt2e_large.jpg"
                        width={isMobile ? 62 : 110}
                        height={isMobile ? 51 : 81}
                        alt="vizio"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_sony__dv28xq4n91ea_large.jpg"
                        width={isMobile ? 71 : 126}
                        height={isMobile ? 51 : 81}
                        alt="sony"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xfinity__fohor3dbqrmi_large.jpg"
                        width={isMobile ? 65 : 126}
                        height={isMobile ? 51 : 81}
                        alt="finity"
                      />

                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_roku__d3kr4gpcimoi_large.jpg"
                        width={isMobile ? 58 : 102}
                        height={isMobile ? 51 : 81}
                        alt="roku"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_firetv__f6qpefrj0ree_large.jpg"
                        width={isMobile ? 52 : 96}
                        height={isMobile ? 51 : 81}
                        alt="firetv"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_google_tv__e5t4asdc2gsy_large.jpg"
                        width={isMobile ? 86 : 160}
                        height={isMobile ? 51 : 81}
                        alt="googletv"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_playstation__djtq2b40wf2a_large.jpg"
                        width={isMobile ? 92 : 161}
                        height={isMobile ? 51 : 81}
                        alt="playstation"
                      />
                      <Image
                        src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/icon_xbox__cfelmbxxfoaa_large.jpg"
                        width={isMobile ? 68 : 123}
                        height={isMobile ? 51 : 81}
                        alt="xbox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-12 maxSm:px-[16px]">
            <TypographyStyled
              className="col-span-12 md:pt-[130px] text-center h1"
              varient="h1"
              ismobile={isMobile?.toString()}
            >
              Questions? Answers.
            </TypographyStyled>
            <div className="md:col-start-3 md:col-span-8 col-span-12">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(1)}
                  ismobile={isMobile?.toString()}
                >
                  What is Apple TV+?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas,
                  groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added
                  every month.
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(2)}
                  ismobile={isMobile?.toString()}
                >
                  How can I watch it?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the
                  app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming
                  platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at
                  tv.apple.com.
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(3)}
                  ismobile={isMobile?.toString()}
                >
                  What does it cost?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free
                  for 3 months.1 (2) A monthly subscription is just $6.99 per month after a free seven-day trial.2 (3)
                  Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single
                  monthly subscription. Apple One plans start at $16.95 per month. (4) The Apple Music Student Plan
                  comes with a free subscription to Apple TV+.<sup>4</sup>
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(3)}
                  ismobile={isMobile?.toString()}
                >
                  Can I share with my family?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  Of course. Apple TV+ lets you share your subscription with up to five family members.
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(3)}
                  ismobile={isMobile?.toString()}
                >
                  Are there commercials? And can I watch on demand?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add
                  new episodes every Friday. You can then watch them on demand anytime, anywhere.
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(3)}
                  ismobile={isMobile?.toString()}
                >
                  Do I need an Apple TV 4K?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to
                  experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV
                  app on your favorite devices.
                </AccordionBodyStyled>
              </Accordion>
              <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeaderStyled
                  className="text-left"
                  onClick={() => handleOpen(3)}
                  ismobile={isMobile?.toString()}
                >
                  Can I download to watch offline?
                </AccordionHeaderStyled>
                <AccordionBodyStyled>
                  Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere,
                  anytime without a Wi-Fi connection.
                </AccordionBodyStyled>
              </Accordion>
            </div>
          </section>

          <section>
            <div className="grid grid-cols-12 md:pt-[84px]">
              <div className="md:col-start-2 md:col-span-10 col-span-12">
                <div className="bg-[#f5f5f7] flex items-center justify-between maxMd:flex-col md:px-[90px] px-[16px] md:py-[123px] py-[45px]">
                  <div className="maxSm:order-last maxSm:ml-[30px]">
                    <Image
                      src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/bundle__e93qdcv7mtm6_large.jpg"
                      width={isMobile ? 299 : 544}
                      height={isMobile ? 182 : 330}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center space-y-[30px]">
                    <Image
                      src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_one__b0modw3b87xy_large.png"
                      width={isMobile ? 62 : 102}
                      height={isMobile ? 21 : 33}
                      alt="apple"
                    />
                    <TypographyStyled
                      className="h2 leading-[1.0834933333] -tracking-[0.003em] text-center"
                      varient="h2"
                      ismobile={isMobile?.toString()}
                    >
                      Bundle Apple TV+ with <br /> up to five other great. <br /> And enjoy more for less.
                    </TypographyStyled>
                    <ButtonStyled className="bg-[#1d1d1f] w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                      Try Apple One Free<sup>3</sup>
                    </ButtonStyled>
                    <Link
                      className="flex items-center justify-start space-x-[5px]"
                      href="https://www.apple.com/apple-one/"
                    >
                      <TypographyStyled className="flex items-center text-[17px] text-[#06c]">
                        <span>Learn more</span>
                        <MdChevronRight />
                      </TypographyStyled>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="maxSm:px-[16px]">
            <div className="grid grid-cols-12">
              <div className="col-start-2 col-span-10">
                <div className="bg-[#f5f5f7] flex items-center justify-between px-[90px] pt-[123px]">
                  <div className="flex flex-col space-y-[30px]">
                    <TypographyStyled
                      className="h2 leading-[1.0834933333] -tracking-[0.003em]"
                      varient="h2"
                      ismobile={isMobile?.toString()}
                    >
                      The Apple Music <br /> Student Plan comes <br /> with Apple TV+ for free.<sup>4</sup>
                    </TypographyStyled>
                    <ButtonStyled className="bg-[#1d1d1f] w-[184px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                      Try Apple Music free
                    </ButtonStyled>
                  </div>

                  <div>
                    <Image
                      src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/student_plan__bm7yp0v4tf6u_large.jpg"
                      width={533}
                      height={450}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="maxSm:px-[16px]">
            <div className="grid grid-cols-12 gap-[40px]">
              <div className="col-start-2 col-span-5">
                <div className="bg-[#f5f5f7] flex flex-col items-center justify-center pt-[123px] space-y-[17px]">
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_logo__bx1mtrage32a_large.png"
                    width={116}
                    height={35}
                    alt="appletv"
                  />
                  <TypographyStyled
                    className="h2 leading-[1.0834933333] -tracking-[0.003em] text-center"
                    varient="h2"
                    ismobile={isMobile?.toString()}
                  >
                    The Apple experience. Cinematic in
                  </TypographyStyled>
                  <div className="flex items-center justify-start space-x-[20px]">
                    <ButtonStyled className="w-[73px] rounded-[980px] px-[22px] py-[12px] text-[14px] capitalize">
                      Buy
                    </ButtonStyled>
                    <Link
                      className="flex items-center justify-start space-x-[5px]"
                      href="https://www.apple.com/apple-one/"
                    >
                      <TypographyStyled className="flex items-center text-[17px] text-[#06c]">
                        <span>Learn more</span>
                        <MdChevronRight />
                      </TypographyStyled>
                    </Link>
                  </div>
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/apple_tv_4k_remote__igmcbznr1w2u_large.jpg"
                    width={663}
                    height={494}
                    alt="remote"
                  />
                </div>
              </div>
              <div className="col-span-5">
                <div className="bg-[#f5f5f7] flex flex-col items-center justify-center pt-[123px] space-y-[17px]">
                  <Typography as="h3" className="text-[32px]">
                    AirPlay
                  </Typography>
                  <TypographyStyled
                    className="h2 leading-[1.0834933333] -tracking-[0.003em] text-center"
                    varient="h2"
                    ismobile={isMobile?.toString()}
                  >
                    Bring Apple TV+ to <br />a screen near you.
                  </TypographyStyled>
                  <div className="flex items-center justify-start space-x-[20px]">
                    <Link
                      className="flex items-center justify-start space-x-[5px]"
                      href="https://www.apple.com/apple-one/"
                    >
                      <TypographyStyled className="flex items-center text-[17px] text-[#06c]">
                        <span>Learn more</span>
                        <MdChevronRight />
                      </TypographyStyled>
                    </Link>
                  </div>
                  <Image
                    src="https://www.apple.com/v/apple-tv-plus/ag/images/overview/air_play__dyuvvwnd5riq_large.jpg"
                    width={663}
                    height={499}
                    alt="remote"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default withAuth(Home);

const TypographyStyled = styled(Typography)<{ ismobile: string }>`
  font-family: -apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif !important;

  &.h1 {
    font-size: ${props => (props.ismobile === 'true' ? 28 : 80)}px;
    font-weight: 700;
  }
  &.h2 {
    font-size: ${props => (props.ismobile === 'true' ? 28 : 48)}px;
    font-weight: 700;
  }

  &.bold {
    font-weight: 700;
  }
  &.semi-bold {
    font-weight: 600;
  }
  &.medium {
    font-weight: 500;
  }
  &.regular {
    font-weight: 400;
  }
`;

const AccordionHeaderStyled = styled(AccordionHeader)<{ ismobile: string }>`
  font-family: -apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  font-weight: 600;
  font-size: ${props => (props.ismobile === 'true' ? 19 : 24)}px;
  color: rgb(29, 29, 31);
`;

const AccordionBodyStyled = styled(AccordionBody)`
  font-family: -apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  font-weight: 400;
  font-size: 17px;
  color: rgb(29, 29, 31);
`;

const ButtonStyled = styled(Button)`
  font-family: -apple-system, SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  font-size: 14px;
  line-height: 1.4285914286;
  letter-spacing: -0.016em;
  font-weight: 700;
`;

const VideoStyled = styled.video`
  object-fit: cover;
  object-position: cover top;
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }
  audio::-webkit-media-controls,
  video::-webkit-media-controls {
    display: none;
  }

  video::-webkit-media-controls-timeline {
    display: none;
  }
`;

const Gradient = styled.div`
  background: linear-gradient(rgba(14, 62, 151, 0.5) 50%, black);
`;
