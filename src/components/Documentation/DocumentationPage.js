import { useEffect, useState } from "react";
import useFetch from "../FetchData/UseFetch";
import DocumentationList from "./DocumentationList";

const DocumentationPage = () => {
  const { values } = useFetch("http://localhost:5000/docs");

  if (!values) {
    return (
      <div className="container">
        <div className="justify-content-center text-center fs-6">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="column">
        <article>
          <h2>Documentation</h2>
        </article>
        {values && <DocumentationList docs={values} />}
      </div>
    </div>
  );
};

export default DocumentationPage;
