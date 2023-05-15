import { withAuth } from '@/components/WithSignIn';
import { Image } from '@/components/common';
import Layout from '@/components/layout';
import useStyledTheme from '@/hooks/useStyled';
import { useGetPostsQuery } from '@/store/modules/postModule';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

const Player = () => {
  const { data: players = [], isLoading, isSuccess, isError } = useGetPostsQuery(10);

  const theme = useStyledTheme();

  const render = () => {
    return (
      <div className="grid grid-cols-12 md:gap-x-[9rem] maxSm:px-[16px]">
        {players?.data?.map((player: any, key: number) => {
          let className;
          if (key === 0) {
            className = 'md:col-start-2';
          } else {
            if (key % 3 === 0) {
              className = 'md:col-start-2';
            } else {
              className = '';
            }
          }

          return (
            <Card key={key} className={`mt-6 w-96 ${className} md:col-span-3 col-span-12`}>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {player.first_name + ' ' + player.last_name}
                </Typography>
                <div className="flex items-center justify-start gap-x-10">
                  <Typography>City -</Typography>
                  <Typography>{player.team.city}</Typography>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                  <Typography>Division -</Typography>
                  <Typography>{player.team.division}</Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                  <Button size="sm" variant="text" className="flex items-center gap-2">
                    Learn More
                  </Button>
                </a>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  };

  let content;
  if (isLoading) {
    content = (
      <div className="flex items-center justify-center h-[calc(100vh-88px)]">
        <Image imageType="loading" width={50} height={50} color={theme.primary} alt="loading" />
      </div>
    );
  } else {
    content = !isLoading && render();
  }

  return (
    <>
      <Layout>{content}</Layout>
    </>
  );
};

export default withAuth(Player);
