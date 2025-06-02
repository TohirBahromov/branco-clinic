import Image from "next/image";
import Flexbox from "./ui/box";

interface Props {
  img: string;
  name: string;
  position: string;
}
const DoctorButton = ({ img, name, position }: Props) => {
  return (
    <Flexbox gap={5}>
      <div className="relative w-[60px] h-[60px] rounded-full">
        <Image
          src={img}
          alt="Barno's Clinic Doctor image"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <Flexbox align="col" center={false}>
        <h1 className="text-md font-bold">{name}</h1>
        <span className="text-sm text-textColor">{position}</span>
      </Flexbox>
    </Flexbox>
  );
};

export default DoctorButton;
