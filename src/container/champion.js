import { useSelector, useDispatch } from 'react-redux';
import { updateChampions } from 'redux/modules/champion';
import Champion from 'component/champion'


function ChampionContainer(props) {
    const dispatch = useDispatch();
    const championData = useSelector(state => state.champion);
    const move = (id, x, y) => {
        const r = {};
        r.data = championData[id];
        r[id] = {};
        r[id].pos = {x: x, y: y};
        dispatch(updateChampions(r));
      };
    return (
      <Champion uuid={props.id} data={championData[props.id]} move={move}/>
    );
}

export default ChampionContainer