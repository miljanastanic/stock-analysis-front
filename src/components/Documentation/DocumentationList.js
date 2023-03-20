import { Link } from "react-router-dom";
import "./Documentation.css";

const DocumentationList = ({ docs }) => {
  return (
    <div className="column docs-list">
      {docs.blogs.map((doc) => (
        <div className="docs-preview" key={doc.id}>
          <Link to={`/documentation/${doc.id}`}>
            <h2>{doc.title}</h2>
            <p>Part of the project: {doc.project}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DocumentationList;
