import { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { TRootState } from '../redux/store';
import { fetchRequest } from '../redux/slices/detailsSlice';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const Details = () => {
  const dispatch = useDispatch();
  const useAppSelector : TypedUseSelectorHook<TRootState> = useSelector;
  const { data, loading, error } = useAppSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchRequest(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRetryButtonClick() {
    dispatch(fetchRequest(id));
  }

  if (error || loading || !data) return (
    <>
      {error && <Error onRetryButtonClick={handleRetryButtonClick} text='Произошла ошибка!' />}
      {!error && loading && <Loader />}
    </>
  );

  return (
    <Card className='details'>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Цена: {data.price}
        </Card.Subtitle>
        <Card.Text>{data.content || ''}</Card.Text>
      </Card.Body>
    </Card>
  )
}
