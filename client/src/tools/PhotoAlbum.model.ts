
export interface LoadingOverlayProps {
    enabled:boolean;
    bgColor:string;
    spinnerColor:string;
}

export interface PhotoData {
    photos:Photo[];
}

export interface Photo {
    id:string;
    title:string;
    caption:string;
    source:string;
    comments:Comment[];
}

export interface Comment {
    comment:string;
    author:string;
}

export interface ViewPhotoProps {
    photos:Photo[];
}