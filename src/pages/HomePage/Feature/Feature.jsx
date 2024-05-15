import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosURL from "../../../hooks/useAxiosURL";
import AssignmentCard from "../../shared/AssignmentCard/AssignmentCard";
import SectionContent from "../../shared/SectionContent/SectionContent";
import Tost from "../../shared/Tost/Tost";

const Feature = () => {
  const [assignments, setAssignments] = useState([]);

  const axiosOpenURL = useAxiosURL();
  const navigate = useNavigate();

  useEffect(() => {
    axiosOpenURL
      .get(`/assignments`)
      .then((response) => {
        setAssignments(response?.data);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosOpenURL]);

  return (
    <section className="poppins flex flex-col items-center bg-base-200 py-[70px]">
      <div className="container w-[87%] mx-auto">
        <Tost />
        <div>
          <SectionContent
            topContent="Exploring Modern Education"
            title="Feature Assignments"
            bottomContent="These assignments will guide you through the process of researching, analyzing, and critically assessing AI-driven educational tools."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {assignments.slice(0, 6).map((assignment) => (
            <AssignmentCard
              key={assignment?._id}
              assignment={assignment}
              isShow={false}
            />
          ))}
        </div>
      </div>

      {assignments.length > 0 && (
        <div className="mt-7">
          <button
            onClick={() => navigate("/Assignments")}
            type="button"
            className="btn btn-sm btn-primary inline-flex items-center gap-x-2 font-bold rounded-full"
          >
            More
          </button>
        </div>
      )}
    </section>
  );
};

export default Feature;
