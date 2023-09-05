import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";
import { SlGraph } from "react-icons/sl";
import { VscTools } from "react-icons/vsc";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

// Define a functional component called ManagementServices
const ManagementServices = () => {
  return (
    // Container div for the component with specific styling
    <div className="min-h-screen px-4 py-8  md:p-10 max-w-screen-lg mx-auto">
      {/* Main heading for the section */}
      <h1 className="font-primary font-semibold tracking-wide text-3xl text-center mt-8">
        MANAGEMENT SERVICES
      </h1>
      {/* Subheading */}
      <h1 className="tracking-widest text-xl text-center mt-4 text-secondary">
        OWNERSHIP WITHOUT THE HASSLE
      </h1>
      {/* Grid layout for service sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-full max-w-screen-xl mx-auto">
        {/* Service section 1: Rent Invoicing */}
        <div className="min-h-[150px]  w-full flex gap-5">
          <div className="mt-[-4px]">
            {/* Icon for Rent Invoicing */}
            <HiOutlineDocument />
          </div>
          <div>
            {/* Title for the service */}
            <h2 className="font-primary font-semibold text-xl mb-1">
              RENT INVOICING
            </h2>
            {/* Description of the service */}
            <p className="text-secondary">
              In order to help your tenants stay on top of rent payments, we
              send out monthly invoices (including a detailed breakdown of
              charges to their account) to remind them payment is coming due.
            </p>
          </div>
        </div>
        {/* Repeat the same structure for other service sections */}
        {/* Service section 2: Rent Collection */}
        {/* Service section 3: Expenses */}
        {/* Service section 4: Repair & Maintenance */}
        {/* Service section 5: Financial Reporting */}
        {/* Service section 6: Apartment Turnover Service */}
      </div>
    </div>
  );
};

// Export the ManagementServices component as the default export
export default ManagementServices;
