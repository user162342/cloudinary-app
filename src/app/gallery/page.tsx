import React from 'react';
import cloudinary from 'cloudinary';
import UploadButton from './uploadbutton';
import { CloudinaryImage } from './cloudinaryimage';

type SearchResult = {
  public_id: string;
};

export default async function GalleryPage() {
  const response = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute();

  const results = response.resources as SearchResult[];

  return (
    <section>
      <div className="flex flex-col gap-x-8">
        <div className="flex justify-between gap-8">
          <h1 className="text-4xl font-bold ">GALLERY</h1>
          <UploadButton />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-8">
        {results.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            src={result.public_id}
            alt="an image"
            width="400"
            height="300"
          />
        ))}
      </div>
    </section>
  );
}
