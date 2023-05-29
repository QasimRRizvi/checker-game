import React, { useState } from 'react';

const GameModes: React.FC = () => {
  const [mode, setMode] = useState<string>('pvp'); // Default mode: player vs. player

  const handleModeChange = (newMode: string) => {
    setMode(newMode);
  };

  return (
    <div className='p-16 rounded bg-white'>
      <div className='text-black'>
        <h2 className='text-xl font-bold mb-2'>Select Game Mode</h2>
        <div>
          <label>
            <input
              type='radio'
              value='pvp'
              checked={mode === 'pvp'}
              onChange={() => handleModeChange('pvp')}
              className='mr-2'
            />
            Player vs. Player
          </label>
        </div>
        <div>
          <label>
            <input
              type='radio'
              value='pvc'
              checked={mode === 'pvc'}
              onChange={() => handleModeChange('pvc')}
              className='mr-2'
            />
            Player vs. Computer
          </label>
        </div>
        {/* Render additional game settings/options based on the selected mode */}
        {mode === 'pvc' && (
          <div>
            <label>
              <input type='checkbox' className='mr-2' /> Force Capture
            </label>
          </div>
        )}
        {/* Render a button to start the game */}
        <div className='w-full flex justify-center items-center'>
          <button
            onClick={() => console.log('Start Game')}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
