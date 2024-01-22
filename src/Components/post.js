import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";
let e = React.createElement;

export default class Post extends React.Component {
  render() {
    return (
      <div className="card w-75">
        <div className="card-header bg-primary text-white">Username & time</div>
        <div className="card-body">This is where Content goes</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
    // return e(
    //   "div",
    //   { class: "card w-75" },
    //   e(
    //     "div",
    //     { class: "card-header bg-success text-white" },
    //     "Username & time"
    //   ),
    //   e("div", { class: "card-body" }, "Post Content"),
    //   e(
    //     "div",
    //     { class: "card-footer" },
    //     e(LikeButton, {}, null),
    //     e("span", {}, " "),
    //     e(ReplyButton, {}, null),
    //     e("br", {}, null),
    //     e(Comment, {}, null),
    //     e(Comment, {}, null)
    //   )
    // );
  }
}
