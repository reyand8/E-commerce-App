import { NextPage } from 'next';

import Drinks from '@/app/components/screens/drinks/Drinks';


const TeaPage: NextPage = () => {
    return <Drinks page={'tea'}/>;
};

export default TeaPage;