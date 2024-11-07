import React from 'react';
import { Image } from './Image';

type ImageProps = {
  src: string;
  type?: 'left' | 'right' | 'fill';
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

export function InlineImage({ type, className, ...props }: ImageProps) {
  return (
    <div
      className={
        (type === 'right'
          ? 'w-3/5 float-right'
          : type === 'left'
          ? 'w-3/5 float-left'
          : '') + ' m-3'
      }
    >
      <Image
        {...{
          className,
          ...props,
        }}
      />
    </div>
  );
}
