const BUTTON_CREATE_ITEM = document.querySelector('#create-item');
const KEYPRESS_CREATE_INPUT = document.querySelector('input');
const KEYPRESS_SAVE_INPUT = document.querySelector('.list-input')

const createNewItem = () => {
    const newItem = document.querySelector('.input').value;
    if (newItem !== '') {
        createNewItemTodo(newItem);
    }
}

const createNewItemByKeypress = (value) => {
    value.addEventListener('keypress', () => {
        if (event.key === "Enter") {
            createNewItem()
        }

    })
}



BUTTON_CREATE_ITEM.addEventListener('click', () => {
   createNewItem()
})

createNewItemByKeypress(KEYPRESS_CREATE_INPUT);


const handleChangeCheckbox = (isChecked, checkbox, label, time) => {
    if (isChecked) {
        label.style.textDecoration = 'line-through';
        time.style.textDecoration = 'line-through';
    } else {
        label.style.textDecoration = 'none';
        time.style.textDecoration = 'none';
    }
};

const createNewItemTodo = (value) => {
    document.querySelector('.input').value = '';
    const li = document.createElement('li');
    const checkBox = document.createElement("input");
    checkBox.className = 'checkbox';
    const attr = document.createAttribute('draggable');
    const ul = document.querySelector('ul');
    const label = document.createElement("label");
    const time = document.createElement("span");
    const labelInput = document.createElement("input");
    const editItem = document.createElement("button");
    const saveEdit = document.createElement("button");
    const deleteItem = document.createElement("button");

    label.innerText = value;
    labelInput.value = value;
    labelInput.className = "list-input";
    label.className = "list-label"
    saveEdit.innerText = "Save"
    saveEdit.style.display = "none";
    deleteItem.innerText = "Delete";
    labelInput.style.display = "none";
    li.className = 'draggable';
    attr.value = 'true';
    editItem.innerText = "Edit";
    time.className = "time";
    li.draggable = true;
    checkBox.type = "checkbox";

    for (let i = 0; i <= document.getElementsByTagName("li").length; i++) {
        li.id += i;
    }

    li.addEventListener('dragend', (event) => {
        dragEnd();
    })

    li.addEventListener('dragover', (event) => {
        dragOver(event);
    })

    li.addEventListener('dragstart', (event) => {
        dragStart(event);
    })

    checkBox.addEventListener('change', (event) => {
        handleChangeCheckbox(event.target.checked, checkBox, label, time);
    });

    deleteItem.addEventListener('click', (event) => {
        li.remove()
    });

    saveFunction(saveEdit, editItem, labelInput, label)
    time.innerText = new Date().toISOString();
    editFunction(editItem, saveEdit, labelInput);

    li.setAttributeNode(attr);
    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(labelInput);
    li.appendChild(time);
    li.appendChild(editItem);
    li.appendChild(saveEdit);
    li.appendChild(deleteItem);
    ul.appendChild(li);
};

const sort = (typeSort) => {
    const arrLabel = document.querySelectorAll("li");
    const list = document.querySelector("ul")
    const arrValueLabel = [];
    let result;

    arrLabel.forEach(element => arrValueLabel.push(arrLabel));

    if (typeSort === "ABC") {
        result = Array.from(arrLabel).sort((a, b) => {
                return a.querySelector('label').innerText.localeCompare(b.querySelector('label').innerText);
            }
        )
    } else if (typeSort === "CBA") {
        result = Array.from(arrLabel).sort((a, b) => {
                return b.querySelector('label').innerText.localeCompare(a.querySelector('label').innerText);
            }
        )
    } else if (typeSort === "Date") {
        result = Array.from(arrLabel).sort((a, b) => {
                return new Date(b.querySelector("span").innerText) - new Date(a.querySelector("span").innerText);
            }
        )
    } else if (typeSort === "DateRevers") {
        result = Array.from(arrLabel).sort((a, b) => {
                return new Date(a.querySelector("span").innerText) - new Date(b.querySelector("span").innerText);
            }
        )
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
    return result || []
}

const handleClickSort = (type) => {
    const result = sort(type)
    const container = document.querySelector('ul');
    result.forEach(element => {
        container.appendChild(element)
    })
}

const saveFunction = (saveEdit, editItem, labelInput, label) => {
    saveEdit.addEventListener('click', (event) => {
        editItem.style.display = "block"
        saveEdit.style.display = "none"
        labelInput.style.display = "none"
        label.innerText = labelInput.value
    });
}

const editFunction = (editItem, saveEdit, labelInput) => {
    editItem.addEventListener('click', (event) => {
        editItem.style.display = "none"
        saveEdit.style.display = "block"
        labelInput.style.display = "inline"

    });
}

let selected = null

const dragOver = (e) => {
    if (isBefore(selected, e.target)) {
        e.target.parentNode.insertBefore(selected, e.target)
    } else {
        e.target.parentNode.insertBefore(selected, document.getElementById(`${e.target.id}`).nextSibling)
    }
}

const dragEnd = () => {
    selected = null
}

const dragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', null)
    selected = e.target

}

const isBefore = (el1, el2) => {
    let cur
    if (el2.parentNode === el1.parentNode) {
        for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
            if (cur === el2) {
                return true
            }

        }
    }
    return false;
}
