import { useContext } from 'react';
import Loader from '../Loader/Loader';
import { SCardContent, SCardLoader, SLoaderWrapper } from './CardLoader.styled';
import { ThemeContext } from '../../context/contextApi';

const CardLoader = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SCardLoader
      style={{ background: theme === 'light' ? '#ffffff' : '##20202C' }}
    >
      <SCardContent>
        <SLoaderWrapper>
          <Loader width={82} height={20} borderRadius={18} />
          <Loader width={18} height={4} />
        </SLoaderWrapper>
        <Loader />
        <Loader width={58} />
      </SCardContent>
    </SCardLoader>
  );
};

export default CardLoader;
