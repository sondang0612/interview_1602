import Image from "next/image";
import React from "react";

export type IconName = "X" | "O" | "X-stroke" | "O-stroke";

interface Props {
  name: IconName;
  className?: string;
}

const Icon = (props: Props) => {
  const { className, name } = props;

  const imageProps = React.useMemo(() => {
    switch (name) {
      case "O":
        return {
          src: "/assets/o.svg",
          alt: "O",
        };
      case "X":
        return {
          src: "/assets/x.svg",
          alt: "X",
        };
      case "X-stroke":
        return {
          src: "/assets/x-stroke.svg",
          alt: "X Stroke",
        };
      case "O-stroke":
        return {
          src: "/assets/o-stroke.svg",
          alt: "O Stroke",
        };
      default:
        return {
          src: "/assets/o.svg",
          alt: "O",
        };
    }
  }, [name]);

  return (
    <div className={className}>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full"
      />
    </div>
  );
};

export default Icon;
