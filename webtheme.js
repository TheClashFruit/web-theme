class WebTheme {
  localStorage = null;

  rootVars = {
    backgroundColour: '--backgroundColour',
    textColour: '--textColour',
    selectionColour: '--selectionColour'
  };

  constructor(localStrg) {
    if(localStrg !== undefined) this.localStorage = localStrg;
    else console.error('[web-theme] Sorry you cannot use web-theme without localStorage.');
  }

  setRootVarSettings(settingJson) {
    this.rootVars = settingJson;
  }

  addTheme(thmId, thmJson) {
    let currentThmList;

    if(this.localStorage.getItem('wb-availableThm') === '' || this.localStorage.getItem('wb-availableThm') == undefined) currentThmList = [];
    else currentThmList = JSON.parse(this.localStorage.getItem('wb-availableThm'));

    thmJson.themeId = thmId;

    if(currentThmList === []) {
      currentThmList.push(thmJson);

      this.localStorage.setItem('wb-availableThm', JSON.stringify(currentThmList));
    } else {
      currentThmList.forEach((thmJsonTmp) => {
        if(thmJson.themeId !== thmJsonTmp.themeId) {
          currentThmList.push(thmJson);

          this.localStorage.setItem('wb-availableThm', JSON.stringify(currentThmList));
        }
      });
    }
  }

  applyTheme(thmId) {
    if(thmId === 'df') {
      this.localStorage.setItem('wb-currentThm', JSON.stringify({
        backgroundColour: 0xffffff,
        textColour: 0x000000,
        selectionColour: -1,
      }));

      const styleElement = document.createElement('style');

      styleElement.innerText = `:root { ${this.rootVars.backgroundColour}: #ffffff; ${this.rootVars.textColour}: #000000; }`;

      document.querySelector('head').appendChild(styleElement);
    } else {

    }

    console.log(`[web-theme] Theme with ${thmId} id has been applied.`);
  }

  // global themes very soon!
}