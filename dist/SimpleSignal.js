/**
 * @author zeh fernando
 */
var SimpleSignal = (function () {
    // ================================================================================================================
    // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
    function SimpleSignal() {
        this.functions = [];
    }
    // ================================================================================================================
    // PUBLIC INTERFACE -----------------------------------------------------------------------------------------------
    SimpleSignal.prototype.add = function (func) {
        if (this.functions.indexOf(func) === -1) {
            this.functions.push(func);
            return true;
        }
        return false;
    };
    SimpleSignal.prototype.remove = function (func) {
        var ifr = this.functions.indexOf(func);
        if (ifr > -1) {
            this.functions.splice(ifr, 1);
            return true;
        }
        return false;
    };
    SimpleSignal.prototype.removeAll = function () {
        if (this.functions.length > 0) {
            this.functions.length = 0;
            return true;
        }
        return false;
    };
    SimpleSignal.prototype.dispatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var functionsDuplicate = this.functions.concat();
        functionsDuplicate.forEach(function (func) {
            func.apply(undefined, args);
        });
    };
    Object.defineProperty(SimpleSignal.prototype, "numItems", {
        // ================================================================================================================
        // ACCESSOR INTERFACE ---------------------------------------------------------------------------------------------
        get: function () {
            return this.functions.length;
        },
        enumerable: true,
        configurable: true
    });
    return SimpleSignal;
}());
export default SimpleSignal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlU2lnbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NpbXBsZVNpZ25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNIO0lBTUMsbUhBQW1IO0lBQ25ILG1IQUFtSDtJQUVuSDtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxtSEFBbUg7SUFDbkgsbUhBQW1IO0lBRTVHLDBCQUFHLEdBQVYsVUFBVyxJQUFNO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQU07UUFDbkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sZ0NBQVMsR0FBaEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUFnQixjQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLHlCQUFhOztRQUM1QixJQUFNLGtCQUFrQixHQUFjLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFNRCxzQkFBVyxrQ0FBUTtRQUhuQixtSEFBbUg7UUFDbkgsbUhBQW1IO2FBRW5IO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBeERELElBd0RDIn0=