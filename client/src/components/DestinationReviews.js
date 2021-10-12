import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Destination.css';
import axios from 'axios';
import { dummyMypageReview } from '../dummy/dummyData';

axios.defaults.withCredentials = true;

//TODO: 게시글 없을때 대체 이미지 만들기
function DestinationReviews(props) {
  const [reviews, setReviews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getReview();
  }, []);

  async function getReview() {
    await axios('http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review/', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Credentials': 'true',
      },
      withCredentials: true,
    })
      .then((res) => {
        let reviewObj = res.data;
        let objectToArray = [];
        let keys = Object.keys(reviewObj);
        for (let i = 0; i < keys.length; i++) {
          objectToArray.push({ ...reviewObj[keys[i]], id: keys[i] });
        }
        setReviews(objectToArray);
      })
      .catch((e) => {});
  }
  return (
    <div id="dest-review-content">
      <div id="landing-top-content">
        <video width="300" height="200" muted autoplay="autoplay" loop>
          <source src="https://pixabay.com/ko/videos/download/video-52849_medium.mp4" type="video/mp4" muted />
        </video>
        <span id="dest-top-text">{`여행지 리뷰`}</span>
      </div>
      {props.loginOn ? (
        <Link
          to={{
            pathname: '/newReview',
            props: props,
          }}
        >
          <button id="post-btn">글쓰기</button>
        </Link>
      ) : null}
      <div className="reviews-block">
        {reviews.map((ele) => (
          <div className="board-block">
            <Link
              className="review-link"
              to={{
                pathname: '/review',
                props: props,
                state: {
                  id: ele.id,
                  author: ele.author,
                  content: ele.content,
                  hashtags: ele.hashtags,
                  image: ele.image,
                  recommend: ele.recommend,
                  region: ele.region,
                  title: ele.title,
                  view: ele.view,
                },
              }}
            >
              <div id="dest-review-wrapper">
                <img className="image-box" src={ele.image} alt={ele.image} />
                <span id="dest-review-title">{ele.title}</span>
                <span id="dest-review-description">{ele.content.slice(0, 30).replace(/.\s*$/, '').trim() + '...'}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DestinationReviews;
