import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

// project imports
import { Image, Text, InputText } from '@/components/common';
// import { useAddContactMutation } from '@/store/modules/contactModule';

const Footer = () => {
  // const [addContact] = useAddContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  // const onSubmit = async data => {
  //   const submitData = {
  //     email: data.email,
  //   };

  //   const res = await addContact(submitData);

  //   if (res?.data?.status === 'success') {
  //     dispatch(
  //       noti({
  //         message: 'Your email has been sent.',
  //         status: 'success',
  //       })
  //     );
  //   } else {
  //     dispatch(
  //       noti({
  //         message: 'Email not sent!',
  //         status: 'fail',
  //       })
  //     );
  //   }

  //   setTimeout(() => {
  //     reset({
  //       email: '',
  //     });
  //   }, 500);
  // };

  return (
    <div className="pt-[32px] pb-[64px] bg-stealBlue-50 maxSm:px-[16px]">
      <div className="grid grid-cols-12">
        <div className="md:col-start-2 md:col-span-4 col-span-12 md:space-y-[32px] space-y-[16px]">
          <div className="space-y-[25px]">
            <Text size="lg" weight="500" color="gray-900">
              Connect with us
            </Text>
            <div className="relative mt-1 flex items-center">
              <form>
                <InputText
                  className='w-[340px]'
                  type="email"
                  {...register('email', {
                    required: 'Email is required!',
                  })}
                  error={errors?.email?.message}
                  placeholder="Email *"
                />
              </form>
            </div>
            <div className="flex items-center justify-start space-x-[20px]">
              <Image imageType="image" src="/icons/facebook.svg" className="w-[30px] h-[30px]" alt="facebook" />
              <Image imageType="image" src="/icons/twitter.svg" className="w-[30px] h-[30px]" alt="twitter" />
              <Image imageType="image" src="/icons/linkedin.svg" className="w-[30px] h-[30px]" alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 maxSm:mt-[20px]">
          <div className="grid grid-cols-12">
            <div className="md:col-span-3 col-span-12 maxSm:mb-[16px]">
              <div className="md:space-y-[24px] space-y-[16px]">
                <Text color="gray-900" size="md" weight="lg">
                  About
                </Text>
                <div className="md:space-y-[24px] space-y-[16px]">
                  <Text color="primary-100" size="md" weight="md">
                    <Link href="/company-performance">About us</Link>
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    Partnership
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    <Link href="/career">Rewards</Link>
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    <Link href="/get-in-touch">Careers</Link>
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12">
              <div className="space-y-[24px]">
                <div className="md:space-y-[24px] space-y-[16px]">
                  <Text color="gray-900" size="md" weight="lg">
                    Info
                  </Text>
                  <div className="md:space-y-[24px] space-y-[16px]">
                    <Text color="primary-100" size="md" weight="md">
                      <Link href="/company-performance">Trading Info</Link>
                    </Text>
                    <Text color="primary-100" size="md" weight="md">
                      <Link href="/career">Promotion</Link>
                    </Text>
                    <Text color="primary-100" size="md" weight="md">
                      <Link href="/get-in-touch">Blogs</Link>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12 maxSm:mt-[16px]">
              <div className="space-y-[16px]">
                <Text color="gray-900" size="md" weight="lg">
                  Service
                </Text>
                <div className="md:space-y-[24px] space-y-[16px]">
                  <Text color="primary-100" size="md" weight="md">
                    Upcoming webinars
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    Training
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    FAQs
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12 maxSm:mt-[16px]">
              <div className="space-y-[16px]">
                <Text color="gray-900" size="md" weight="lg">
                  Quick Links
                </Text>
                <div className="md:space-y-[24px] space-y-[16px]">
                  <Text color="primary-100" size="md" weight="md">
                    Open an account
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    Contact us
                  </Text>
                  <Text color="primary-100" size="md" weight="md">
                    Download MT 4 & 5
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
