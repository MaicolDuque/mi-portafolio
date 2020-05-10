import React, { useEffect, useState } from 'react'
// import repos from '../data/repos'
import Repo from '../components/Repo'
import imgGH from '../img/mark-github.svg'

export default () => {

  const [repos, setRepos] = useState([]);
  const [reposCount, setReposCount] = useState([]);

  useEffect(() => {

    const data = sessionStorage.getItem("repos");
    let myRepos;
    if(data){
      myRepos = JSON.parse(data);
      setReposCount(myRepos.length)
      myRepos   = myRepos.slice(1,16);
      return setRepos(myRepos);
    }
    async function fetchRepos(){
      const response  = await fetch("https://api.github.com/users/MaicolDuque/repos");
      myRepos   = await response.json();  
      setReposCount(myRepos.length)
      myRepos   = myRepos.slice(1,16);      
      sessionStorage.setItem("repos", JSON.stringify(myRepos))    
      setRepos(myRepos);
    }
    fetchRepos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <header className="text-center">
        <h2 className="text-3xl font-bold colorLetra border-titles">Mi trabajo en Open Source</h2> <span><img src={imgGH} alt="GitHub" className="inline-block" style={{width: "3%"}}></img></span>
        <p>Colaboración y contribución de código</p>
      </header>
      <ul className="repos-list">
        {
          repos.map((repo, index) => {
            return <Repo key={index} repo={repo} />
          })
        }
      </ul>
      <div className="mt-8 text-center">
        <a href="https://github.com/MaicolDuque" className="btn" target="_blank" rel="noopener noreferrer">
          Ver más en GitHub - {reposCount}
        </a>
      </div>
    </div>
  )
};