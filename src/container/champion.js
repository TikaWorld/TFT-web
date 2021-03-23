import { useSelector, useDispatch } from 'react-redux';
import { loadChampions } from 'redux/modules/champion';
import Champion from 'component/champion'


function ChampionContainer() {
    const dispatch = useDispatch();
    const data = dispatch(loadChampions());
    console.log(data)
    return (
      <Champion/>
    );
}

export default ChampionContainer