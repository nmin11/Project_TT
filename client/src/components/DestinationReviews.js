import { Link } from 'react-router-dom';
import '../styles/Destination.css';
import Review from './Review';

function DestinationReviews() {
  function PrintDummy() {
    return (<div>
      <div class="board-block">
        <Link to="/Review">
        <a >게시글 이름</a>
        <div class="extra_field">글내용</div>
        <div class="image">
          <a class="img">
            <img src="/images/images-1.jpg"></img>
          </a></div>
          </Link>
      </div>
    </div>
    )
}
return (<div>
  <button>글쓰기</button>
  <div class="boards-block">
  
    {PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}{PrintDummy()}
  </div>
</div>
);
}
export default DestinationReviews;
