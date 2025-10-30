import Image from "next/image";
export default function RoundedPargraphImage({
  imageName,
  alt,
  index,
}: {
  imageName: string;
  alt: string;
  index: number;
}) {
  return (
    <div className={`relative z-${index} -ml-2 first:ml-0 grayscale-100`}>
      <Image src={`/images/${imageName}`} alt={alt} width={36} height={36} />
    </div>
  );
}
