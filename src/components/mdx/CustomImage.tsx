import Image, { ImageProps } from 'next/image';

export function CustomImage(props: ImageProps) {
  return (
    <div className="my-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
      <Image
        {...props}
        className="w-full h-auto object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
  );
}
