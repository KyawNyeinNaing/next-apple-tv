import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
  query: {
    minWidth?: number;
    maxWidth?: number;
  };
  children: React.ReactNode;
};

const Responsive: React.FC<Props> = ({ query, children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const resQuery = useMediaQuery(query);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <>{mounted && resQuery ? children : null}</>;
};

export default Responsive;
