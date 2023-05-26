import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getTypeCounts } from '../modules/transactionUtils';

interface HomeProps {
    // Дополнительные свойства, если есть
}

const Home: React.FC<HomeProps> = () => {
    const { data } = useSelector((state: RootState) => state.transactions.data);

    const typeCounts = getTypeCounts(data);

    return (
        <div className=' container w-[100%] my-0 mx-auto h-auto grid grid-cols-2 gap-2 px-2'>
            <div className="col-span-2 border">
                <div className='border bg-gray-300 w-[100%] text-center h-10'></div>
                <Card type={"Some text"} count={"Welcome"} link={'0'} />
                <div className='border bg-gray-300 w-[100%] flex items-center justify-center h-10'>
                    You have {data.length} transactions
                </div>
            </div>
            {Object.entries(typeCounts).map(([type, count], i) => (
                <Card key={type} type={type} count={count} link={i} />
            ))}
        </div>
    );
};

export default Home;
