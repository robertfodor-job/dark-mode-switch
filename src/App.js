import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
  let theme = 'light-theme';
  // let checking = false;
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    // checking = localStorage.getItem('checking');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme);
  // const [checked, setChecked] = useState(false);

  const toggleThemeHandler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      // setChecked(false);
    }
    if (theme === 'dark-theme') {
      setTheme('light-theme');
      // setChecked(true);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>

          <label class="switch">
            <input
              type="checkbox"
              onClick={toggleThemeHandler}
              // defaultChecked={checked}
            />
            <span class="slider round" />
          </label>
        </div>
      </nav>
      <section className="articles">
        {data.map(item => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
