'use client';
import Heart from '@/components/icons/heart';
import { CldImage } from 'next-cloudinary';
import cloudinary from "cloudinary"

export function CloudinaryImage(props: any & { publicId:string}) {
  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart 
        onClick={() = {
        cloudinary.v2.uploader.add_tag("favorite",[props.publicId]),
      }} 
      className="absolute top-2 right-2" />
    </div>
  );
}
