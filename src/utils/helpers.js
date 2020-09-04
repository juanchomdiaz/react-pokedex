export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//Parse abilities' translations from POKEAPI and load them as i18next resources.
export function loadAbilitiesTranslations(abilities, i18n) {
  abilities.forEach((ability) => {
    let name = ability.name.replace("-", "_");
    let desc = name + "_desc";

    i18n.languages.forEach((lng) => {
      let translations = {};
      translations[name] = ability.names.find(
        (n) => n.language.name === lng
      ).name;
      translations[desc] = ability.flavor_text_entries.find(
        (fte) => fte.language.name === lng
      ).flavor_text;

      i18n.addResources(lng, "translation", translations);
    });
  });
}

export function parseStats(stats) {
  let statsObj = {};

  stats.map((stat) => (statsObj[stat.stat.name] = stat.base_stat));

  return statsObj;
};

