import React from 'react';

const Service = () => {
    return (
        <div>
            <div className='serviceDiv'>

                {
                    [...Array(6)].map(d => {
                        return (
                            <div className='mb-4'>

                                <div className='service p-3 d-flex align-items-center justify-content-center gap-1 gap-lg-5'>
                                    <div className='d-flex justify-content-start align-items-start'>
                                        <div>
                                            <img src="images/com/Rectanglet71.png" alt="course" className='courseImg'/>
                                        </div>
                                        <div className='text-start'> 
                                            <h4>Tarot Reading</h4>
                                            <p>We provide the best solution for your business planning so that it can help increase your business to be more advanced in market reach and your company’s income</p>
                                        </div>
                                    </div>

                                    <div className='text-start text-md-end priceHourly'>
                                        <div>
                                            <h6>$30/hr</h6>
                                            <button className='detailsBtn'>View details</button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        )
                    })
                }


            </div>

        </div>
    );
};

export default Service;