import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

const App = () => {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true) // Form state.
    const [nomeUsuario, setNomeUsuario] = useState('')

    return (
        <>
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}></input>

            {nomeUsuario.length > 4 && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <ReposList nomeUsuario={nomeUsuario}/>
                </>
            )}

            {/* {formularioEstaVisivel && ( // Form visibility condition|| If true, display the form.
                <Formulario />
            )}

            <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle form</button> */}
        </>
    )
}

export default App