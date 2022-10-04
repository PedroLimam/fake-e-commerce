import { ImSearch} from 'react-icons/im'
import { ContainerBox } from './style.js';

function InputText(){
    return(
        <ContainerBox>
            <input type="text" placeholder='Digite o que você procura'/>
            <span className="containerInput__button-search"><ImSearch/></span>
        </ContainerBox>       
    )
}

export default InputText;

