import { useSelector, useDispatch } from 'react-redux';
import { updateChampions } from 'redux/modules/champion';
import Champion from 'component/champion'


function ChampionContainer() {
    const dispatch = useDispatch();
    //const data = dispatch(updateChampions({"a":{x: 0, y: 0}}));
    const championData = useSelector(state => state.champion);
    console.log(championData)
    const move = (id, x, y) => {
        const r = {}
        r[id]={x: x, y: y}
        dispatch(updateChampions(r));
      };
    return (
      <Champion data={championData} move={move}/>
    );
}

export default ChampionContainer