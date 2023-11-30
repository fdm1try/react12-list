import { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { TRootState } from '../redux/store';
import { fetchRequest } from '../redux/slices/listSlice';
import { Items } from '../components/Items';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';

export const List = () => {
  const dispatch = useDispatch();
  const useAppSelector : TypedUseSelectorHook<TRootState> = useSelector;
  const { data, loading, error } = useAppSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchRequest(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRetryButtonClick() {
    dispatch(fetchRequest(null));
  }

  return (
    <div className='list'>
      <div className='list__header'>
        {error && <Error onRetryButtonClick={handleRetryButtonClick} text='Произошла ошибка!' />}
        {!error && loading && <Loader />}
      </div>
      { !error && data && <Items items={data} />}
    </div>
  )
}
