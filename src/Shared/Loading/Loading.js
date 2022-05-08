import React from 'react';

const Loading = () => {
    return (
        <div className='text-center'>
            <button className="btn btn-success " type="button" disabled>
                <div>
                    <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                    Loading...
                </div>
            </button>
        </div>
    );
};

export default Loading;