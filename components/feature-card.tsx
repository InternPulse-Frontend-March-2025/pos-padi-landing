import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  itemVariants: any;
}

const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  itemVariants,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white pb-6 rounded-3xl hover:shadow-md"
    >
      <div className="bg-[#626C7A1A] w-full h-[200px] flex items-center justify-center rounded-t-3xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={345}
          height={170}
          className="w-[345px] h-[170px]"
        />
      </div>
      <div className="bg-white rounded-b-3xl p-6">
        <h3 className="text-base tracking-[0.32px] font-bold mb-4 text-[#484C52]">
          {title}
        </h3>
        <p className="text-base tracking-[0.32px] text-[#484C52]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
