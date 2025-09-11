import useToggle from "./useToggle";

export default function useToggleMotion(initial = false) {
    const [isOpen, toggle] = useToggle(initial);

    const motionProps = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 },
        transition: { duration: 0.3 },
    };

    return { isOpen, toggle, motionProps };
}