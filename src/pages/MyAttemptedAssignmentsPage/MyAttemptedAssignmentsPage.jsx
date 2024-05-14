import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiousSecureURL from "../../hooks/useAxiousSecureURL";
import MyAttemptedAssignmentCard from "../shared/MyAttemptedAssignmentCard/MyAttemptedAssignmentCard";
import SectionContent from "../shared/SectionContent/SectionContent";
import Tost from "../shared/Tost/Tost";

const MyAttemptedAssignmentsPage = () => {
  const [submittedAssignments, setSubmittedAssignments] = useState([]);

  const axiosSecureURL = useAxiousSecureURL();

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    axiosSecureURL
      .get(`/submittedAssignments/${email}`)
      .then((response) => {
        setSubmittedAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosSecureURL, email]);

  console.log(submittedAssignments);

  return (
    <section className="poppins bg-base-100 py-[70px]">
      <div className="container w-[87%] mx-auto">
        <Tost />
        <div>
          <SectionContent
            topContent="available all Submittion assignment here"
            title="Your Assignment Journey"
            bottomContent="You'll find a glimpse into your journey of growth and development through the assignments you have tackled."
          />
        </div>
        {/* card  */}
        <div className="mt-16  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {submittedAssignments.map((assignment) => (
            <MyAttemptedAssignmentCard
              key={assignment?._id}
              assignment={assignment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyAttemptedAssignmentsPage;
