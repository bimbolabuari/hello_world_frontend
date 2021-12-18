import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, []);

  return (
    <div>
      <div>
        <h2>{greeting}</h2>
      </div>
    </div>
  );
};

export default Greeting;
