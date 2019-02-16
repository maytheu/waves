import React from 'react';

import UserLayout from "../hoc/UserLayout";
import PersonalInfo from './PersonalInfo';

const UpdateProfile = () => {
    return (
        <UserLayout>
            <h1>Profile</h1>
            <PersonalInfo />
        </UserLayout>
    );
};

export default UpdateProfile;