// Remove Element function
function RemEle({ id, list, setList }) {
  function handleClick() {
    let newList = list.filter((work)=> {
      return work.id !== id
    })
    newList.map((work, index)=> {
      work.id = index
      return work
    })
    setList([...newList])
  }

  return (
    <>
      <button onClick={handleClick}>X</button>
    </>
  );
}

export default RemEle;
