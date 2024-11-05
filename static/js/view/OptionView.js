
class OptionView {

    constructor(parentElement, topping) {
        console.log("nichi: ", topping);
            parentElement.append(`
                <p>${topping.topping}: ${topping.price} $</p>
                `)




    }

}
export default OptionView;