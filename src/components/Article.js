import React, { useState } from "react";
import axios from "axios";

const Article = ({ article }) => {
  const [isEditing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  //  Traitement de la date
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  // Gestion de l'edition et envoyer les nouvelles données
  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
      updatedDate: Date.now(),
    };

    axios.put("http://localhost:3004/articles/" + article.id, data).then(() => {
      setEditing(false);
    });
  };
// Suppression d'un article
  const handleDelete = () => {
    axios.delete("http://localhost:3004/articles/" + article.id);
    window.location.reload();
  };

  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le : {dateFormater(article.date)}</em>
      </div>
      {/* Editer le textarea */}
      {isEditing ? (
        <textarea
          style={{ background: isEditing ? "#f3feff" : "white" }}
          defaultValue={editContent ? editContent : article.content}
          autoFocus
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}
      <div className="btn-container">
        {/* Proposer le bouton Edit et Valdier */}
        {isEditing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button
          onClick={() => {
            if (
              window.confirm("Voulez-vous vraiment supprimer cet article ?")
            ) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Article;
