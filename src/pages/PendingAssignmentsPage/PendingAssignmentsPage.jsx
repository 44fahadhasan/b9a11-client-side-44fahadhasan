import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiousSecureURL from "../../hooks/useAxiousSecureURL";
import PendingAssignmentCard from "../shared/PendingAssignmentCard/PendingAssignmentCard";
import SectionContent from "../shared/SectionContent/SectionContent";
import Tost from "../shared/Tost/Tost";

const PendingAssignmentsPage = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);

  const axiosSecureURL = useAxiousSecureURL();

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    axiosSecureURL
      .get(`/pendingAssignments/${email}`)
      .then((response) => {
        setPendingAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosSecureURL, email]);

  const handleObserver = (id) => {
    const availablePendingAssignments = pendingAssignments.filter(
      (assignment) => assignment?._id !== id
    );
    setPendingAssignments(availablePendingAssignments);
  };

  return (
    <section className="poppins bg-base-100 py-[70px]">
      <div className="container w-[87%] mx-auto">
        <Tost />
        <div>
          <SectionContent
            topContent="available all pending assignment here"
            title="Awaiting Action For Mark"
            bottomContent="This is the hub for all tasks awaiting your attention. Each item on this list is a promise of potential, waiting to be fulfilled. While they may be pending now."
          />
        </div>
        {/* card  */}

        <div className="mt-16 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-12  mb-8">
          {pendingAssignments.map((assignment) => (
            <PendingAssignmentCard
              key={assignment?._id}
              assignment={assignment}
              handleObserver={handleObserver}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

PendingAssignmentsPage.propTypes = {};

export default PendingAssignmentsPage;
