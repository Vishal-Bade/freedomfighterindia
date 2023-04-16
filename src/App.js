import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center bg-danger"> Freedom Fighters of India </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4" >
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    title={val.title}
                    imgsrc={val.imgsrc}
                    note={val.note}
                    link={val.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
