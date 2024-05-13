import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosURL from "../../hooks/useAxiosURL";
import Tost from "../shared/Tost/Tost";

const AssignmentDetailsPage = () => {
  const axiosOpenURL = useAxiosURL();
  const { user } = useAuth();

  const { title, description, marks, thumbnailImageUrl, level, dueDate } =
    useLoaderData() || {};

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fdfDocLink = data?.fdfDocLink;
    const quickNode = data?.quickNode;
    const assignmentStatus = "pending";
    const submittedUserEmail = user?.email;
    const assignmentMarks = marks;
    const assignmentTitle = title;

    const assignmentSubmission = {
      fdfDocLink,
      quickNode,
      assignmentStatus,
      submittedUserEmail,
      assignmentTitle,
      assignmentMarks,
    };

    axiosOpenURL
      .post("/submittedAssignments", assignmentSubmission)
      .then((response) => {
        if (response?.data?.acknowledged) {
          toast.success("Assignment submission successfull");

          // clear from filed
          resetField("fdfDocLink");
          resetField("quickNode");
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <section className="bg-base-100">
      <div className="container w-[87%] mx-auto poppins py-[70px]">
        <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 justify-items-center	 items-center	">
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:order-1">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover object-center"
                src={
                  thumbnailImageUrl ||
                  "https://i.ibb.co/0ckKbwn/240-F-309598037-Frf-MLAf-TQrsts-Vg5-SZMa-GH1-Uef6s69-EB.jpg"
                }
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:max-w-lg lg:order-2">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <div className="flex items-center uppercase">
                <p className="text-sm text-[#ff1949] font-semibold ">
                  Level:{" "}
                  <span className="text-base-content capitalize  font-medium">
                    {level}
                  </span>
                </p>

                <div className="ml-3 border-l border-gray-300 pl-3">
                  <p className="text-sm text-[#ff1949] font-semibold ">
                    Marks:{" "}
                    <span className="text-base-content capitalize  font-medium">
                      {marks}
                    </span>
                  </p>
                </div>

                <div className="flex items-center text-[#ff1949] ml-3 border-l border-gray-300 pl-3">
                  <p className="ml-2 text-sm font-semibold">
                    Date:{" "}
                    <span className="text-base-content font-medium">
                      {new Date(dueDate).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-6 opensans">
                <p className="text-base">{description}</p>
              </div>

              <section className="mt-8">
                <div>
                  <button
                    onClick={() => document.getElementById("modal").showModal()}
                    type="submit"
                    className="btn btn-primary "
                  >
                    Take assignment
                  </button>
                </div>

                {/* modal start */}
                <dialog
                  id="modal"
                  className="modal modal-bottom sm:modal-middle "
                >
                  <div className="modal-box border border-gray-300">
                    {/* modal component start */}

                    <Tost />
                    <h2 className="text-xl font-semibold">
                      Give Your Assignment Submission Data
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="">
                        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-1">
                          <div className="relative block cursor-pointer rounded-lg  p-4 focus:outline-none">
                            <div className="space-y-1 text-base w-full">
                              <label className="text-sm px-1 text-base-content font-medium">
                                PDF/Doc Link Submission:
                              </label>
                              <input
                                type="url"
                                placeholder="Enter PDF/Doc link"
                                {...register("fdfDocLink", { required: true })}
                                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                              />

                              {errors.fdfDocLink && (
                                <span className="text-primary text-xs">
                                  PDF/Doc link can&apos;t be empty
                                </span>
                              )}
                            </div>

                            <div className="space-y-1 mt-3 text-base">
                              <label className="text-sm px-1 text-base-content font-medium">
                                Quick Note:
                              </label>
                              <textarea
                                rows={5}
                                placeholder="Add a quick note"
                                {...register("quickNode", {
                                  required: true,
                                  maxLength: 300,
                                })}
                                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                              />

                              {errors?.quickNode?.type === "required" && (
                                <span className="text-primary text-xs">
                                  Quick node can&apos;t be empty
                                </span>
                              )}

                              {errors?.quickNode?.type === "maxLength" && (
                                <span className="text-primary text-xs">
                                  Quick node max length 300
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
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssignmentDetailsPage;
