import React from 'react';
import Terminal from 'libra-cli';

import CommandsPreset from './commands-preset.tsx';

const CLI = () => {
  return (
    <div className="cli">
      <Terminal Commands={CommandsPreset} />
    </div>
  );
};

export default CLI;
