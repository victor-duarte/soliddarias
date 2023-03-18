import classnames from "classnames";
import Image from "next/image";

type AvatarProps = {
  className?: string;
  src: string;
};

const Avatar = ({ className, src }: AvatarProps) => {
  const cx = classnames("w-24 rounded-full", className);

  return <Image alt="" className={cx} height="96" src={src} width="96" />;
};

export default Avatar;
