class WebTheme {
  localStorage = null;

  constructor(localStrg) {
    if(localStrg !== undefined) this.localStorage = localStrg;
    else console.error('[web-theme] Sorry you cannot use web-theme without localStorage.');
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
        backgroundColor: 0xffffff,
        textColor: 0x000000,
        selectionColor: -1,
      }));
    } else {

    }

    console.log(`[web-theme] Theme with ${thmId} id has been applied.`);
  }

  // global themes very soon!
}