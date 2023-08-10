"use client";

import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  const replies = [];
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          fullname="Khachen chaiyo"
          studentId=" 630612177"
          text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
        />

        {/* Comment Example */}
        <Comment
          userImagePath={"/profileImages/lisa.jpg"}
          username={"Lisa"}
          commentText={"จริงค่า"}
          likeNum={"999 คน"}
        />

        {replies.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            key={comments.username}
          />
        ))}

        {/* Reply Example */}
        <Reply
          userImagePath={"/profileImages/puppy.jpg"}
          username={"หมาน้อย"}
          replyText={"จริงค้าบบบบบบบบ"}
          likeNum={"2 คน"}
        />
        <Reply
          userImagePath={"/profileImages/popcat.png"}
          username={"Cat Meme"}
          replyText={"ลิซ่าาาาาาา"}
          likeNum={"2 คน"}
        />
        <Comment
          userImagePath={"/profileImages/charliebrown.jpg"}
          username={"Charlie Brown"}
          commentText={"บ้าไปแล้ว"}
        />
      </div>
    </div>
  );
}
