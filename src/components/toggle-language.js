import React from 'react';

import './toggle-language.scss';

export default function ToggleLanguage({ onClick, language }) {

    return(
        <button
            className="toggle-lang" 
            onClick={onClick}>
            {language === 'jp' ? 'ENG' : '日本語'}
        </button>
    )
}
