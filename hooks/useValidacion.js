import {useState, useEffect} from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitform] = useState(false);

    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores){
                fn(); //Fn = Funcion que se ejecuta en el componente
            }
            guardarSubmitform(false);
        }
    }, [errores])

    //Funcion que se ejecuta conforme el usuario escribe algo

    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    //funcion que se ejecuta cuando el usuariohace submit
    const handleSubmit = e => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitform(true);
    }

    //Cuando se realiza el evento de blur
    const handleBlur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
    }

    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleBlur
    };
}
 
export default useValidacion;