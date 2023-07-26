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
