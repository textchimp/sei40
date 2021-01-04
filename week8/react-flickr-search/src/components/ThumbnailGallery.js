import React from 'react';

const ThumbnailGallery = (props) => {
  return (
    <div>
      {
        props.photos.map( p => (
          <img
            src={ `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg` }
            alt={ p.title }
            key={ p.id }
          />))
      }
    </div>
  );
}; // ThumbnailGallery

export default ThumbnailGallery;
