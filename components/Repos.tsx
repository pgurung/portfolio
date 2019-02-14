import React, { useState, useEffect } from 'react';

interface IRepo {
  id: number;
  title: string;
  url: string;
  desc: string;
}

export function Repos() {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const allRepos: IRepo[] = [];

    await fetch('https://api.github.com/users/pgurung/repos')
      .then(resp => resp.json())
      .then(data => {
        data.map((repo: any) => {
          let id = repo.id;
          let title = repo.name;
          let url = repo.html_url;
          let desc = repo.description;

          let entry: IRepo = { id, title, url, desc };

          allRepos.push(entry);
        });
      });

    await setRepos(allRepos);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <ol>
      {repos.map((repo: IRepo) => (
        <li key={repo.id}>
          <span>
            <a href={repo.url}>
              <em>{repo.title}</em>
            </a>
            {` : `}
            {repo.desc}
          </span>
        </li>
      ))}
    </ol>
  );
}
