import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment, selectCount } from './slices';

export default function Component() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(increment())}></button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}></button>
        </div>
    )
}