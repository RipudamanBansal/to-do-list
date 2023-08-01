import { useState } from "react";
import "../Styles/toAdd.css";
import List from "./list";

export default function ToAdd() {
  const [list, setList] = useState([]);

  let newList = {};

  function handleChange(e) {
    newList[e.target.name] = e.target.value;
  }

  function handleAdd(e) {
    e.preventDefault();
    if (newList.work?.trim() !== undefined) {
      setList([
        ...list,
        {
          ...newList,
          id: list.length,
          checked: "unchecked",
          pin: false,
        },
      ]);
    }
  }

  let completed_work = list.filter((work) => {
    return work.checked === "checked";
  });

  return (
    <>
      <form className="form">
        <input
          type="text"
          name="work"
          onChange={handleChange}
          placeholder="Schedule your work"
          id="work"
        />

        <button onClick={handleAdd} className="addButton">
          Add
        </button>
      </form>

      <div>
        <h2>
          Completed: {completed_work.length}/{list.length}
        </h2>
        <List list={list} setList={setList}></List>
      </div>
    </>
  );
}
