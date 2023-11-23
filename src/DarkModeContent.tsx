import React from 'react';
import { useDarkMode } from './darkModeProvider';
import { ToggleDarkModeButton } from './ToggleDarkModeButton';

export const DarkModeContent = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-drm' : ''}>
      <div className="bg-theme-drm color-theme-drm p-5">
        <header>
          <h1 className="title">Titulo</h1>
        </header>
        <div className="content">
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino
          </p>
          <ToggleDarkModeButton />
        </div>
      </div>
    </div>
  );
};
