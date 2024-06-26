import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, resolveBug, getUnresolvedBugs } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolvedBugs);
  console.log(bugs);
  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
