import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosURL from "../../hooks/useAxiosURL";
import AssignmentCard from "../shared/AssignmentCard/AssignmentCard";
import SectionContent from "../shared/SectionContent/SectionContent";
import Tost from "../shared/Tost/Tost";

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");

  // pagination
  const [activePageNumber, setActivePageNumber] = useState(0);
  const [totalAssignmentNumber, setTotalAssignmentNumber] = useState(0);

  const parPageAssignment = 6;
  const numberOfPage = Math.ceil(totalAssignmentNumber / parPageAssignment);

  const pagesNumber = [];
  for (let i = 0; i < numberOfPage; i++) {
    pagesNumber.push(i);
  }

  const handlePreviousPage = () => {
    if (activePageNumber > 0) {
      setActivePageNumber(activePageNumber - 1);
    }
  };

  const handleNextPage = () => {
    if (activePageNumber < pagesNumber.length - 1) {
      setActivePageNumber(activePageNumber + 1);
    }
  };
  // pagination

  const axiosOpenURL = useAxiosURL();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axiosOpenURL
      .get(`countAssignment`)
      .then((response) => {
        setTotalAssignmentNumber(response?.data?.totalAssignmentNumber);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosOpenURL]);

  useEffect(() => {
    if (filter === "All") {
      axiosOpenURL
        .get(`/assignments?page=${activePageNumber}&size=${parPageAssignment}`)
        .then((response) => {
          setAssignments(response?.data);
        })
        .catch((error) => {
          console.error(error?.message);
        });
      return;
    }

    axiosOpenURL
      .get(
        `/queryAssignments?level=${filter}&page=${activePageNumber}&size=${parPageAssignment}`
      )
      .then((response) => {
        setAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [activePageNumber, axiosOpenURL, filter]);

  //

  useEffect(() => {
    axiosOpenURL
      .get(`/assignments?page=${activePageNumber}&size=${parPageAssignment}`)
      .then((response) => {
        setAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [activePageNumber, axiosOpenURL]);

  // handleDelete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete api start
        axiosOpenURL
          .delete(`/assignments/${id}`)
          .then((response) => {
            if (response?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "assignment deleted successfully",
                icon: "success",
              });

              // refresh ui
              const reamingAssignment = assignments.filter(
                (assignment) => assignment?._id !== id
              );
              setAssignments(reamingAssignment);
            }
          })
          .catch((error) => {
            toast.error(error?.message);
          });
        // delete api end
      }
    });
  };

  // handle filter by level
  const onSubmit = (data) => {
    const level = data?.assignmentDifficultylevel;
    setFilter(level);
  };

  return (
    <section className="poppins flex flex-col items-center bg-base-100 py-[70px]">
      <div className="container w-[87%] mx-auto">
        <Tost />
        <div>
          <SectionContent
            topContent="available all Assignment here"
            title="Get ready to dive into assignment"
            bottomContent="This page is your hub for all upcoming tasks, due dates, and important information. Stay focused, stay organized, and ace your assignments"
          />
        </div>

        <div className="flex flex-col mt-10">
          <form onChange={handleSubmit(onSubmit)}>
            <div className="flex justify-center">
              <div className="w-80">
                <select
                  name="assignmentDifficultylevel"
                  {...register("assignmentDifficultylevel")}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#E9E9E9] text-secondary-content outline-none focus:border-primary bg-base-100"
                >
                  <option disabled selected>
                    Filter By Level
                  </option>
                  <option value="All">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment?._id}
              assignment={assignment}
              handleDelete={handleDelete}
              isShow={true}
            />
          ))}
        </div>

        {/* pagination */}
        <div className="flex flex-col items-center mt-8">
          <nav title="Page navigation example">
            <div className="flex gap-3">
              {/* previous button */}
              <button
                onClick={handlePreviousPage}
                className="btn btn-sm active:bg-primary"
                title="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>

              {/* pages number */}
              {pagesNumber.map((pageNumber) => (
                <button
                  onClick={() => setActivePageNumber(pageNumber)}
                  className={`btn btn-sm ${
                    pageNumber === activePageNumber && "btn-primary"
                  }`}
                  key={pageNumber}
                >
                  {pageNumber}
                </button>
              ))}

              {/* next button */}
              <button
                onClick={handleNextPage}
                className="btn btn-sm active:bg-primary"
                title="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AssignmentsPage;
