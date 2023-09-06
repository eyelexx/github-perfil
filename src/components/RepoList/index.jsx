import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario, }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) // Chama a api do github
        .then(res => res.json()) // Transforma em um arquivo json
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson) // Joga o retorno 'resJson' dentro da função de setRepos
            }, 3000)

        })
    }, [nomeUsuario]) // [] indica que o useEffect só será chamado quando o componente for MONTADO

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( // ITERA e RETORNA a lista de repositórios || WITH DESTRUCTURING */ }
                    {repos.map(({ id, name, language, html_url }) => ( // ITERA e RETORNA a lista de repositórios || WITHOUT DESTRUCTURING
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
} 

export default ReposList