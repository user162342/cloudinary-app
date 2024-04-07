'use client';

import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

export default function Home() {
  const [imageId, setImageId] = useState('uiuiuuevtfg5hhjed27p');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          tint="70:blue:purple"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
