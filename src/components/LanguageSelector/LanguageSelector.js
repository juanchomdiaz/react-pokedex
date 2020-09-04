import React from "react";
import { useTranslation } from "react-i18next";
import { NavDropdown, Nav } from "react-bootstrap";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  if (i18n.languages.length===0) return;

  return (
    <Nav>
      <NavDropdown title={t(i18n.language)} id="language-selector" alignRight>
        {i18n.languages.map((language) => (
          <NavDropdown.Item
            key={language}
            onClick={() => i18n.changeLanguage(language)}
          >
            {t(language)}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav>
  );
};

export default LanguageSelector;
