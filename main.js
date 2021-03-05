// Load External Javascript files
const loadHeroScript = document.createElement('script');
loadHeroScript.src = './js/heroScript.js';
document.head.appendChild(loadHeroScript);
const loadLoadingState = document.createElement('script');
loadLoadingState.src = './js/loadingState.js';
document.head.appendChild(loadLoadingState);
const loadPlaystate = document.createElement('script');
loadPlaystate.src = './js/playState.js';
document.head.appendChild(loadPlaystate);

window.addEventListener('load', () => {
    const game = new window.Phaser.Game(960, 600, window.Phaser.AUTO, 'game');
    game.state.disableVisibilityChange = true; // This allows two windows to be open at the same time and allow both windows to run the update function
    game.state.add('play', window.PlayState);
    game.state.add('loading', window.LoadingState);
    //window.createMyPubNub(0); // Connect to the PubNub network and run level code 0
    //window.StartLoading = function () {
      game.state.start('loading'); // Run the loading function once you successfully connect to the PubNub network
    //};
});