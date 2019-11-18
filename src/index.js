function createElement() {
  // потрібно реалізувати

  // створення елемента за назвою
  var elem = document.createElement(arguments[0]);

  // Якщо 3-й елемент масив то отримано батьківський елемент
  if (Array.isArray(arguments[2])) {
    //
    if ('style' in arguments[1]) {
      let object = arguments[1].style;
      let style = '';
      for (let key in object) {
        let keyCSS = '';

        for (let i = 0; i < key.length; i++) {
          var c = key.charAt(i);
          var isUpperCase = c.toUpperCase() === c;
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

    let elems = arguments[2];
    for (let i = 0; i < elems.length; i++) {
      if (i === 2) {
        elem.appendChild(document.createTextNode(elems[i]));
      } else {
        elem.appendChild(elems[i]);
      }
    }
  } // інакше - дочірній
  // перевірка чи це не елемент (типу <br>) без атрибутів
  else if (arguments.length !== 1) {
    var text;
    if (arguments.length === 2) {
      if (typeof arguments[1] === String) {
        text = arguments[1];
      } else {
        text = arguments[1].textContent;
      }
    } else {
      text = arguments[2];
    }
    var content = document.createTextNode(text);
    elem.appendChild(content);
    elem.text = content;
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
