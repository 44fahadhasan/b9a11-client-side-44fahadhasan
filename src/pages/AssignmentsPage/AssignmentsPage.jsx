import { useEffect, useState } from "react";
import useAxiosURL from "../../hooks/useAxiosURL";
import AssignmentCard from "../shared/AssignmentCard/AssignmentCard";

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);

  const axiosOpenURL = useAxiosURL();

  useEffect(() => {
    axiosOpenURL
      .get("/assignments")
      .then((response) => {
        setAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosOpenURL]);

  return (
    <section className="poppins flex flex-col items-center bg-base-100">
      <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment?._id} assignment={assignment} />
        ))}
      </div>
    </section>
  );
};

export default AssignmentsPage;
