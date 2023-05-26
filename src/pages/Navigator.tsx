import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ITransactionRoot } from '../models/models';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { getTypeCounts } from '../modules/transactionUtils';

function Navigator(): React.ReactElement {
  const [tab, setTab] = React.useState<number>(0);
  const [activeTab, setActiveTab] = React.useState<string>('outcome');
  const { data }: ITransactionRoot = useSelector((state: RootState) => state.transactions.data);

  React.useEffect(() => {
    const link = qs.parse(window.location.search.substring(1)) || 0;
    link.tab ? setTab(+link.tab) : setTab(0);
  }, []);

  const tabsHandler = (count: number, type: string) => {
    setTab(count);
    setActiveTab(type);
  };

  const overClass = 'p-3 cursor-pointer border w-[100%] text-center rounded-t-lg';
  const activeClass = 'p-3 cursor-pointer border w-[100%] text-center rounded-t-lg bg-gray-400';

  const typeCounts = getTypeCounts(data);

  return (
    <div className="container w-[100%] my-0 mx-auto h-auto px-2">
      <div className="flex">
        {Object.entries(typeCounts).map(([type, count], i) => (
          <Link className={tab === i ? activeClass : overClass} key={type} to={`/navigator?tab=${i}`}>
            <div onClick={() => tabsHandler(i, type)}>{type}</div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col pt-8">
        <div className="border-b-2 grid grid-cols-2 p-3">
          <span className='text-center'>Name</span><span className='text-center'>Account</span>
        </div>
        {Object.entries(data).map(item => {
          if (item[1].type === activeTab) {
            return (
              <div key={item[1]._id} className="border-b-2 grid grid-cols-2 p-3 gap-2">
                <span className='text-center'>{item[1].name.first + ' ' + item[1].name.last}</span>
                <span className='text-center'>{item[1]._id}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Navigator;
