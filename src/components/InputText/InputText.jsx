import { ImSearch} from 'react-icons/im'
import { ContainerBox } from './style.js';

function InputText({search}){

    return(
        <ContainerBox>
            <input onChange={e => search(e.target.value)} type="text" placeholder='Digite o que você procura'/>
            <span className="containerInput__button-search"><ImSearch/></span>
        </ContainerBox>       
    )
}

export default InputText;

