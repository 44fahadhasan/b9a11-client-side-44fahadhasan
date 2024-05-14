import PropTypes from "prop-types";
import { BiSolidCommentDetail } from "react-icons/bi";
import Iframe from "react-iframe";

const MyAttemptedAssignmentCard = ({
  assignment: {
    fdfDocLink,
    assignmentStatus,
    assignmentTitle,
    assignmentMarks,
    feedback,
    obtainedMarks,
  },
} = {}) => {
  return (
    <section className="text-center transform duration-500 hover:-translate-y-2 ">
      <div className="shadow p-5 rounded-lg border-t-4 border-[#0EB582] hover:border-primary transition-all ease-in-out duration-500  bg-base-300">
        <div className="mb-10 rounded-md bg-base-200">
          <Iframe
            url={fdfDocLink}
            className="w-full h-80 rounded-md"
            display="block"
            position="relative"
          />
        </div>

        <p className="font-medium text-primary">
          Status:{" "}
          <span className="text-base-content text-sm opensans">
            {assignmentStatus}
          </span>
        </p>

        <p className="mt-4 text-3xl font-medium">
          {assignmentMarks}{" "}
          <span className="text-base font-normal">/Assignment marks</span>
        </p>

        {obtainedMarks && (
          <p className="mt-4 text-3xl font-medium">
            0 <span className="text-base font-normal">/Obtained marks</span>
          </p>
        )}

        <div className="divider divider-start"></div>

        <p className="mt-5 font-medium text-base-content text-xl text-left ">
          {assignmentTitle}
        </p>

        <div className="mt-2">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-primary gap-1 font-medium">
              <BiSolidCommentDetail />
              Feedback:{" "}
              <span className="text-base-content text-sm font-medium opensans">
                {(feedback && { feedback }) || "No feedback here"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

MyAttemptedAssignmentCard.propTypes = {
  assignment: PropTypes.object,
};

export default MyAttemptedAssignmentCard;
