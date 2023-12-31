import "../Styles/buttons.css";

//function to update position of list items
export default function UpdPos({ id, list, setList }) {
  let newList = list;

  function handleUp() {
    if (id - 1 >= 0 && list[id - 1].pin !== true) {
      [newList[id - 1], newList[id]] = [newList[id], newList[id - 1]];
    }
    newList.map((work, index) => {
      work.id = index;
      return work;
    });
    setList([...newList]);
  }

  function handleDown() {
    if (id + 1 < newList.length && list[id].pin !== true) {
      [newList[id], newList[id + 1]] = [newList[id + 1], newList[id]];
    }
    newList.map((work, index) => {
      work.id = index;
      return work;
    });
    setList([...newList]);
  }

  return (
    <>
      <button onClick={handleUp} className="updButton">
        up
      </button>
      <button onClick={handleDown} className="updButton">
        down
      </button>
    </>
  );
}
