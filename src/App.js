import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchData, getAcctress } from "./app/acctressSlice";
import AcctressList from "./components/AcctressList";

const randomIndex = (arr) => {
  var index = -1;
  if (arr.length > 0) {
    index = Math.trunc(Math.random() * arr.length);
  }
  return index;
};

function App() {
  const dispatch = useDispatch();
  const acctressList = useSelector((state) => state.acctress.list);
  const acctress = useSelector((state) => state.acctress.acctress);

  useEffect(() => {
    const action = fetchData();
    dispatch(action);
  }, [dispatch]);

  // Random on first load
  useEffect(() => {
    const newIndex = randomIndex(acctressList);
    if (newIndex !== -1) {
      const newAcctress = acctressList[newIndex];
      const action = getAcctress(newAcctress);
      dispatch(action);
    }
  }, [acctressList, dispatch]);

  // Random On Click
  const randomAcctressOnClick = (acctressList) => {
    const newIndex = randomIndex(acctressList);
    if (newIndex !== -1) {
      const acctress = acctressList[newIndex];
      const action = getAcctress(acctress);
      dispatch(action);
    }
  };

  return (
    <div className="app">
      <h1>Random Japanese Acctress</h1>

      <div className="acctress-list">
        <AcctressList acctress={acctress} />
        <button
          className="btn"
          onClick={() => randomAcctressOnClick(acctressList)}
        >
          New Acctress
        </button>
      </div>
    </div>
  );
}

export default App;
