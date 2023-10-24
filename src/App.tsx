// src/App.tsx
import React from 'react';

function App() {
  // const counter = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <strong>Jarvis</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Bookamarks</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Pools</a>
          </li>
          <li>
            <a href="#">DB Details</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Tools</a>
          </li>
          <li>
            <a href="#">Clock</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
