(function init() {
    loadJSON(function(response) {
        const data = JSON.parse(response);
        const collection = document.getElementById('name-collection');
        const documentFragment = document.createDocumentFragment();
        data.forEach((person) => {
            const category = document.createElement('li');
            category.className += 'collection-header';
            const categoryTitle = document.createElement('h5');
            categoryTitle.innerText = person.name[0];
            category.appendChild(categoryTitle);
            documentFragment.appendChild(category);
            
            const name = document.createElement('li');
            name.className += 'collection-item';
            const link = document.createElement('a');
            link.href = '#'
            link.innerText = person.name;
            name.appendChild(link);
            documentFragment.appendChild(name);
        });

        const fragmentChildren = documentFragment.childNodes;
        let childText = '';

        for (let i = 0; i < fragmentChildren.length; i += 1) {
            if (fragmentChildren[i].innerHTML.indexOf('h5') !== - 1) {
                if (fragmentChildren[i].innerText !== childText) {
                    childText = fragmentChildren[i].innerText;
                } else {
                    documentFragment.removeChild(fragmentChildren[i]);
                }
            }
        }

        collection.appendChild(documentFragment);
    });
})();

function loadJSON(callback) {   

    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './data.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };

    xobj.send(null);  
}
 