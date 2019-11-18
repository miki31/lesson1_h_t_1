function createElement() {
  // потрібно реалізувати

  function isParentElement(obj) {
    for (let index = 0; index < obj.length; index++) {
      if (Array.isArray(obj[index])) {
        return obj[index];
      }
    }
    return false;
  }

  function hasParam(obj, param) {
    for (let index = 0; index < obj.length; index++) {
      // if ('style' in obj[index]) {
      if (obj[index] instanceof Object) {
        if (param in obj[index]) {
          return obj[index];
        }
      }
    }
    return false;
  }

  function putStyles(object) {
    object = object.style;
    let style = '';
    for (let key in object) {
      let keyCSS = '';

      for (let i = 0; i < key.length; i++) {
        let c = key.charAt(i);
        let isUpperCase = c.toUpperCase() === c;
        if (isUpperCase) {
          keyCSS += '-';
          keyCSS += c.toLowerCase();
        } else {
          keyCSS += c;
        }
      }

      style += keyCSS;
      style += ': ';
      style += object[key];
      style += ';';
    }
    elem.style.cssText = style;
  }

  function addChildren(elems) {
    // let elems = arguments[2];
    for (let i = 0; i < elems.length; i++) {
      if (i === 2) {
        elem.appendChild(document.createTextNode(elems[i]));
      } else {
        elem.appendChild(elems[i]);
      }
    }
  }

  function hasText(obj) {
    for (let index = 1; index < obj.length; index++) {
      if (typeof obj[index] === 'string') {
        return obj[index];
      }
    }
    let o = hasParam(obj, 'textContent');
    if (o) {
      return o.textContent;
    }
    return false;
  }

  function addText(text) {
    var content = document.createTextNode(text);
    elem.appendChild(content);
    elem.text = content;
  }

  // створення елемента за назвою
  let elem = document.createElement(arguments[0]);

  // додати стилі
  var object = hasParam(arguments, 'style');
  if (object) {
    putStyles(object);
  }

  // Якщо елемент (об'єкт) містить в собі масив то він батьківський
  var children = isParentElement(arguments);
  if (children) {
    addChildren(children);
  }

  // Додати текст
  let text = hasText(arguments);
  if (text) {
    addText(text);
  }

  return elem;
}

function render() {
  // потрібно реалізувати

  var wrappedApp = arguments[1];
  wrappedApp.appendChild(arguments[0]);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
