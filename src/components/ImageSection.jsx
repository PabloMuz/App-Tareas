import React from 'react';

const HeroBanner = ({ title, content, image, bgImage, bgColor, flipColumn }) => {

  const columnDirection = flipColumn ? 'md:flex-row-reverse' : 'md:flex-row';
  const imgStyles = 'object-cover object-center w-full h-full md:h-auto';

    // Determinar el color de fondo y la opacidad
    const fondoEstilos = bgImage ? {
      backgroundImage: `url(${bgImage})`,
      backgroundColor: '',
      opacity: 1,
    } : {
      backgroundImage: '',
      backgroundColor: `#${bgColor}`,
      opacity: 1,
    };
  return (
    <div className="py-20"  style={{...fondoEstilos}}>
      <div className={`container mx-auto  md:flex-row flex items-center justify-center px-6 ${columnDirection}`}>
        <div className="flex flex-col">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-8">{content}</p>
          </div>
        </div>

        <div className="flex items-center justify-center px-6">
          <img src={image} alt="Hero" className={imgStyles} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
