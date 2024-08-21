import React, { memo } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const DataLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center pb-5"
      style={{ marginTop: "7rem" }}
    >
      <PuffLoader color={"#215C4F"} size={60} />
    </div>
  );
};
export default memo(DataLoader);
