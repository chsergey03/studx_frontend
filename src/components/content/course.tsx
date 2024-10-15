import Layout from "../core/layout.tsx";
import Main from "../core/main_content.tsx";
import Element from "./element.tsx"

import { useParams } from "react-router-dom";

function Course() {
  const { id } = useParams();

  const tasks = [];
  const numberOfTasks = 6;

  for (let i = 0; i < numberOfTasks; i++) {
    const number = i + 1;

    tasks.push(
      <Element title={`Задание ${number}`} />
    );
  }

  return (
    <Layout isNecessaryToDisplayProfileIcon={true}>
      <Main
        headerTitle={`Курс ${id}`}
        content={
          <>
            <div
              className="
                flex
                flex-col
              "
            >
              {tasks}
            </div>
          </>}
      />
    </Layout>
  );
}

export default Course;