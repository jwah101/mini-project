import Card from "../component/Card";
import './Search.css';
function Search ({searchData, soccerField}) {
  if (!searchData) {
    return (
      <div style={{ paddingTop: '70px', paddingLeft:'20px', paddingRight:'20px', minHeight:'800px'}}>
        <h2  className="search-title">검색어를 입력해주세요.</h2>
      </div>
    );
  }

  const filteredData = soccerField.filter(item =>
    item.name.includes(searchData) || item.address.includes(searchData)
  );

  return(
    <div className="search-container" style={{ paddingTop: '70px', paddingLeft:'20px', paddingRight:'20px'}}>
     <h2 className="search-title">검색 결과: "{searchData}"</h2>
      {filteredData.length > 0 ? (
        <div className="row" style={{cursor:'pointer'}}>
          {filteredData.map(item => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p className="no-results">검색 결과가 없습니다.</p>
      )}
    </div>
    
  )
}

export default Search;