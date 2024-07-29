import Image from "next/image";

export default function FrostedImage({
  src,
  alt,
  text,
}: Readonly<{
  src: string;
  alt: string;
  text?: string;
}>) {
  return (
    // <div className="relative">
    <div className="relative h-full w-full">
      <Image
        src={src}
        alt={alt}
        width={1024}
        height={0}
        quality={100}
        className="rounded-lg object-cover w-full h-auto"
      />
      <div
        className="absolute h-1/4 inset-x-0 bottom-0 backdrop-blur-2xl filter rounded-lg
        frost
        "
      />
    </div>
  );
}
