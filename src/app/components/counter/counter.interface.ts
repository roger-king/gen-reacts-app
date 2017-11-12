export default interface ICounterProps {
    readonly counter: number;
    increment: () => void;
    decrement: () => void;
}