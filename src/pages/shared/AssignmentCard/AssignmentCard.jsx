import PropTypes from "prop-types";
import { GrView } from "react-icons/gr";
import { MdDateRange, MdDeleteForever, MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";

const AssignmentCard = ({
  assignment: {
    _id,
    title,
    description,
    marks,
    thumbnailImageUrl,
    level,
    dueDate,
  } = {},
  handleDelete,
}) => {
  return (
    <article className="mb-4 group overflow-hidden rounded-xl border shadow-md duration-500 ease-in-out hover:shadow-xl">
      {/* card top */}
      <div className="relative overflow-hidden">
        {/* img */}
        <div>
          <img
            className="w-full object-cover h-[233px]"
            src={
              thumbnailImageUrl ||
              "https://i.ibb.co/0ckKbwn/240-F-309598037-Frf-MLAf-TQrsts-Vg5-SZMa-GH1-Uef6s69-EB.jpg"
            }
          />
        </div>

        {/* img opacity */}
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>

        {/* level */}
        <div className="absolute bottom-0 left-0 bg-primary px-3 py-2 text-white rounded-tr-lg text-sm">
          {level}
        </div>

        {/* marks */}
        <div className="text-sm absolute top-0 left-0 bg-primary px-4 text-white rounded-full h-14 w-14 flex flex-col items-center justify-center mt-1 ml-1">
          <span className="font-bold">{marks}</span>
          <small className="font-medium">Marks</small>
        </div>

        {/* delete,update,view button */}
        <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
          {/* delete */}
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center justify-center h-10 w-10 bg-primary rounded-full text-white"
          >
            <MdDeleteForever className="h-6 w-6" />
          </button>

          {/* update */}
          <Link
            to={`/Update/${_id}`}
            className="flex items-center justify-center h-10 w-10 bg-primary rounded-full text-white"
          >
            <MdEditSquare className="h-5 w-5" />
          </Link>
          {/*  */}

          {/* view */}
          <Link
            to={`/Assignment-Details/${_id}`}
            className="flex items-center justify-center h-10 w-10 bg-primary rounded-full text-white"
          >
            <GrView className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* card bottom */}
      <div className="p-6">
        <div className="pb-1">
          <h2 className="text-[22px] font-bold">{title?.slice(0, 25)}</h2>
        </div>

        <p className="opensans text-[15px]">{description?.slice(0, 70)} ...</p>

        <div className="pt-4 flex flex-row items-center">
          <span
            href="#"
            className="py-1 text-[15px] font-regular  mr-1 flex flex-row items-center"
          >
            <MdDateRange className="text-base  text-primary" />
            <span className="ml-1">
              {new Date(dueDate).toLocaleDateString()}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default AssignmentCard;
