import '../styles/Destination.css';

function DestinationReviews() {
  function printDummy() {
    return (<div>
      <div class="board-block">
        <a >게시글 이름</a>
        <div class="extra_field">글내용</div>
        <div class="image">
          <a class="img">
            <img src="/images/images-1.jpg"></img>
          </a></div>
      </div>
    </div>
    );
  }
  return (<div>
    
    <div class="boards-block">
      <div class="board-block">
        <a >게시글 이름</a>
        <div class="extra_field">글내용</div>
        <div class="image">
          <a class="img">
            <img src="/images/images-1.jpg"></img>
          </a></div>
      </div>
      {printDummy()}{printDummy()}{printDummy()}{printDummy()}{printDummy()}{printDummy()}
    </div>
  </div>
  );
}
export default DestinationReviews;
