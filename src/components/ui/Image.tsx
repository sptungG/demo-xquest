import queryString from "query-string";
import { ForwardRefRenderFunction, forwardRef, useId, useState } from "react";
import { cn } from "../../utils/utils";
import { NOT_FOUND_IMG } from "../../utils/constants";


type TImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  classNameFallback?: string;
  fallback?: string;
  /**
   * Điền tên item để có thể Fallback Ảnh theo tên
   */
  alt?: string;
};

/**
 * Normal Image
 */
const Image: ForwardRefRenderFunction<HTMLImageElement, TImageProps> = (
  { src, alt = "", classNameFallback, fallback = NOT_FOUND_IMG, className, ...props },
  forwardedRef
) => {
  const uid = useId();
  const [internalSrc, setInternalSrc] = useState<string>(String(src));

  return (
    <img
      key={uid + String(internalSrc)}
      onError={() => {
        const fallbackSrc = !!alt
          ? `https://ui-avatars.com/api/?${queryString.stringify({
              name: alt,
              background: "acc981",
              color: "fff",
            })}`
          : fallback;
        setInternalSrc(fallbackSrc);
      }}
      ref={forwardedRef}
      src={internalSrc}
      alt={alt || uid}
      className={cn(className, !src || internalSrc !== src ? classNameFallback : "")}
      {...props}
    />
  );
};

export default forwardRef(Image);
