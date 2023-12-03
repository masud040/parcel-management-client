import PropTypes from "prop-types";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const DeliveryManCard = ({ man }) => {
  const { name, image, total_delivery, avg_rating } = man || {};
  return (
    <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 p-0.5">
      <div className=" flex  flex-col h-full w-full items-start justify-center bg-white back">
        <img src={image} className="w-full h-full" alt="" />
        <div className="px-4 my-2">
          <h3 className="text-xl  font-semibold">{name}</h3>
          <span className="flex items-center gap-2 text-lg font-semibold my-1">
            <p>Average Deliver:</p>
            <p>{total_delivery}</p>
          </span>
          <span className="flex items-center gap-2 text-xl">
            <Rating
              initialRating={avg_rating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar className="text-rose-400" />}
            />
            <p>({avg_rating})</p>
          </span>
        </div>
      </div>
    </div>
  );
};

DeliveryManCard.propTypes = {
  man: PropTypes.object,
};

export default DeliveryManCard;
