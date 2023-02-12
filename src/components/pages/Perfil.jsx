
import Repository from "../Repository"
import imgArrow from '../../images/arrow.png'
import '../../styles/components/Perfil.scss'

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const Perfil = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { 
        avatar_url, 
        bio, 
        name, 
        login, 
        followers, 
        following, 
        html_url,
        repos_url
    } = location.state.data

    const [ repositories, setRepositories ] = useState([])

    useEffect(()=>{
        searchRepositories();
    }, [])

    async function searchRepositories() {

        const res= await fetch(`${repos_url}`)
        const data = await res.json()
        setRepositories(data)
    }

    function toHome() {
        navigate('/perfil-github/')
    }

    
    return (
        <div className="container">

            <section className="container-perfil">
                <h1>Perfil</h1>
                <img src={avatar_url} alt="Foto de perfil" />
                <div className="name">
                    <h2>{name}</h2>
                    <h3>{login}</h3>
                </div>
                <p>{bio ?? 'Nothing to say about me...'}</p>
                <div className="container-follo">
                    <span>Followers: {followers}</span>
                    <span>•</span>
                    <span>Following: {following}</span>
                </div>
                <a href={html_url} target="_blank">Visite</a>
                <button className="button-back" onClick={toHome}>
                <img src={imgArrow} alt="Voltar" />
            </button>
            </section>

            <section className="container-repositories">
                <h1>Repositórios</h1>
                {
                    repositories.map(( { id, name, html_url, description, languages_url, visibility } = repo ) => (
                        <Repository 
                            key={id} 
                            name={name}
                            html_url={html_url}
                            description={description}
                            languages_url={languages_url}
                            visibility={visibility}
                        />
                    ))
                }
            </section>
            
        </div>
    )
}

export default Perfil