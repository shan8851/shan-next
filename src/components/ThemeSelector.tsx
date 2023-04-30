import { useStore } from '@/lib/store';
import React, { useEffect } from 'react';

const ThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = React.useState('cyberpunkk');
  const setTheme = useStore((state) => state.setTheme);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    setTheme(selectedTheme)
  }, [selectedTheme])


  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost flex">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
        <p>Theme</p>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
      <li><a onClick={() => setSelectedTheme('light')}>Light</a></li>
        <li><a onClick={() => setSelectedTheme('dark')}>Dark</a></li>
        <li><a onClick={() => setSelectedTheme('corporate')}>Corporate</a></li>
        <li><a onClick={() => setSelectedTheme('synthwave')}>Synthwave</a></li>
        <li><a onClick={() => setSelectedTheme('retro')}>retro</a></li>
        <li><a onClick={() => setSelectedTheme('cyberpunk')}>Cyberpunk</a></li>
        <li><a onClick={() => setSelectedTheme('night')}>Night</a></li>
        <li><a onClick={() => setSelectedTheme('dracula')}>Dracula</a></li>
        <li><a onClick={() => setSelectedTheme('coffee')}>Coffee</a></li>
      </ul>
    </div>
  );
};

export default ThemeSelector;
