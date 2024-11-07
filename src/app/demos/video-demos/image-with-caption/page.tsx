import { Image } from "@/components/Image";
export default () => {
  return (
    <figure>
      <Image
        alt="The Mona Lisa digitally retouched to reduce the effects of ageing."
        src="/images/demos/image-with-caption/mona-lisa.jpg"
        className="my-2	max-w-md"
      />
      <figcaption className="text-xs text-gray-500">
        The famous Mona Lisa Portrait
      </figcaption>
    </figure>
  );
};
