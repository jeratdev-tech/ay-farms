import { milestone } from "../constants";
import { MilestoneCard } from "../components";

const Milestones = () => {
  return (
    <div>
      <div className="flex flex-col justify-start">
        <h2 className="text-4xl font-palanquin font-bold text-center py-16">
          Milestones and Achievements
        </h2>
      </div>
      <div className="max-w-[100] m-auto flex justify-center flex-wrap gap-9">
        {milestone.map((milestone) => (
          <MilestoneCard key={milestone.label} {...milestone} />
        ))}
      </div>
    </div>
  );
};

export default Milestones;
