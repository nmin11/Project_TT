import { Link, useHistory } from 'react-router-dom';
import '../styles/Destination.css';
import { dummyMypageReview } from '../dummy/dummyData';

function DestinationReviews() {
  const history = useHistory();
  function pushToPost() {
    history.push('/newReview');
  }

  return (
    <div id="dest-review-content">
      {dummyMypageReview.map((ele) => (
        <div className="board-block">
          <Link
            className="review-link"
            to={{
              pathname: '/Review',
              state: {
                id: ele.id,
                src: ele.src,
                title: ele.title,
                description: ele.description,
                count: ele.count,
                likeCount: ele.likeCount,
              },
            }}
          >
            <div id="dest-review-wrapper">
              <img src={ele.src} alt={ele.id} />
              <span id="dest-review-title">{ele.title}</span>
              <span id="dest-review-description">
                {ele.description.slice(0, 30).replace(/.\s*$/, '').trim() + '...'}
              </span>
            </div>
          </Link>
        </div>
      ))}

      <button id="post-btn" onClick={pushToPost}>
        글쓰기
      </button>
    </div>
  );
}
export default DestinationReviews;
