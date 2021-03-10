import React from 'react'


const Rating = ({rating,numReview}) => {
    
    
    return ( 
        <div className="rating">
                            <span>
                                <i className={rating>=1 ? "fa fa-star" : rating>=0.5 ? "far fa-star-half" : "far fa-star"}></i>
                            </span>
                            <span>
                                <i className={rating>=2 ? "fa fa-star" : rating>=1.5 ? "far fa-star-half" : "far fa-star"}></i>
                            </span>
                            <span>
                                <i className={rating>=3 ? "fa fa-star" : rating>=2.5 ? "far fa-star-half" : "far fa-star"}></i>
                            </span>
                            <span>
                                <i className={rating>=4 ? "fa fa-star" : rating>=3.5 ? "far fa-star-half" : "far fa-star"}></i>
                            </span>
                            <span>
                                <i className={rating>=5 ? "fa fa-star" : rating>=4.5 ? "far fa-star-half" : "far fa-star"}></i>
                            </span>

                            <span>{numReview + ' reviews' }</span>
                            
                        </div>
     );
}
 
export default Rating;