import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
let e = React.createElement;
export default class Comment extends React.Component {
  render() {
    // when you have multiple lines of JSX put them in parentheses()
    return (
      <div className="card w-75">
        <div className="card-header bg-success text-white">Username & Time</div>
        <div className="card-body">Comment Content</div>
        <div className="card-footer">
          <LikeButton />
          <ReplyButton />
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
    //   e("div", { class: "card-body" }, "Comment Content"),
    //   e(
    //     "div",
    //     { class: "card-footer" },
    //     e(LikeButton, {}, null),
    //     e("span", {}, " "),
    //     e(ReplyButton, {}, null)
    //   )
    // );
  }
}
