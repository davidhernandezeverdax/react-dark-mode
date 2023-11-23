import { FC } from 'react';
import { DarkModeContent } from './DarkModeContent';
import { DarkModeProvider } from './darkModeProvider';
import './style.css';

export const App: FC = () => {
  return (
    <DarkModeProvider>
      <DarkModeContent />
    </DarkModeProvider>
  );
};
