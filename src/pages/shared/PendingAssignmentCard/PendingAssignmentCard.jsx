import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosURL from "../../../hooks/useAxiosURL";
import Tost from "../Tost/Tost";

const PendingAssignmentCard = ({
  handleObserver,
  assignment: {
    _id,
    assignmentTitle,
    assignmentMarks,
    examineeName,
    fdfDocLink,
    quickNode,
  },
} = {}) => {
  const axiosOpenURL = useAxiosURL();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const obtainedMarks = data?.obtainedMarks;
    const feedback = data?.feedback;
    const assignmentStatus = "completed";

    const updateAssignmentSubmittedData = {
      obtainedMarks,
      feedback,
      assignmentStatus,
    };

    axiosOpenURL
      .put(`/submittedAssignments/${_id}`, updateAssignmentSubmittedData)
      .then((response) => {
        if (response?.data?.acknowledged) {
          toast.success("Oparetion successfull");

          // clear from filed
          resetField("obtainedMarks");
          resetField("feedback");

          // refresh ui
          handleObserver(_id);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="bg-base-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="px-4 py-3">
        <h2 className="text-2xl font-black text-center p-4">
          {assignmentTitle}
        </h2>

        <div className="flex justify-center gap-2 flex-wrap">
          <span className="bg-base-300 rounded-full px-3 py-1 text-bases font-semibold  text-primary text-center">
            Examinee:{" "}
            <span className="text-base-content font-medium ">
              {examineeName}
            </span>
          </span>
        </div>

        <div className="flex justify-center my-4">
          <div className="flex flex-col items-center rounded-xl bg-base-300 px-4 py-3">
            <p className="text-base font-semibold text-primary">Marks:</p>
            <p className="text-3xl font-bold text-base-content ">
              {assignmentMarks}
            </p>
          </div>
        </div>

        <section className="mt-8 mb-3">
          <div>
            <button
              onClick={() => document.getElementById("modal").showModal()}
              className="btn btn-primary hover:bg-[#0EB582] w-full transition ease-in duration-200 font-semibold shadow-md  border-none "
            >
              Give Mark
            </button>
          </div>

          {/* modal start */}
          <dialog id="modal" className="modal modal-bottom sm:modal-middle ">
            <div className="modal-box border border-gray-300">
              {/* modal component start */}
              <Tost />
              <h2 className="text-xl font-semibold">Examinee submitted data</h2>

              <div className="text-primary space-y-1 mt-2">
                <p className="text-sm px-1 text-primary font-medium">
                  PDF/Doc Link:{" "}
                  <span className="underline text-base-content hover:text-[#9CA3AF] ml-1 transition-all duration-300">
                    <Link to={fdfDocLink}>{fdfDocLink}</Link>
                  </span>
                </p>
                <p className="text-sm px-1 text-primary font-medium">
                  Notes:{" "}
                  <span className="opensans font-normal text-base-content">
                    {quickNode}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1">
                    <div className="relative block cursor-pointer rounded-lg  p-4 focus:outline-none">
                      <div className="space-y-1 text-base w-full">
                        <label className="text-sm px-1 text-base-content font-medium">
                          Obtained Marks:
                        </label>
                        <input
                          type="number"
                          placeholder="Enter obtained marks here"
                          {...register("obtainedMarks", {
                            required: true,
                            min: 10,
                            max: assignmentMarks,
                          })}
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                        />

                        {errors?.obtainedMarks?.type === "required" && (
                          <span className="text-primary text-xs">
                            Obtained marks can&apos;t be empty
                          </span>
                        )}

                        {errors?.obtainedMarks?.type === "min" && (
                          <span className="text-primary text-xs">
                            Obtained marks min value 10
                          </span>
                        )}

                        {errors?.obtainedMarks?.type === "max" && (
                          <span className="text-primary text-xs">
                            {`Obtained marks max value ${assignmentMarks}`}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1 mt-3 text-base">
                        <label className="text-sm px-1 text-base-content font-medium">
                          Feedback:
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Enter feedback here"
                          {...register("feedback", {
                            required: true,
                            maxLength: 300,
                          })}
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                        />

                        {errors?.feedback?.type === "required" && (
                          <span className="text-primary text-xs">
                            Feedback can&apos;t be empty
                          </span>
                        )}

                        {errors?.feedback?.type === "maxLength" && (
                          <span className="text-primary text-xs">
                            Feedback max length 300
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
              {/* modal component end */}

              {/* close button */}
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-primary btn-sm btn-circle  absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          {/* modal end */}
        </section>
      </div>
    </div>
  );
};

PendingAssignmentCard.propTypes = {
  assignment: PropTypes.object,
  handleObserver: PropTypes.func,
};

export default PendingAssignmentCard;
