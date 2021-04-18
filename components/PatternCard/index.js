import React from 'react';
import PropTypes from 'prop-types';

const PatternCard = ({pattern}) => {
  const {category, image, name} = pattern;
  return (
      <div className="patternCard">
        <h2> {name}</h2>
        <p>{category.fields.name}</p>
        <img src={image.fields.file.url} alt={image.fields.title} />
      </div>
  );
};

PatternCard.propTypes = {
  pattern: PropTypes.shape({
    category: PropTypes.obj,
    image: PropTypes.obj,
    name: PropTypes.obj,
  })
};

export default PatternCard;
