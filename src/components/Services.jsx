import ServiceData from "../Data/ServiceData";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <>
      {ServiceData.map((item) => (
        <>
          <motion.section
            className={`${item.bgColor} w-[20rem]  p-5 rounded-lg`}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex gap-3">
              <span className="w-[4rem] h-[4rem] bg-green-800 flex justify-center rounded-full">
                <img
                  width={"50px"}
                  className="text-white"
                  src={item.icone}
                  alt="icons"
                />
              </span>
              <div>
                <h3 className="text-xl font-medium text-[#111143]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 ">{item.subtiltle}</p>
              </div>
            </div>
          </motion.section>
        </>
      ))}
    </>
  );
};

export default Services;
