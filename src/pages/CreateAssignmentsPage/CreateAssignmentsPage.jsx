import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SectionContent from "../shared/SectionContent/SectionContent";

const CreateAssignmentsPage = () => {
  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const title = data.title;
    const description = data.description;
    const marks = data.marks;
    const thumbnailImageUrl = data.thumbnailImageUrl;
    const level = data.assignmentDifficultylevel;
    const dueDate = startDate;
    const status = "pending";
    const creatorEmail = user.email;

    const newAssignment = {
      title,
      description,
      marks,
      thumbnailImageUrl,
      level,
      dueDate,
      status,
      creatorEmail,
    };

    console.log(newAssignment);
  };

  return (
    <section className="py-[70px] container w-[87%] mx-auto">
      <div>
        <SectionContent
          title="Craft New Assignments"
          bottomContent="Utilize our streamlined interface to design engaging and informative assignments tailored to your  requirements. "
        />
      </div>
      <div className="w-full mt-[70px] shadow-sm mx-auto md:w-[90%] lg:w-[80%] xl:w-[65%] border rounded-md py-10 px-5 md:px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1 text-base">
            <label className="text-sm px-1 text-base-content font-medium">
              Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              {...register("title", { required: true, maxLength: 30 })}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
            />

            {errors?.title?.type === "required" && (
              <span className="text-base-content text-xs">
                Title can&apos;t be empty
              </span>
            )}

            {errors?.title?.type === "maxLength" && (
              <span className="text-base-content text-xs">
                Title max length 30
              </span>
            )}
          </div>

          <div className="md:flex gap-5 space-y-4 md:space-y-0">
            <div className="space-y-1 text-base w-full">
              <label className="text-sm px-1 text-base-content font-medium">
                Thumbnail Image URL:
              </label>
              <input
                type="url"
                name="thumbnailImageUrl"
                placeholder="Thumbnail image url"
                {...register("thumbnailImageUrl", { required: true })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
              />
              {errors.thumbnailImageUrl && (
                <span className="text-base-content text-xs">
                  Thumbnail image url can&apos;t be empty
                </span>
              )}
            </div>
            <div className="space-y-1 text-base w-full">
              <label className="text-sm px-1 text-base-content font-medium">
                Marks:
              </label>
              <input
                type="number"
                name="marks"
                placeholder="Mark's"
                {...register("marks", { required: true, min: 10, max: 100 })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
              />

              {errors?.marks?.type === "required" && (
                <span className="text-base-content text-xs">
                  Marks can&apos;t be empty
                </span>
              )}

              {errors?.marks?.type === "min" && (
                <span className="text-base-content text-xs">
                  Marks min value 10
                </span>
              )}

              {errors?.marks?.type === "max" && (
                <span className="text-base-content text-xs">
                  Marks max value 100
                </span>
              )}
            </div>
          </div>

          <div className="md:flex gap-5 space-y-4 md:space-y-0">
            <div className="space-y-1 text-base w-full">
              <label className="text-sm px-1 text-base-content font-medium">
                Difficulty Level:
              </label>
              <select
                name="assignmentDifficultylevel"
                {...register("assignmentDifficultylevel", { required: true })}
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              {errors.assignmentDifficultylevel && (
                <span className="text-base-content text-xs">
                  Assignment difficulty level can&apos;t be empty
                </span>
              )}
            </div>
            <div className="space-y-1 text-base w-full">
              <label className="text-sm px-1 text-base-content font-medium">
                Due Date:
              </label>
              <div className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100">
                <ReactDatePicker
                  showIcon
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="bg-base-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-1 text-base">
            <label className="text-sm px-1 text-base-content font-medium">
              Description:
            </label>
            <textarea
              rows={5}
              placeholder="Description"
              name="description"
              {...register("description", { required: true, maxLength: 200 })}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
            />

            {errors?.description?.type === "required" && (
              <span className="text-base-content text-xs">
                Description can&apos;t be empty
              </span>
            )}

            {errors?.description?.type === "maxLength" && (
              <span className="text-base-content text-xs">
                Description max length 200
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary">
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

CreateAssignmentsPage.propTypes = {};

export default CreateAssignmentsPage;
