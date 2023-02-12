
import '../styles/components/Repository.scss'

import { useState, useEffect } from "react"

const Repository = ({ name, html_url, description, languages_url, visibility }) => {

    const [ languages, setLanguages ] = useState([])

    useEffect(() => { searchLanguagens() }, [])

    async function searchLanguagens() {
        const res = await fetch(`${languages_url}`)
        const data = await res.json()
        setLanguages(Object.keys(data))
        console.log('rodando isso')
    }

    
    return (
        <div className="repository">
            <div className="title">
                <h1> 
                    {name} 
                    <span>{visibility}</span>
                </h1>
                <a href={html_url} target="_blank">Visite</a>
            </div>
            <p>{description}</p>
            <div className="container_languages">
            {
                languages.map(( lang, index ) => (
                    <div key={index} className="div-language">
                        <span className={`${lang} mark`}></span>
                        <span className="text-language">{lang}</span>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Repository