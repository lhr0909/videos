import { FC } from 'react';
import { Composition } from 'remotion';
import { BrowserWindow } from './BrowserWindow';

export const RemotionVideo: FC = () => {
  return (
    <>
      <Composition
        id="browser"
        component={BrowserWindow}
        defaultProps={{
          url: 'https://openai.com',
        }}
        durationInFrames={300}
        fps={60}
        width={1920}
        height={1080}
      />
    </>
  );
};
