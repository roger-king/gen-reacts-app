export default interface ICounterProps {
    readonly counter: number;
    increment: (by: number) => any;
    decrement: (by: number) => any;
}
