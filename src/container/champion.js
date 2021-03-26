import { useSelector, useDispatch } from 'react-redux';
import { updateChampionPos } from 'redux/modules/champion';
import Champion from 'component/champion'


function ChampionContainer(props) {
    const dispatch = useDispatch();
    const championData = useSelector(state => state.champion);
    const move = (id, x, y) => {
        const r = {};
        r.data = championData[id];
        r.pos = {x: x, y: y};
        r.id = id
        dispatch(updateChampionPos(r));
      };
    return (
      <Champion uuid={props.id} data={championData[props.id]} move={move}/>
    );
}

export default ChampionContainer