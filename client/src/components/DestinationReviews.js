import { Link } from "react-router-dom";
import "../styles/Destination.css";
import Review from "./Review";
import { dummyMypageReview } from "../dummy/dummyData";

function DestinationReviews() {
  return (
    <div>
      <button>글쓰기</button>
      <div class="boards-block">
        {dummyMypageReview.map((ele) => (
          <div>
            <div class="board-block">
              <Link
                to={{
                  pathname: "/Review",
                  state: {src: ele.src,
                  title: ele.title,
                  description: ele.description,
                  count: ele.count,
                  likeCount: ele.likeCount
                  }}} >
                <a>{ele.title}</a>
                <div class="extra_field">
                  {ele.description.slice(0, 20).replace(/.\s*$/, "").trim() +
                    "..."}
                </div>
                <div class="image">
                  <a class="img">
                    <img src={ele.src}></img>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DestinationReviews;
