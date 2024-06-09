import "./Experience.css";
import { DockBar } from "../../components/dockbar/DockBar";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mt-10 dark:text-white">
        <div>
          <h1 className="text-7xl font-medium">Experiencia</h1>
        </div>
        <div></div>
      </section>
      <DockBar />
    </>
  );
};

export default Experience;
