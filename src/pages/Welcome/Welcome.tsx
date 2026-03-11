import { FullSizeCentered } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
// import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();

  const width = 300;
  const height = 300;

  return (
    <>
      <meta name="title" content="Welcome" />
      <FullSizeCentered flexDirection={isPortrait ? 'column' : 'row'}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        {/* <Image alt="react" src={reactLogo} sx={{ width, height }} /> */}
        <Image
          alt="react"
          src={'https://cdn.jsdelivr.net/gh/0326/imgs@main/blog/aicosx1300%20(1).png'}
          sx={{ width, height }}
        />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCentered>
      <div style={{ textAlign: 'center', position: 'fixed', bottom: 10, width: '100%' }}>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          浙ICP备2023020062号-7
        </a>
      </div>
    </>
  );
}

export default Welcome;
