import RemEle from "./RemEle";
import UpdPos from "./UpdPos";
import "../Styles/list.css";

export default function List({ list, setList }) {
  return (
    <div>
      {list.map((work) => {
        let trimWork = work.work?.trim();
        let workShow = (
          <>
            <div className="listDiv">
              <span>{work.id + 1}</span>
              <button
                className={`listElement ${work.checked}`}
                onClick={() => {
                  let newList = list;
                  let index = work.id;
                  if (newList[index].checked === "checked") {
                    newList[index].checked = "unchecked";
                  } else {
                    newList[index].checked = "checked";
                  }
                  setList([...newList]);
                }}
                onDoubleClick={() => {
                  let newList = list;
                  let index = work.id;

                  if (newList[index].pin !== true) {
                    newList[index].pin = true;

                    let newWork = "pinned: " + trimWork;

                    newList[index].work = newWork;

                    let pinWorkList = newList.filter((pinned) => {
                      return pinned.pin === true;
                    });

                    pinWorkList.map((ele, index) => {
                      return (ele.pinrank = index + 1);
                    });

                    let unPinWorkList = newList.filter((pinned) => {
                      return pinned.pin !== true;
                    });
                    let newShownList = pinWorkList.concat(unPinWorkList);

                    newShownList.map((ele, index) => {
                      return (ele.id = index);
                    });

                    setList([...newShownList]);
                  } else {
                    let newlist = list;
                    let index = work.id;

                    newlist[index].pin = false;

                    let oldSchd = newlist[index].work;
                    let newSchd = oldSchd.replace("pinned: ", "");

                    newlist[index].work = newSchd;

                    setList([...newList]);
                  }
                }}
              >
                {trimWork}
              </button>
              <RemEle id={work.id} list={list} setList={setList}></RemEle>
              <UpdPos id={work.id} list={list} setList={setList}></UpdPos>
            </div>
          </>
        );

        return workShow;
      })}
    </div>
  );
}
