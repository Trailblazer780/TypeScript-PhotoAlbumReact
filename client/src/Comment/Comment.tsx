import React from 'react';
import './Comment.scss'
import { SubmitComment} from '../tools/PhotoAlbum.model';
import { sendJSONData } from '../tools/Toolkit';

const Comment = ({enabled, showComment}:SubmitComment) => {

    const commentSubmission = () => {
        let author:string;
        let comment:string;
        let photoID:number;





        let sendComment = {
            "photoId": photoID,
            "author": author,
            "comment": comment 
        }
    }

    return(
        (enabled)
        ?
        <div className="nav__comment" id="commentMenu">
            <div className="row">
                <label><strong>Author:</strong> </label>
                <div className="row">
                    <input type="text" id="commentAuthor" name="author" />
                </div>
            </div>
            <div className="row">
                <label><strong>Comment (200 Characters)</strong>:</label>
                <div className="row">
                    <textarea id="commentContent" name="comment"></textarea>
                </div>
            </div>
            <div className="btn-group">
                <button type="button" id="btnOk">Ok</button>
                <button type="button" id="btnCancel" onClick={() => showComment(false)}>Cancel</button>
            </div>
        </div>
        :
        <div></div>
    )
}

export default Comment;