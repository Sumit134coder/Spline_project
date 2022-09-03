import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { motion , useTime , useTransform  } from "framer-motion";

function Home() {

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });


  return (
    <div className="h-screen flex w-full justify-center items-center">
      {/* ----text container------- */}
      <div className="w-1/2 bg-[#F9ECED] h-full flex justify-center items-center flex-col">
        <motion.div
        whileHover={{
          // x:[0 , -10 , 10 , -10 , 0],
          scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 30, -30, 0],
            transition :{ ease: "easeOut" , duration:3 },
            }}
          // onTap = {{
          //    x:[0 , -10 , 10 , -10 , 0],
          //   // rotate: [0, 0, 30, -30, 0],
          //   transition :{ ease: "easeOut" , duration:3 }
          // }}  
          animate={{
            x:[-20 , 0 , 4 , -4 , 0],
            scale: [1, 1.2, 1.2, 1.2, 1],
            // rotate: [0, 0, 30, -30, 0],
          }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="bg-white px-8 py-4 rounded-lg shadow flex flex-col gap-4"
        >
          <h4 className="text-5xl font-bold">Welcome</h4>
          <h5>Drag over the image to interact</h5>
        </motion.div>
      </div>
      <div className="w-1/2 h-full">
        <Spline scene="https://prod.spline.design/vtcQ8PcT7FvMz6nZ/scene.splinecode" />
      </div>
    </div>
  );
}

export default Home;
