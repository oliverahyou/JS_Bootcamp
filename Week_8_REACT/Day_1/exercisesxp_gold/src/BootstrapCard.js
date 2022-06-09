import React from 'react';

const BootstrapCard = (props) => {
  const { title, description, image, button} = props;
  return (
    <div>
        <div className="card m-5" style={{width: '30rem'}}>
          <img className="card-img-top" src={image} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={button} class="btn btn-primary">Go to Wikipedia</a>
          </div>
        </div>
    </div>
  )
}

export default BootstrapCard;