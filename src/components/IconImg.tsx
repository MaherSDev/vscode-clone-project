interface IProps {
  src: string;
}

const IconImg = ({ src }: IProps) => {
  return <img src={src} alt="icon" className="w-5 h-5" />;
};

export default IconImg;
