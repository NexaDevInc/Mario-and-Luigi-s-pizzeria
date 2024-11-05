
class OptionView {

    constructor(parentElement, topping) {
        console.log("nichi: ", topping);
            parentElement.append(`
                <input type="checkbox" name="extra" value="${topping.topping}">
                <label for="extra">${topping.topping}: ${topping.price} $</label><br>
                `)




    }

}
export default OptionView;