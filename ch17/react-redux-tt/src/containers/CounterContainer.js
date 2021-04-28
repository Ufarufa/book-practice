import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { useActions } from '../hooks/useAction';
import { decrease, increase } from '../modules/counter';

function CounterContainer() {
  const number = useSelector(({ counter }) => counter.number);
  /* const dispatch = useDispatch();
    const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]); */

  const [onIncrease, onDecrease] = useActions([increase, decrease], []);

  //console.log(number);

  return (
    <div>
      <Counter
        number={number}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      ></Counter>
    </div>
  );
}

export default CounterContainer;
