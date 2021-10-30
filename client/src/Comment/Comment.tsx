import React, { useState } from 'react';
import './Comment.scss'
import { SubmitComment} from '../tools/PhotoAlbum.model';
import { sendJSONData } from '../tools/Toolkit';


const SEND_SCRIPT:string = "http://localhost/addComment.php";

const Comment = ({enabled, showComment, setLoading, photo, refresh, successSubmit}:SubmitComment) => {

    const commentSubmission = (e:any) => {
        setLoading(true);
        let jsonData:Object = {"photoId": photo.id, "author": author, "comment": comment};
        setAuthor("");
        setComment("");
        sendJSONData(SEND_SCRIPT, JSON.stringify(jsonData), refresh, onError);
        successSubmit(false);
    }

    const onError = (message:string):void => console.log("*** Error has occured during comment AJAX data transmission: " + message);

    const [author, setAuthor] = React.useState<string>("");
    const [comment, setComment] = React.useState<string>("");

    return(
        (enabled)
        ?
        <div className="nav__comment" id="commentMenu">
            <div className="row">
                <label><strong>Author:</strong> </label>
                <div className="row">
                    <input type="text" id="commentAuthor" value={author} onChange={(e:any) => setAuthor(e.target.value)}/>
                </div>
            </div>
            <div className="row">
                <label><strong>Comment (200 Characters)</strong>:</label>
                <div className="row">
                    <textarea id="commentContent" value={comment} onChange={(e:any) => setComment(e.target.value)}></textarea>
                </div>
            </div>
            <div className="btn-group">
                <button type="button" id="btnOk" onClick={commentSubmission} disabled={(author==='') || (comment==='') ? true : false}>Ok</button>
                <button type="button" id="btnCancel" onClick={() => showComment(false)}>Cancel</button>
            </div>
        </div>
        :
        <div></div>
    )
}

export default Comment;