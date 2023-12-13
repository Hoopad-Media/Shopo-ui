import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PublicBaseUrl } from "../../utils/apiRequest";
// import settings from "../../utils/settings";

function Maintain() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [maintain, setMaintain] = useState(null);
  useEffect(() => {
    if (websiteSetup) {
      setMaintain(websiteSetup?.payload.maintainance);
    }
  }, [websiteSetup]);
  // const { logo } = settings();
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        {maintain && (
          <div className=" text-center">
            <div className="mb-5">
              {maintain && (
                <Image
                  width="300"
                  height="300"
                  objectFit="scale-down"
                  src={`${PublicBaseUrl + maintain.image}`}
                  alt="logo"
                />
              )}
            </div>
            <div className="w-full flex justify-center">
              <p className="text-center text-3xl text-tblack w-4/5 font-bold">
                {maintain.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Maintain;
