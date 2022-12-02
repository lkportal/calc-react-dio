import { ButtonConteiner } from "./style";
 // eslint-disable-next-line import/no-anonymous-default-export
 export default ({label,onClick}) =>{
    return(
        <ButtonConteiner onClick={onClick}>
            {label}
        </ButtonConteiner>
    )
 }