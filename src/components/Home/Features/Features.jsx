import SectionTitle from "../../SectionTitle/SectionTitle";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSpatialTracking } from "react-icons/md";

const Features = () => {
  return (
    <div className="my-12">
      <SectionTitle title="Features" />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mt-8">
        <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 p-0.5">
          <div className="text-center flex flex-col p-3 h-full w-full items-center justify-center bg-white back">
            <AiFillSafetyCertificate className="text-4xl " />
            <h1
              className="text-xl font-bold my-1
            "
            >
              Parcel Safety
            </h1>
            <p className="text-justify text-sm">
              Our top priority is ensuring the safety and security of your
              parcels throughout their journey. Benefit from state-of-the-art
              security measures to protect your shipments.
            </p>
          </div>
        </div>
        <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 p-0.5">
          <div className="text-center flex flex-col p-3 h-full w-full items-center justify-center bg-white back">
            <TbTruckDelivery className="text-4xl " />
            <h1 className="text-xl font-bold my-1">Super Fast Delivery</h1>
            <p className="text-justify text-sm">
              Experience lightning-fast delivery services that prioritize speed
              without compromising reliability. Your parcels will reach their
              destination swiftly and efficiently.
            </p>
          </div>
        </div>
        <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-indigo-500 p-0.5">
          <div className="text-center flex flex-col p-3 h-full w-full items-center justify-center bg-white back">
            <MdSpatialTracking className="text-4xl " />
            <h1 className="text-xl font-bold my-1">Tracking Precision</h1>
            <p className="text-justify text-sm">
              Gain real-time visibility into the precise location and status of
              your parcels. Our advanced tracking system ensures you are always
              informed about your shipments journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
