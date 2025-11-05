import React, { useState } from 'react'

const SliderPage = () => {
    const images = [
        `${process.env.PUBLIC_URL}/images/1.jpg`,
        `${process.env.PUBLIC_URL}/images/2.jpg`,
        `${process.env.PUBLIC_URL}/images/3.jpg`,
    ];

    const [currrentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        let next = currrentIndex + 1;
        if (next >= images.length) {
            next = 0;
        }
        setCurrentIndex(next);
    }
    const prevImage = () => {
        let prev = currrentIndex - 1;
        if (prev < 0) {
            prev = images.length - 1;
        }
        setCurrentIndex(prev);
    }
  return (
    <div className='container'>
        <h2 className='text-center mb-4'>Слайдер</h2>
        <div className='card'>
            <div className='card-body'>
                <div className='position-relative'>
                    <img
                    src={images[currrentIndex]}
                    alt={`Слайд ${currrentIndex}`}
                    className='w-100 img-fluid'
                    style={{height: '500px', objectFit: 'none'}}></img>
                    <button
                    className='btn btn-primary position-absolute top-50 start-0 translate-middle-y'
                    onClick={prevImage}>👈</button>
                    <button
                    className='btn btn-primary position-absolute top-50 end-0 translate-middle-y'
                    onClick={nextImage}>👉</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SliderPage
