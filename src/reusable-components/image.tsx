import NextImage from "next/image";
import type { ImageProps } from "next/image";
import { forwardRef } from "react";

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
  <NextImage {...props} ref={ref} />
));

Image.displayName = "Image";

export default Image;
