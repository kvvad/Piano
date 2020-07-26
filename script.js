document.addEventListener("keydown", event => {
	let key = event.key;
	if (key.match(/[asdfghwetyujASDFGHJWETYU]/)) {
		let sound = new Audio(`./assets/${key.toLocaleLowerCase()}.mp3`)
		sound.play()
	}else {
		console.log("Wrong key pressed!")
	}
});