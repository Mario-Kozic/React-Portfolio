
function AutoTyping(options) {
  let counter = 0, blinkcursor, counterText = 1, callBack = null, calBackCounter = 0, userCounter = null;
  if (options.textColor === undefined || typeof(options.textColor) !== 'string') {
    options.textColor = '#000';
  }
  if (options.typeSpeed === undefined || typeof(options.typeSpeed) !== 'number') {
    options.typeSpeed = 100;
  }
  if (options.typeRandom === undefined || options.typeRandom == false || typeof(options.typeRandom) !== 'boolean') {
    options.typeRandom = false;
  }
  if (options.typeDelay === undefined || typeof(options.typeDelay) !== 'number') {
    options.typeDelay = 100;
  }
  if (options.cursor === undefined || typeof(options.cursor) !== 'string') {
    options.cursor = '|';
  }
  if (options.cursorColor === undefined || typeof(options.cursorColor) !== 'string') {
    options.cursorColor = '#000';
  }
  if (options.cursorSpeed === undefined || typeof(options.cursorSpeed) !==- 'number') {
    options.cursorSpeed = 300;
  }
  if (options.deleteSpeed === undefined || typeof(options.deleteSpeed) !== 'number') {
    options.deleteSpeed = 50;
  }
  if (options.deleteDelay === undefined || typeof(options.deleteDelay) !== 'number') {
    options.deleteDelay = 2000;
  }
  if (options.callBack !== undefined && typeof(options.callBack) === 'object') {
    callBack = options.callBack.method;
    if (options.callBack.counter !== undefined && typeof(options.callBack.counter) === 'number') {
      userCounter = options.callBack.counter;
    }
  }
  if (options.typeInfinity === undefined || options.typeInfinity === true || typeof(options.typeInfinity) !== 'boolean') {
    options.typeInfinity = true;
  }else{
    options.typeInfinity = false;
  }

  this.typingElement = document.querySelector('#' + options.id);
  this.typingArea = this.typingElement.appendChild(document.createElement("span"));
  this.cursor = this.typingElement.appendChild(document.createElement("span"));
  this.typeSpeed = options.typeSpeed;
  this.typeSpeedRandom = options.typeRandom;
  this.typingArea.style.color = options.textColor;
  this.cursor.style.color = options.cursorColor;
  this.cursor.innerHTML = options.cursor;
  this.cursorSpeed = options.cursorSpeed;
  this.typeText = options.typeText;
  this.deleteSpeed = options.deleteSpeed;
  this.deleteDelay = options.deleteDelay;
  this.typeDelay = options.typeDelay;
  this.typeInfinity = options.typeInfinity;
  this.callBack = callBack;
  this.userCounter = userCounter;
  //hidden element for prevent that the main element when typing / deleting appears and disappears
  this.helpingElement = this.typingElement.appendChild(document.createElement("span"));
  this.helpingElement.innerHTML = '.';
  this.helpingElement.style.visibility = 'hidden';

  this.init = function () {
    let startApp = start.bind(this);
    startApp();
    function start() {
      if (calBackCounter && this.callBack) {
        calBackCounter = 0;
        (this.callBack)(this.userCounter);
        if (typeof(this.userCounter) === 'number') {
          if (this.userCounter > 0) {
            this.userCounter--;
          }else{
            this.userCounter = userCounter;
          }
        }
      }
      clearInterval(blinkcursor);//stop blinking cursor
      this.cursor.style.visibility = 'visible';
      let tempArr = [];
      let text = this.typeText[counter].split("");
      counter++;
      if (counter === this.typeText.length) {
        counter = 0;
        (!this.typeInfinity)? counterText = 0 : counterText = 1;
      }
      let startTypingText = startTyping.bind(this);
      startTypingText();//typing start
      function startTyping() {
        let typeLetter = text.shift();
        tempArr.push(typeLetter);
        this.typingArea.innerHTML += typeLetter;
        (this.typeSpeedRandom)? this.typeSpeed += Math.floor(Math.random() * 200) : this.typeSpeed;//random typing or not
        let loop = setTimeout(startTypingText,this.typeSpeed);
        this.typeSpeed = options.typeSpeed;
        if (text.length === 0) {
          clearTimeout(loop);
          //settings for blinking cursor
          let temp = 0;
          let blinking = blink.bind(this);
          function blink () {
            if (temp === 0) {
              this.cursor.style.visibility = 'hidden';
              temp = 1;
            }else{
              this.cursor.style.visibility = 'visible';
              temp = 0;
            }
          }
          blinkcursor = setInterval(blinking,this.cursorSpeed);

          setTimeout(deleteTypingText,this.deleteDelay);//delete typing
        }
      }
      //settings for deleting typing text
      let deleteTypingText = deleteTyping.bind(this);
      function deleteTyping() {
        clearInterval(blinkcursor);//stop blinking cursor
        this.cursor.style.visibility = 'visible';
        tempArr.pop();
        let delText = '';
        for (let i = 0; i < tempArr.length; i++) {
          delText += tempArr[i];
        }
        this.typingArea.innerHTML = delText;
        let loop = setTimeout(deleteTypingText,this.deleteSpeed);
        if (tempArr.length === 0) {
          clearTimeout(loop);
          //settings for blinking cursor
          let temp = 0;
          let blinking = blink.bind(this);
          function blink () {
            if (temp === 0) {
              this.cursor.style.visibility = 'hidden';
              temp = 1;
            }else{
              this.cursor.style.visibility = 'visible';
              temp = 0;
            }
          }
          blinkcursor = setInterval(blinking,this.cursorSpeed);
          //stop app or not
          if (!this.typeInfinity && !counterText) {
            clearInterval(blinkcursor);
            this.cursor.style.visibility = 'hidden';
            return;
          }else{
            if (this.callBack) {
              calBackCounter++;
            }
            setTimeout(startApp,this.typeDelay);
          }
        }
      }
    }
  }
}