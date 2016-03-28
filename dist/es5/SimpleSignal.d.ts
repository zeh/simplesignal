/**
 * @author zeh fernando
 */
export default class SimpleSignal<F extends Function> {
    private functions;
    private ifr;
    constructor();
    add(func: F): boolean;
    remove(func: F): boolean;
    removeAll(): boolean;
    dispatch(...args: any[]): void;
    numItems: number;
}
