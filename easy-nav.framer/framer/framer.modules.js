require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"EasyNav":[function(require,module,exports){
var child, i, isRootLayer, j, k, len, moveDown, moveLeft, moveRight, moveUp, pressBack, pressOK, ref, setAdjacentLayers;

k = require("Keyboard");

isRootLayer = function(layer) {
  if (layer.parent === null) {
    return true;
  } else {
    return false;
  }
};

exports.currentLayer = "";

exports.setCurrent = function(tempFrame) {
  exports.currentLayer.visible = false;
  tempFrame.x = 0;
  tempFrame.y = 0;
  tempFrame.bringToFront();
  tempFrame.visible = true;
  return exports.currentLayer = tempFrame;
};

setAdjacentLayers = (function(_this) {
  return function(layer) {
    var child, downLayer, i, j, l, leftLayer, len, len1, len2, m, ref, results, rightLayer, upLayer, xLayers, yLayers;
    xLayers = [];
    yLayers = [];
    ref = Framer.CurrentContext.layers;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      child = ref[i];
      if (isRootLayer(child) === true) {
        if (child.x === layer.x) {
          yLayers.push(child);
        }
        if (child.y === layer.y) {
          xLayers.push(child);
        }
      }
    }
    xLayers.sort(function(a, b) {
      return a.x - b.x;
    });
    yLayers.sort(function(a, b) {
      return a.y - b.y;
    });
    for (i = l = 0, len1 = xLayers.length; l < len1; i = ++l) {
      child = xLayers[i];
      if (layer === child) {
        if (xLayers[i - 1] != null) {
          leftLayer = xLayers[i - 1];
          child.leftEvent = function() {
            return _this.setCurrent(leftLayer, child);
          };
        }
        if (xLayers[i + 1] != null) {
          rightLayer = xLayers[i + 1];
          child.rightEvent = function() {
            return _this.setCurrent(rightLayer, child);
          };
        }
      }
    }
    results = [];
    for (i = m = 0, len2 = yLayers.length; m < len2; i = ++m) {
      child = yLayers[i];
      if (layer === child) {
        if (yLayers[i - 1] != null) {
          upLayer = yLayers[i - 1];
          child.upEvent = function() {
            return _this.setCurrent(upLayer, child);
          };
        }
        if (yLayers[i + 1] != null) {
          downLayer = yLayers[i + 1];
          results.push(child.downEvent = function() {
            return _this.setCurrent(downLayer, child);
          });
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
})(this);

ref = Framer.CurrentContext.layers;
for (i = j = 0, len = ref.length; j < len; i = ++j) {
  child = ref[i];
  if (isRootLayer(child) === true) {
    setAdjacentLayers(child);
    child.visible = false;
  }
}

if (typeof first !== "undefined" && first !== null) {
  this.setCurrent(first);
} else {
  throw "You need a layer targeted as 'first'";
}

moveLeft = function() {
  if (exports.currentLayer.leftEvent != null) {
    return exports.currentLayer.leftEvent();
  }
};

moveRight = function() {
  if (exports.currentLayer.rightEvent != null) {
    return exports.currentLayer.rightEvent();
  }
};

moveUp = function() {
  if (exports.currentLayer.upEvent != null) {
    return exports.currentLayer.upEvent();
  }
};

moveDown = function() {
  if (exports.currentLayer.downEvent != null) {
    return exports.currentLayer.downEvent();
  }
};

pressOK = function() {
  if (exports.currentLayer.okEvent != null) {
    return exports.currentLayer.okEvent();
  }
};

pressBack = function() {
  if (exports.currentLayer.backEvent != null) {
    return exports.currentLayer.backEvent();
  }
};

k.onKey(k.left, moveLeft);

k.onKey(k.right, moveRight);

k.onKey(k.up, moveUp);

k.onKey(k.down, moveDown);

k.onKey(k.enter, pressOK);

k.onKey(k.b, pressBack);


},{"Keyboard":"Keyboard"}],"Keyboard":[function(require,module,exports){
var keyMap;

exports.backspace = 8;

exports.tab = 9;

exports.enter = 13;

exports.shift = 16;

exports.ctrl = 17;

exports.alt = 18;

exports.caps = 20;

exports.escape = 27;

exports.pageUp = 33;

exports.pageDown = 34;

exports.left = 37;

exports.up = 38;

exports.right = 39;

exports.down = 40;

exports["delete"] = 46;

exports.zero = 48;

exports.one = 49;

exports.two = 50;

exports.three = 51;

exports.four = 52;

exports.five = 53;

exports.six = 54;

exports.seven = 55;

exports.eight = 56;

exports.nine = 57;

exports.a = 65;

exports.b = 66;

exports.c = 67;

exports.d = 68;

exports.e = 69;

exports.f = 70;

exports.g = 71;

exports.h = 72;

exports.i = 73;

exports.j = 74;

exports.k = 75;

exports.l = 76;

exports.m = 77;

exports.n = 78;

exports.o = 79;

exports.p = 80;

exports.q = 81;

exports.r = 82;

exports.s = 83;

exports.t = 84;

exports.u = 85;

exports.v = 86;

exports.w = 87;

exports.x = 88;

exports.y = 89;

exports.z = 90;

exports.numZero = 96;

exports.numOne = 97;

exports.numTwo = 98;

exports.numThree = 99;

exports.numFour = 100;

exports.numFive = 101;

exports.numSix = 102;

exports.numSeven = 103;

exports.numEight = 104;

exports.numNine = 105;

exports.fOne = 112;

exports.fTwo = 113;

exports.fThree = 114;

exports.fFour = 115;

exports.fFive = 116;

exports.fSix = 117;

exports.fSeven = 118;

exports.fEight = 119;

exports.fNine = 120;

exports.fTen = 121;

exports.semiColon = 186;

exports.equalSign = 187;

exports.comma = 188;

exports.dash = 189;

exports.period = 190;

exports.forwardSlash = 191;

exports.openBracket = 219;

exports.backSlash = 220;

exports.closeBracket = 221;

exports.singleQuote = 222;

keyMap = {};

exports.onKey = function(key, handler, throttleTime) {
  if (handler !== void 0) {
    return keyMap[key] = Utils.throttle(throttleTime, handler);
  } else {
    return keyMap[key] = "";
  }
};

exports.offKey = function(key) {
  return delete keyMap[key];
};

window.addEventListener('keydown', function(event) {
  var handler;
  event.preventDefault();
  handler = keyMap[event.keyCode];
  if (handler) {
    return handler();
  }
});


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NmcmFzZXIvZGV2L2ZyYW1lci9FYXN5TmF2LWZvci1GcmFtZXItU3R1ZGlvL2Vhc3ktbmF2LmZyYW1lci9tb2R1bGVzL0tleWJvYXJkLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NmcmFzZXIvZGV2L2ZyYW1lci9FYXN5TmF2LWZvci1GcmFtZXItU3R1ZGlvL2Vhc3ktbmF2LmZyYW1lci9tb2R1bGVzL0Vhc3lOYXYuY29mZmVlIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIjIEtleXNcbmV4cG9ydHMuYmFja3NwYWNlID0gOFxuZXhwb3J0cy50YWIgPSA5XG5leHBvcnRzLmVudGVyID0gMTNcbmV4cG9ydHMuc2hpZnQgPSAxNlxuZXhwb3J0cy5jdHJsID0gMTdcbmV4cG9ydHMuYWx0ID0gMThcblxuZXhwb3J0cy5jYXBzID0gMjBcbmV4cG9ydHMuZXNjYXBlID0gMjdcbmV4cG9ydHMucGFnZVVwID0gMzNcbmV4cG9ydHMucGFnZURvd24gPSAzNFxuXG5leHBvcnRzLmxlZnQgPSAzN1xuZXhwb3J0cy51cCA9IDM4XG5leHBvcnRzLnJpZ2h0ID0gMzlcbmV4cG9ydHMuZG93biA9IDQwXG5leHBvcnRzLmRlbGV0ZSA9IDQ2XG5cbmV4cG9ydHMuemVybyA9IDQ4XG5leHBvcnRzLm9uZSA9IDQ5XG5leHBvcnRzLnR3byA9IDUwXG5leHBvcnRzLnRocmVlID0gNTFcbmV4cG9ydHMuZm91ciA9IDUyXG5leHBvcnRzLmZpdmUgPSA1M1xuZXhwb3J0cy5zaXggPSA1NFxuZXhwb3J0cy5zZXZlbiA9IDU1XG5leHBvcnRzLmVpZ2h0ID0gNTZcbmV4cG9ydHMubmluZSA9IDU3XG5cbmV4cG9ydHMuYSA9IDY1XG5leHBvcnRzLmIgPSA2NlxuZXhwb3J0cy5jID0gNjdcbmV4cG9ydHMuZCA9IDY4XG5leHBvcnRzLmUgPSA2OVxuZXhwb3J0cy5mID0gNzBcbmV4cG9ydHMuZyA9IDcxXG5leHBvcnRzLmggPSA3MlxuZXhwb3J0cy5pID0gNzNcbmV4cG9ydHMuaiA9IDc0XG5leHBvcnRzLmsgPSA3NVxuZXhwb3J0cy5sID0gNzZcbmV4cG9ydHMubSA9IDc3XG5leHBvcnRzLm4gPSA3OFxuZXhwb3J0cy5vID0gNzlcbmV4cG9ydHMucCA9IDgwXG5leHBvcnRzLnEgPSA4MVxuZXhwb3J0cy5yID0gODJcbmV4cG9ydHMucyA9IDgzXG5leHBvcnRzLnQgPSA4NFxuZXhwb3J0cy51ID0gODVcbmV4cG9ydHMudiA9IDg2XG5leHBvcnRzLncgPSA4N1xuZXhwb3J0cy54ID0gODhcbmV4cG9ydHMueSA9IDg5XG5leHBvcnRzLnogPSA5MFxuXG5leHBvcnRzLm51bVplcm8gPSA5NlxuZXhwb3J0cy5udW1PbmUgPSA5N1xuZXhwb3J0cy5udW1Ud28gPSA5OFxuZXhwb3J0cy5udW1UaHJlZSA9IDk5XG5leHBvcnRzLm51bUZvdXIgPSAxMDBcbmV4cG9ydHMubnVtRml2ZSA9IDEwMVxuZXhwb3J0cy5udW1TaXggPSAxMDJcbmV4cG9ydHMubnVtU2V2ZW4gPSAxMDNcbmV4cG9ydHMubnVtRWlnaHQgPSAxMDRcbmV4cG9ydHMubnVtTmluZSA9IDEwNVxuXG5leHBvcnRzLmZPbmUgPSAxMTJcbmV4cG9ydHMuZlR3byA9IDExM1xuZXhwb3J0cy5mVGhyZWUgPSAxMTRcbmV4cG9ydHMuZkZvdXIgPSAxMTVcbmV4cG9ydHMuZkZpdmUgPSAxMTZcbmV4cG9ydHMuZlNpeCA9IDExN1xuZXhwb3J0cy5mU2V2ZW4gPSAxMThcbmV4cG9ydHMuZkVpZ2h0ID0gMTE5XG5leHBvcnRzLmZOaW5lID0gMTIwXG5leHBvcnRzLmZUZW4gPSAxMjFcblxuZXhwb3J0cy5zZW1pQ29sb24gPSAxODZcbmV4cG9ydHMuZXF1YWxTaWduID0gMTg3XG5leHBvcnRzLmNvbW1hID0gMTg4XG5leHBvcnRzLmRhc2ggPSAxODlcbmV4cG9ydHMucGVyaW9kID0gMTkwXG5leHBvcnRzLmZvcndhcmRTbGFzaCA9IDE5MVxuZXhwb3J0cy5vcGVuQnJhY2tldCA9IDIxOVxuZXhwb3J0cy5iYWNrU2xhc2ggPSAyMjBcbmV4cG9ydHMuY2xvc2VCcmFja2V0ID0gMjIxXG5leHBvcnRzLnNpbmdsZVF1b3RlID0gMjIyXG5cbmtleU1hcCA9IHt9XG5cbmV4cG9ydHMub25LZXkgPSAoa2V5LCBoYW5kbGVyLCB0aHJvdHRsZVRpbWUpIC0+XG4gICAgaWYgaGFuZGxlciAhPSB1bmRlZmluZWRcbiAgICAgICAga2V5TWFwW2tleV0gPSBVdGlscy50aHJvdHRsZSB0aHJvdHRsZVRpbWUsIGhhbmRsZXJcbiAgICBlbHNlXG4gICAgICAgIGtleU1hcFtrZXldID0gXCJcIlxuXG5leHBvcnRzLm9mZktleSA9IChrZXkpIC0+XG4gICAgZGVsZXRlIGtleU1hcFtrZXldXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyICdrZXlkb3duJywgKGV2ZW50KSAtPlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVyID0ga2V5TWFwW2V2ZW50LmtleUNvZGVdXG4gICAgaWYgKGhhbmRsZXIpXG4gICAgICAgIGhhbmRsZXIoKSIsImsgPSByZXF1aXJlIFwiS2V5Ym9hcmRcIlxuXG5pc1Jvb3RMYXllciA9IChsYXllcikgLT5cblx0aWYgbGF5ZXIucGFyZW50ID09IG51bGxcblx0XHRyZXR1cm4gdHJ1ZVxuXHRlbHNlXG5cdFx0cmV0dXJuIGZhbHNlXG5cbmV4cG9ydHMuY3VycmVudExheWVyID0gXCJcIlxuXG5leHBvcnRzLnNldEN1cnJlbnQgPSAoIHRlbXBGcmFtZSApIC0+XG5cdGV4cG9ydHMuY3VycmVudExheWVyLnZpc2libGUgPSBmYWxzZVxuXHR0ZW1wRnJhbWUueCA9IDBcblx0dGVtcEZyYW1lLnkgPSAwXG5cdHRlbXBGcmFtZS5icmluZ1RvRnJvbnQoKVxuXHR0ZW1wRnJhbWUudmlzaWJsZSA9IHRydWVcblx0ZXhwb3J0cy5jdXJyZW50TGF5ZXIgPSB0ZW1wRnJhbWVcblxuc2V0QWRqYWNlbnRMYXllcnMgPSAobGF5ZXIpID0+XG5cdHhMYXllcnMgPSBbXVxuXHR5TGF5ZXJzID0gW11cblx0Zm9yIGNoaWxkLCBpIGluIEZyYW1lci5DdXJyZW50Q29udGV4dC5sYXllcnNcblx0XHRpZiBpc1Jvb3RMYXllcihjaGlsZCkgPT0gdHJ1ZVxuXHRcdFx0aWYgY2hpbGQueCA9PSBsYXllci54XG5cdFx0XHRcdHlMYXllcnMucHVzaChjaGlsZClcblx0XHRcdGlmIGNoaWxkLnkgPT0gbGF5ZXIueVxuXHRcdFx0XHR4TGF5ZXJzLnB1c2goY2hpbGQpXG5cdHhMYXllcnMuc29ydCggKGEsYikgLT4gXG5cdFx0cmV0dXJuIGEueCAtIGIueFxuXHQpXG5cdHlMYXllcnMuc29ydCggKGEsYikgLT5cblx0XHRyZXR1cm4gYS55IC0gYi55XG5cdClcblx0Zm9yIGNoaWxkLCBpIGluIHhMYXllcnNcblx0XHRpZiBsYXllciA9PSBjaGlsZFxuICAgICAgICAgICAgaWYgeExheWVyc1tpLTFdP1xuICAgICAgICAgICAgICAgIGxlZnRMYXllciA9IHhMYXllcnNbaS0xXVxuICAgICAgICAgICAgICAgIGNoaWxkLmxlZnRFdmVudCA9ID0+IEAuc2V0Q3VycmVudChsZWZ0TGF5ZXIsIGNoaWxkKVxuICAgICAgICAgICAgaWYgeExheWVyc1tpKzFdP1xuICAgICAgICAgICAgICAgIHJpZ2h0TGF5ZXIgPSB4TGF5ZXJzW2krMV0gXG4gICAgICAgICAgICAgICAgY2hpbGQucmlnaHRFdmVudCA9ID0+IEAuc2V0Q3VycmVudChyaWdodExheWVyLCBjaGlsZClcblx0Zm9yIGNoaWxkLCBpIGluIHlMYXllcnNcblx0XHRpZiBsYXllciA9PSBjaGlsZFxuICAgICAgICAgICAgaWYgeUxheWVyc1tpLTFdP1xuICAgICAgICAgICAgICAgIHVwTGF5ZXIgPSB5TGF5ZXJzW2ktMV1cbiAgICAgICAgICAgICAgICBjaGlsZC51cEV2ZW50ID0gPT4gQC5zZXRDdXJyZW50KHVwTGF5ZXIsIGNoaWxkKVxuICAgICAgICAgICAgaWYgeUxheWVyc1tpKzFdP1xuICAgICAgICAgICAgICAgIGRvd25MYXllciA9IHlMYXllcnNbaSsxXVxuICAgICAgICAgICAgICAgIGNoaWxkLmRvd25FdmVudCA9ID0+IEAuc2V0Q3VycmVudChkb3duTGF5ZXIsIGNoaWxkKVxuXG5mb3IgY2hpbGQsIGkgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRpZiBpc1Jvb3RMYXllcihjaGlsZCkgPT0gdHJ1ZVxuXHRcdHNldEFkamFjZW50TGF5ZXJzKGNoaWxkKVxuXHRcdGNoaWxkLnZpc2libGUgPSBmYWxzZVxuXG5pZiBmaXJzdD9cblx0QC5zZXRDdXJyZW50KCBmaXJzdCApXG5lbHNlIHRocm93IFwiWW91IG5lZWQgYSBsYXllciB0YXJnZXRlZCBhcyAnZmlyc3QnXCJcblxubW92ZUxlZnQgPSAtPlxuXHRpZiBleHBvcnRzLmN1cnJlbnRMYXllci5sZWZ0RXZlbnQ/IHRoZW4gZXhwb3J0cy5jdXJyZW50TGF5ZXIubGVmdEV2ZW50KClcbm1vdmVSaWdodCA9IC0+XG5cdGlmIGV4cG9ydHMuY3VycmVudExheWVyLnJpZ2h0RXZlbnQ/IHRoZW4gZXhwb3J0cy5jdXJyZW50TGF5ZXIucmlnaHRFdmVudCgpXG5tb3ZlVXAgPSAtPlxuXHRpZiBleHBvcnRzLmN1cnJlbnRMYXllci51cEV2ZW50PyB0aGVuIGV4cG9ydHMuY3VycmVudExheWVyLnVwRXZlbnQoKVxubW92ZURvd24gPSAtPlxuXHRpZiBleHBvcnRzLmN1cnJlbnRMYXllci5kb3duRXZlbnQ/IHRoZW4gZXhwb3J0cy5jdXJyZW50TGF5ZXIuZG93bkV2ZW50KClcbnByZXNzT0sgPSAtPlxuXHRpZiBleHBvcnRzLmN1cnJlbnRMYXllci5va0V2ZW50PyB0aGVuIGV4cG9ydHMuY3VycmVudExheWVyLm9rRXZlbnQoKVxucHJlc3NCYWNrID0gLT5cblx0aWYgZXhwb3J0cy5jdXJyZW50TGF5ZXIuYmFja0V2ZW50PyB0aGVuIGV4cG9ydHMuY3VycmVudExheWVyLmJhY2tFdmVudCgpXG5cbmsub25LZXkoay5sZWZ0LCBtb3ZlTGVmdClcbmsub25LZXkoay5yaWdodCwgbW92ZVJpZ2h0KVxuay5vbktleShrLnVwLCBtb3ZlVXApXG5rLm9uS2V5KGsuZG93biwgbW92ZURvd24pXG5rLm9uS2V5KGsuZW50ZXIsIHByZXNzT0spXG5rLm9uS2V5KGsuYiwgcHJlc3NCYWNrKSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQUEsSUFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFVBQVI7O0FBRUosV0FBQSxHQUFjLFNBQUMsS0FBRDtFQUNiLElBQUcsS0FBSyxDQUFDLE1BQU4sS0FBZ0IsSUFBbkI7QUFDQyxXQUFPLEtBRFI7R0FBQSxNQUFBO0FBR0MsV0FBTyxNQUhSOztBQURhOztBQU1kLE9BQU8sQ0FBQyxZQUFSLEdBQXVCOztBQUV2QixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFFLFNBQUY7RUFDcEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFyQixHQUErQjtF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
