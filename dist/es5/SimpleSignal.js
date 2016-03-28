"use strict";
/**
 * @author zeh fernando
 */
var SimpleSignal = (function () {
    // ================================================================================================================
    // CONSTRUCTOR ----------------------------------------------------------------------------------------------------
    function SimpleSignal() {
        // Properties
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
        this.ifr = this.functions.indexOf(func);
        if (this.ifr > -1) {
            this.functions.splice(this.ifr, 1);
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
            args[_i - 0] = arguments[_i];
        }
        var functionsDuplicate = this.functions.concat();
        for (var i = 0; i < functionsDuplicate.length; i++) {
            functionsDuplicate[i].apply(undefined, args);
        }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleSignal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlU2lnbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL1NpbXBsZVNpZ25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSDtJQVNDLG1IQUFtSDtJQUNuSCxtSEFBbUg7SUFFbkg7UUFWQSxhQUFhO1FBQ0wsY0FBUyxHQUFZLEVBQUUsQ0FBQztJQVVoQyxDQUFDO0lBR0QsbUhBQW1IO0lBQ25ILG1IQUFtSDtJQUU1RywwQkFBRyxHQUFWLFVBQVcsSUFBTTtRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxJQUFNO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sZ0NBQVMsR0FBaEI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRU0sK0JBQVEsR0FBZjtRQUFnQixjQUFhO2FBQWIsV0FBYSxDQUFiLHNCQUFhLENBQWIsSUFBYTtZQUFiLDZCQUFhOztRQUM1QixJQUFJLGtCQUFrQixHQUFtQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEQsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDO0lBQ0YsQ0FBQztJQU1ELHNCQUFXLGtDQUFRO1FBSG5CLG1IQUFtSDtRQUNuSCxtSEFBbUg7YUFFbkg7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRixtQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExREQ7OEJBMERDLENBQUEifQ==