module.exports = function portListener(port) {
	const p = port || 9099;
	const msg = `Listening on port ${p}`;
	return [p, console.log(msg)]
}