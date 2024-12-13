import { NextPage } from 'next';

import Drinks from '@/app/components/screens/drinks/Drinks';


const CoffeePage: NextPage = () => {
    return <Drinks page={'coffee'}/>;
};

export default CoffeePage;