import {FormInputLabel,Input,Group} from './form-input.style.jsx'
const FormInput=({label,...otherProps})=>{
    return(
        <Group>
            <Input {...otherProps}/>

            {label && (
               <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
             )
            } 
       </Group>
    );
};
export default FormInput;


/*import './form-input.style.scss'
const FormInput=({label,...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>

            {label && (
               <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>
             )
            } 
       </div>
    );
};
export default FormInput;*/