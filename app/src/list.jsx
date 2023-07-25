import RemEle from "./RemEle";
import UpdPos from "./UpdPos";
import "./list.css";

export default function List({ list, setList }) {
  return (
    <div>
      {list.map((work) => {
        let trimWork = work.work?.trim();
        let workShow = (
          <>
            <div className="listDiv">
              <span>{work.id + 1}</span>
              <button className="listElement">{trimWork}</button>
              <RemEle id={work.id} list={list} setList={setList}></RemEle>
              <UpdPos id={work.id} list={list} setList = {setList}></UpdPos>
            </div>
          </>
        );

        return workShow;
      })}
    </div>
  );
}
