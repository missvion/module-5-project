import React from 'react';
import {Link} from 'react-router-dom';


export function PetPortalNavBar() {
    return (
        <div className="ui blue three item inverted menu">
            <Link className="item" to='/myprofile'>Profile</Link>
            <Link className="item" to='/myappointments'>Appointments</Link>
            <Link className="item" to='/mytasks'>Tasks</Link>
        </div>
    )
}