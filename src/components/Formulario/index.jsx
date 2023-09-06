import { useEffect, useState } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0) // [value, setValue] || Array destructuring.
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, []) // useEffect without dependencies only works when the component has been assembled.

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome]) // This array is a 'Dependancy List'.

    useEffect(() => {
        console.log("matéria A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // estadoAnterior = valorNovo
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => ( // Map is used because it iterates and returns each item.
                <li key={item}>{item}</li> // React ask for unique childrens. So each item of array receive a unique key, in that case is 'item'.
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value ))} /> {/* Event Destructuring. */}
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value ))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value ))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario

// Handling States and Events.