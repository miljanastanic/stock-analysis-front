import { useHistory, useParams } from "react-router-dom";
import useFetch from "../FetchData/UseFetch";
import { Link } from "react-router-dom";

const DocumentationDetails = () => {
  const { id } = useParams();
  const { values } = useFetch("http://localhost:5000/docs/" + id);

  console.log(values);
  return (
    <div className="column docs-details">
      <div className="row">
        <h2>Details</h2>
      </div>
      <div className="row">
        {values && (
          <article>
            <h1>{values.title}</h1>
            <p>Part of the project: {values.project}</p>
            <div>{values.body}</div>
          </article>
        )}
        <div className="row text-center">
          <Link to="/documentation">
            <button
              type="button"
              className="btn text-center w-25 p-3 btn-outline-dark rounded-pill"
            >
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentationDetails;
