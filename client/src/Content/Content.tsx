import React from 'react';
import './Content.scss';
import {PhotoData, ViewPhotoProps} from "./../tools/PhotoAlbum.model";


const Content = ({photos}:ViewPhotoProps) => {

    //--------------------------------------- Setup State Variables
    const [visible, setVisible] = React.useState<Boolean>(true);


    return (
        <div className="content">
            <div className="content__picture">
                <p id="NoImage" style={{display: (visible ? 'block' : 'none')}}>There are no images to display.</p>
                <img id="mainPicture" src=""/>
            </div>
        <div className="content__title" id="mainPictureTitle"></div>
        <div className="content__caption" id="mainPictureCaption"></div>
        <div className="content__comment" id="mainPictureComments">

        </div>
    </div>
    )
    
}

export default Content;