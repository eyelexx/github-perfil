import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => { {/* Destructuring within the argument || Inside the function, it receives an argument called 'props', and from that we have access to an object and inside it we have the attributes passed. */}
    //const { endereco, nome } = props; // Destructure.

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil

// Properties are attributes that custom tags can receive.