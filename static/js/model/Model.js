class Model {
    #list = [];
    constructor() {

    }
    
    DataIn(endPoint, myCallBack) {
        fetch(endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#list = data;
                myCallBack(this.#list);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


}
export default Model;