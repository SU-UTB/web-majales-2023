type Props = {
  imgDesktop: string;
  imgMobile: string;
  imgAlt: string;
};

const ResponsivePicture = ({ imgDesktop, imgMobile, imgAlt }: Props) => {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={imgMobile} />
      <source media="(min-width: 768px)" srcSet={imgDesktop} />
      <img
        className="block object-cover object-center w-full h-full"
        src={imgMobile}
        alt={imgAlt}
      />
    </picture>
  );
};

export default ResponsivePicture;
