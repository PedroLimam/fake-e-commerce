
function Pagination({setCurrentPage, filterArray}){ 
  const pages = Math.ceil(filterArray.length / 8)

  return (
    <div>
      {
          Array.from(Array(pages), (item, index) => {
            return <button className="btn-page" value={index} onClick={e => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
          })
        }
    </div>
  );
};

export default Pagination;