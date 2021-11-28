import { FC } from 'react';
import { IFrame } from 'remotion';

interface WebsiteProps {
	url: string;
}

export const Website: FC<WebsiteProps> = ({ url }: WebsiteProps) => {
	return (
		<IFrame
			src={url}
			width={1920}
			height={1080 - 8 - 32 - 48}
			style={{
				overflow: 'hidden',
			}}
			scrolling="no"
		/>
	);
};
