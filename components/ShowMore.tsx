"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";
import { CustomButton } from "@components";

function ShowMore() {
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;
