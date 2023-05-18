import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Ajoutez cette ligne ici
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import axios from 'axios';  // Assurez-vous d'importer axios si vous ne l'avez pas déjà fait

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

// Fonction pour récupérer la valeur d'un cookie par son nom
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Le nom du cookie est suivi de "=" dans la chaîne du cookie
      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();  // Et cette ligne ici

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
   const createAccount = () => {
  // Premièrement, faites la requête GET pour obtenir le token CSRF
      axios.get('http://localhost:8000/api/auth/get_csrf/')
        .then(response => {
          // Enregistrez le token CSRF ici
          const csrfToken = response.data.token;  // Assurez-vous d'ajuster cette ligne en fonction de la structure de la réponse de votre API

          axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

          // Maintenant vous pouvez faire la requête POST pour créer le compte
          axios.post('http://localhost:8000/api/auth/signup/', signupState)
            .then(response => {
              console.log(response.data);
              // if signup was successful, redirect to login page
              if (response.data.message === 'User created successfully') {
                // redirect to login page
                navigate("/login/");
              }
            })
            .catch(error => {
              // Gérez les erreurs de la requête POST ici
            });
        })
        .catch(error => {
          // Gérez les erreurs de la requête GET ici
        });
    }

    return(
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="">
                {
                        fields.map(field=>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={signupState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                            />

                        )
                    }
                  <FormAction handleSubmit={handleSubmit} text="Signup" />
                </div>



              </form>
          </div>
      </div>
    )
}