import * as React from "react";

export const useScrollProgress = (rootElement: React.RefObject<HTMLDivElement>): number => {
	const [scrollProgress, setScrollProgress] = React.useState(0);

	React.useEffect(() => {
		if (!rootElement.current) {
			return;
		}

		const onScroll = (e: Event) => {
			const root = rootElement.current;

            if (!root) {
                return
            }

			const window = e.currentTarget as Window;

			const windowHeight = window.innerHeight;
			const sectionHeight = root.offsetHeight;
			const offset = Math.abs(Math.min(root.getBoundingClientRect().top, 0));
			const progress = offset / (sectionHeight - windowHeight);
			const validProgress = Math.max(Math.min(progress, 1), 0);
			setScrollProgress(validProgress);
		};

		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [rootElement]);

	return scrollProgress;
};
