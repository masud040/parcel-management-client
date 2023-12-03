import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DeliveryManCard from "../../Cards/DeliveryManCard";

const DeliveryMan = () => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryMen } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/delivery-men");
      return data;
    },
  });

  return (
    <div className="my-12">
      <SectionTitle title="Our Top Delivery Men" />
      <div className="grid   gap-6 mt-8 grid-cols-2 lg:grid-cols-4">
        {deliveryMen?.map((man) => (
          <DeliveryManCard key={man._id} man={man} />
        ))}
      </div>
    </div>
  );
};

export default DeliveryMan;
