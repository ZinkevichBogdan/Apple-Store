function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// https://api.myjson.com/bins/esicc
fetch('db/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 2000);

    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render()
    });
