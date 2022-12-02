import { InputConteiner } from "./style"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({value}) =>{
        return(
         <InputConteiner>
           <input disabled value={value} />
         </InputConteiner>  
        )

}