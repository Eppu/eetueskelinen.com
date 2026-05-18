import React, { ReactNode } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  columns?: 2 | 3;
  children: ReactNode;
};

export default function ImageGallery({ columns = 2, children }: ImageGalleryProps) {
  const colClass = columns === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid gap-4 my-8 rounded-xl overflow-hidden [&_img]:!m-0 [&_span]:!h-full [&_img]:h-full [&_img]:object-cover [&_img]:rounded-md [&_img]:shadow-sm ${colClass}`}>
      {children}
    </div>
  );
}
