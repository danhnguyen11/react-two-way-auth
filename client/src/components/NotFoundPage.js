import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="notfoundpage--container">
            <h3 className="notfoundpage--title">
                 404 
                 <br/>
                 Page Not Found
                 <br/>
                 <Link to='/'>Go Home</Link>
            </h3>
        </div>
    )
}

export default NotFoundPage;