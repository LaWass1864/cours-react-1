import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';



const Blog = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        // pour ne pas recharger la page
        e.preventDefault();

        if (content.length < 140) {
            setError(true);
        } else {
            setError(false)
        }
    }
    return (
     <div className="blog-container">
       <Logo />
       <Navigation />
       <h1> Blog </h1>

       <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Nom' />
        {/* Combien de caractere on été mis a l'interieur et renvoyer une erreur si besoin */}
        <textarea 
        // Affichage conditionnel du style des border en cas de > 140 caracteres
         style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}
        placeholder='Message' 
        onChangeCapture={(e) => setContent(e.target.value)}>
            </textarea>
        {/* Afichage conditionnel  */}
        {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
        <input type="submit" value="Envoyer" />
       </form>
       <ul></ul>
     </div>
    );
};

export default Blog;