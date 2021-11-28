import {IFrame} from 'remotion'
import React, { FC } from 'react';
import { useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import classNames from 'classnames/dedupe';

const Container = styled.div`
  width: 1920px;
  height: 1080px;
`;

const Toolbar = styled.div``;
const ThreeButtons = styled.div``;
const Dot = styled.div`
  border-radius: 50%;
`;
const AddressBar = styled.div``;

interface BrowserWindowProps {
  url: string;
  children?: React.ReactNode;
}

export const BrowserWindow: FC<BrowserWindowProps> = ({ url, children }: BrowserWindowProps) => {
  const frame = useCurrentFrame();

  return (
	<Container className="flex flex-col border-4 border-gray-300 bg-white">
		<Toolbar className="flex flex-row flex-grow-0 p-4 bg-gray-300">
			<ThreeButtons className="flex flex-row flex-grow-0">
				<Dot className="h-4 w-4 mt-4 mr-2 inline-block bg-red-300" />
				<Dot className="h-4 w-4 mt-4 mr-2 inline-block bg-yellow-300" />
				<Dot className="h-4 w-4 mt-4 inline-block bg-green-300" />
			</ThreeButtons>
			<AddressBar className="flex-grow rounded bg-white h-12 ml-4 pl-4 text-3xl leading-normal">
				{url.slice(0, frame / 2)}
			</AddressBar>
		</Toolbar>
		<IFrame
			className={classNames('overflow-hidden', {
        invisible: frame / 2 < url.length + 15,
      })}
			src={url}
			width={1920}
			height={1080 - 8 - 32 - 48}
			scrolling="no"
		/>
	</Container>
  );
};