import React from 'react';

import UpdateSiteInfo from './UpdateSiteInfo';
import UserLayout from '../../hoc/UserLayout'

const ManageSite = () => {
    return (
        <UserLayout>
            <UpdateSiteInfo />
        </UserLayout>
    );
};

export default ManageSite;