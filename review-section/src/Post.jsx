import React, { useState } from "react";
import Profile from './assets/images/logo.png'
import Updost from './assets/images/uploadpic.JPG'
import { Heart, MessageCircle, Share2, Send,LocationEdit } from "lucide-react";
export default function Post() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(0);
  const handleSend = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };

  return (<>
        <div className="head">
      <h1> Instagram Post</h1>
    </div>
    <div className="post">

      <div className="post-header">
        <div className="avatar">
            <img src={Profile} alt="" width={50} className="logo"/>
        </div>
        <div className="content">
        <a href="#" className="username">Kalpshah01_</a>
        <br />
        <p> <LocationEdit  size={20}/>Surat</p>
        </div>
        <button className="follow-btn">Follow</button>
      </div>

  
      <div className="post-image">
        <img
          src={Updost}
          alt="post"
        />
      </div>

    
      <div className="post-actions">
    <button onClick={() => setLiked(liked + 1)} id="heart">
  <Heart size={22} />
</button>

<button id="comment">
  <MessageCircle size={22} />
</button>

<button id="share">
  <Share2 size={22} />
</button>
      </div>

    
      <div className="likes"> 
        {liked} likes</div>

     
      <div className="caption">
       Just believer your self you can do it! <span className="hashtag">#motivation</span>{" "}
        <span className="hashtag">#kalpwrites</span>
      </div>

   
     


      <div className="comment-box">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
     <button onClick={handleSend}>
  <Send size={18} /> 
</button>
      </div>
      {comments.length>0 ? 
      
       <div className="comments">
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div> : <p className="ppp" style={{ padding: "10px" }}>
        No comments yet.
      </p>}
    </div>
  </>
  );
}
