import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/Close/close";
const About = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.counter);
  return (
    <div className="my-[20vh]">
      about
      <div>
        <p>Count: {popup ? "true" : 'false'}</p>
        <button onClick={() => dispatch(close())}>Increment</button>
      </div>
    </div>
  );
};

export default About;
