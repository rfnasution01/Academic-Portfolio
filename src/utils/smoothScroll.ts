export function smoothScrollTo(
	targetId: string,
	containerId = "app-scroll",
	duration = 900,
) {
	const container = document.getElementById(containerId);
	const target = document.getElementById(targetId);

	// TypeScript butuh pengecekan eksplisit ini
	if (!(container instanceof HTMLElement) || !(target instanceof HTMLElement)) {
		return;
	}

	// Sekarang TypeScript tahu container & target adalah HTMLElement (bukan null)
	const startPosition = container.scrollTop;
	const targetPosition = target.offsetTop;
	const startTime = performance.now();

	const easeInOutCubic = (t: number) =>
		t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

	function animate(currentTime: number) {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const eased = easeInOutCubic(progress);

		// TypeScript tidak akan protes lagi di sini
		container!.scrollTop =
			startPosition + (targetPosition - startPosition) * eased;

		if (progress < 1) {
			requestAnimationFrame(animate);
		}
	}

	requestAnimationFrame(animate);
}
