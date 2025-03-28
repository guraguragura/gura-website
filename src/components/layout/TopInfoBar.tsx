
import React from "react";
import { Link } from "react-router-dom";
import { TruckIcon } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-[#33C3F0] text-white py-2 text-sm">
      <div className="mx-auto w-[80%] px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TruckIcon className="h-4 w-4 mr-2" />
            <p>Free delivery on orders over RWF 30,000</p>
          </div>
          <div>
            <Link to="/app" className="hover:underline">
              Download the Gura App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
