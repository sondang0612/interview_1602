import Icon from "@/components/Icon";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full p-10">
      <div className="w-full h-full p-10 border border-solid border-red-500 bg-blue-200">
        <div className="grid grid-cols-4 gap-4">
          <Icon name="O" className="size-5" />
          <Icon name="O-stroke" className="h-4 w-4" />
          <Icon name="X" className="h-4 w-4" />
          <Icon name="X-stroke" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default page;
