require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"EasyNav":[function(require,module,exports){
var child, currentLayer, i, isSVG, j, k, len, moveDown, moveLeft, moveRight, moveUp, pressBack, pressOK, ref, setAdjacentLayers;

k = require("Keyboard");

isSVG = function(layer) {
  if (layer instanceof SVGPath === true) {
    return true;
  }
  if (layer instanceof SVGLayer === true) {
    return true;
  }
  return false;
};

currentLayer = "";

exports.setCurrent = function(tempFrame) {
  tempFrame.x = 0;
  tempFrame.y = 0;
  tempFrame.bringToFront();
  return currentLayer = tempFrame;
};

setAdjacentLayers = (function(_this) {
  return function(layer) {
    var child, downLayer, i, j, l, leftLayer, len, len1, len2, m, ref, results, rightLayer, upLayer, xLayers, yLayers;
    xLayers = [];
    yLayers = [];
    ref = Framer.CurrentContext.layers;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      child = ref[i];
      if (isSVG(child) === false) {
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
            return _this.setCurrent(leftLayer);
          };
        }
        if (xLayers[i + 1] != null) {
          rightLayer = xLayers[i + 1];
          child.rightEvent = function() {
            return _this.setCurrent(rightLayer);
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
            return _this.setCurrent(upLayer);
          };
        }
        if (yLayers[i + 1] != null) {
          downLayer = yLayers[i + 1];
          results.push(child.downEvent = function() {
            return _this.setCurrent(downLayer);
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
  if (isSVG(child) === false) {
    setAdjacentLayers(child);
  }
}

this.setCurrent(first);

moveLeft = function() {
  if (currentLayer.leftEvent != null) {
    return currentLayer.leftEvent();
  }
};

moveRight = function() {
  if (currentLayer.rightEvent != null) {
    return currentLayer.rightEvent();
  }
};

moveUp = function() {
  if (currentLayer.upEvent != null) {
    return currentLayer.upEvent();
  }
};

moveDown = function() {
  if (currentLayer.downEvent != null) {
    return currentLayer.downEvent();
  }
};

pressOK = function() {
  if (currentLayer.okEvent != null) {
    return currentLayer.okEvent();
  }
};

pressBack = function() {
  if (currentLayer.backEvent != null) {
    return currentLayer.backEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NmcmFzZXIvRGVza3RvcC9FYXN5IE5hdi9lYXN5LW5hdi5mcmFtZXIvbW9kdWxlcy9LZXlib2FyZC5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zZnJhc2VyL0Rlc2t0b3AvRWFzeSBOYXYvZWFzeS1uYXYuZnJhbWVyL21vZHVsZXMvRWFzeU5hdi5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgS2V5c1xuZXhwb3J0cy5iYWNrc3BhY2UgPSA4XG5leHBvcnRzLnRhYiA9IDlcbmV4cG9ydHMuZW50ZXIgPSAxM1xuZXhwb3J0cy5zaGlmdCA9IDE2XG5leHBvcnRzLmN0cmwgPSAxN1xuZXhwb3J0cy5hbHQgPSAxOFxuXG5leHBvcnRzLmNhcHMgPSAyMFxuZXhwb3J0cy5lc2NhcGUgPSAyN1xuZXhwb3J0cy5wYWdlVXAgPSAzM1xuZXhwb3J0cy5wYWdlRG93biA9IDM0XG5cbmV4cG9ydHMubGVmdCA9IDM3XG5leHBvcnRzLnVwID0gMzhcbmV4cG9ydHMucmlnaHQgPSAzOVxuZXhwb3J0cy5kb3duID0gNDBcbmV4cG9ydHMuZGVsZXRlID0gNDZcblxuZXhwb3J0cy56ZXJvID0gNDhcbmV4cG9ydHMub25lID0gNDlcbmV4cG9ydHMudHdvID0gNTBcbmV4cG9ydHMudGhyZWUgPSA1MVxuZXhwb3J0cy5mb3VyID0gNTJcbmV4cG9ydHMuZml2ZSA9IDUzXG5leHBvcnRzLnNpeCA9IDU0XG5leHBvcnRzLnNldmVuID0gNTVcbmV4cG9ydHMuZWlnaHQgPSA1NlxuZXhwb3J0cy5uaW5lID0gNTdcblxuZXhwb3J0cy5hID0gNjVcbmV4cG9ydHMuYiA9IDY2XG5leHBvcnRzLmMgPSA2N1xuZXhwb3J0cy5kID0gNjhcbmV4cG9ydHMuZSA9IDY5XG5leHBvcnRzLmYgPSA3MFxuZXhwb3J0cy5nID0gNzFcbmV4cG9ydHMuaCA9IDcyXG5leHBvcnRzLmkgPSA3M1xuZXhwb3J0cy5qID0gNzRcbmV4cG9ydHMuayA9IDc1XG5leHBvcnRzLmwgPSA3NlxuZXhwb3J0cy5tID0gNzdcbmV4cG9ydHMubiA9IDc4XG5leHBvcnRzLm8gPSA3OVxuZXhwb3J0cy5wID0gODBcbmV4cG9ydHMucSA9IDgxXG5leHBvcnRzLnIgPSA4MlxuZXhwb3J0cy5zID0gODNcbmV4cG9ydHMudCA9IDg0XG5leHBvcnRzLnUgPSA4NVxuZXhwb3J0cy52ID0gODZcbmV4cG9ydHMudyA9IDg3XG5leHBvcnRzLnggPSA4OFxuZXhwb3J0cy55ID0gODlcbmV4cG9ydHMueiA9IDkwXG5cbmV4cG9ydHMubnVtWmVybyA9IDk2XG5leHBvcnRzLm51bU9uZSA9IDk3XG5leHBvcnRzLm51bVR3byA9IDk4XG5leHBvcnRzLm51bVRocmVlID0gOTlcbmV4cG9ydHMubnVtRm91ciA9IDEwMFxuZXhwb3J0cy5udW1GaXZlID0gMTAxXG5leHBvcnRzLm51bVNpeCA9IDEwMlxuZXhwb3J0cy5udW1TZXZlbiA9IDEwM1xuZXhwb3J0cy5udW1FaWdodCA9IDEwNFxuZXhwb3J0cy5udW1OaW5lID0gMTA1XG5cbmV4cG9ydHMuZk9uZSA9IDExMlxuZXhwb3J0cy5mVHdvID0gMTEzXG5leHBvcnRzLmZUaHJlZSA9IDExNFxuZXhwb3J0cy5mRm91ciA9IDExNVxuZXhwb3J0cy5mRml2ZSA9IDExNlxuZXhwb3J0cy5mU2l4ID0gMTE3XG5leHBvcnRzLmZTZXZlbiA9IDExOFxuZXhwb3J0cy5mRWlnaHQgPSAxMTlcbmV4cG9ydHMuZk5pbmUgPSAxMjBcbmV4cG9ydHMuZlRlbiA9IDEyMVxuXG5leHBvcnRzLnNlbWlDb2xvbiA9IDE4NlxuZXhwb3J0cy5lcXVhbFNpZ24gPSAxODdcbmV4cG9ydHMuY29tbWEgPSAxODhcbmV4cG9ydHMuZGFzaCA9IDE4OVxuZXhwb3J0cy5wZXJpb2QgPSAxOTBcbmV4cG9ydHMuZm9yd2FyZFNsYXNoID0gMTkxXG5leHBvcnRzLm9wZW5CcmFja2V0ID0gMjE5XG5leHBvcnRzLmJhY2tTbGFzaCA9IDIyMFxuZXhwb3J0cy5jbG9zZUJyYWNrZXQgPSAyMjFcbmV4cG9ydHMuc2luZ2xlUXVvdGUgPSAyMjJcblxua2V5TWFwID0ge31cblxuZXhwb3J0cy5vbktleSA9IChrZXksIGhhbmRsZXIsIHRocm90dGxlVGltZSkgLT5cbiAgICBpZiBoYW5kbGVyICE9IHVuZGVmaW5lZFxuICAgICAgICBrZXlNYXBba2V5XSA9IFV0aWxzLnRocm90dGxlIHRocm90dGxlVGltZSwgaGFuZGxlclxuICAgIGVsc2VcbiAgICAgICAga2V5TWFwW2tleV0gPSBcIlwiXG5cbmV4cG9ydHMub2ZmS2V5ID0gKGtleSkgLT5cbiAgICBkZWxldGUga2V5TWFwW2tleV1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJ2tleWRvd24nLCAoZXZlbnQpIC0+XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGhhbmRsZXIgPSBrZXlNYXBbZXZlbnQua2V5Q29kZV1cbiAgICBpZiAoaGFuZGxlcilcbiAgICAgICAgaGFuZGxlcigpIiwiayA9IHJlcXVpcmUgXCJLZXlib2FyZFwiXG5cbmlzU1ZHID0gKGxheWVyKSAtPlxuXHRpZiBsYXllciBpbnN0YW5jZW9mIFNWR1BhdGggPT0gdHJ1ZVxuXHRcdHJldHVybiB0cnVlXG5cdGlmIGxheWVyIGluc3RhbmNlb2YgU1ZHTGF5ZXIgPT0gdHJ1ZVxuXHRcdHJldHVybiB0cnVlXG5cdHJldHVybiBmYWxzZVxuXG5jdXJyZW50TGF5ZXIgPSBcIlwiXG5cbmV4cG9ydHMuc2V0Q3VycmVudCA9ICh0ZW1wRnJhbWUpIC0+XG5cdHRlbXBGcmFtZS54ID0gMFxuXHR0ZW1wRnJhbWUueSA9IDBcblx0dGVtcEZyYW1lLmJyaW5nVG9Gcm9udCgpXG5cdGN1cnJlbnRMYXllciA9IHRlbXBGcmFtZVxuXG5zZXRBZGphY2VudExheWVycyA9IChsYXllcikgPT5cblx0eExheWVycyA9IFtdXG5cdHlMYXllcnMgPSBbXVxuXHRmb3IgY2hpbGQsIGkgaW4gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmxheWVyc1xuXHRcdGlmIGlzU1ZHKGNoaWxkKSA9PSBmYWxzZVxuXHRcdFx0aWYgY2hpbGQueCA9PSBsYXllci54XG5cdFx0XHRcdHlMYXllcnMucHVzaChjaGlsZClcblx0XHRcdGlmIGNoaWxkLnkgPT0gbGF5ZXIueVxuXHRcdFx0XHR4TGF5ZXJzLnB1c2goY2hpbGQpXG5cdHhMYXllcnMuc29ydCggKGEsYikgLT4gXG5cdFx0cmV0dXJuIGEueCAtIGIueFxuXHQpXG5cdHlMYXllcnMuc29ydCggKGEsYikgLT5cblx0XHRyZXR1cm4gYS55IC0gYi55XG5cdClcblx0Zm9yIGNoaWxkLCBpIGluIHhMYXllcnNcblx0XHRpZiBsYXllciA9PSBjaGlsZFxuICAgICAgICAgICAgaWYgeExheWVyc1tpLTFdP1xuICAgICAgICAgICAgICAgIGxlZnRMYXllciA9IHhMYXllcnNbaS0xXVxuICAgICAgICAgICAgICAgIGNoaWxkLmxlZnRFdmVudCA9ID0+IEAuc2V0Q3VycmVudChsZWZ0TGF5ZXIpXG4gICAgICAgICAgICBpZiB4TGF5ZXJzW2krMV0/XG4gICAgICAgICAgICAgICAgcmlnaHRMYXllciA9IHhMYXllcnNbaSsxXSBcbiAgICAgICAgICAgICAgICBjaGlsZC5yaWdodEV2ZW50ID0gPT4gQC5zZXRDdXJyZW50KHJpZ2h0TGF5ZXIpXG5cdGZvciBjaGlsZCwgaSBpbiB5TGF5ZXJzXG5cdFx0aWYgbGF5ZXIgPT0gY2hpbGRcbiAgICAgICAgICAgIGlmIHlMYXllcnNbaS0xXT9cbiAgICAgICAgICAgICAgICB1cExheWVyID0geUxheWVyc1tpLTFdXG4gICAgICAgICAgICAgICAgY2hpbGQudXBFdmVudCA9ID0+IEAuc2V0Q3VycmVudCh1cExheWVyKVxuICAgICAgICAgICAgaWYgeUxheWVyc1tpKzFdP1xuICAgICAgICAgICAgICAgIGRvd25MYXllciA9IHlMYXllcnNbaSsxXVxuICAgICAgICAgICAgICAgIGNoaWxkLmRvd25FdmVudCA9ID0+IEAuc2V0Q3VycmVudChkb3duTGF5ZXIpXG5cbmZvciBjaGlsZCwgaSBpbiBGcmFtZXIuQ3VycmVudENvbnRleHQubGF5ZXJzXG5cdGlmIGlzU1ZHKGNoaWxkKSA9PSBmYWxzZVxuXHRcdHNldEFkamFjZW50TGF5ZXJzKGNoaWxkKVxuXG5ALnNldEN1cnJlbnQoZmlyc3QpXG5cbm1vdmVMZWZ0ID0gLT5cblx0aWYgY3VycmVudExheWVyLmxlZnRFdmVudD8gdGhlbiBjdXJyZW50TGF5ZXIubGVmdEV2ZW50KClcbm1vdmVSaWdodCA9IC0+XG5cdGlmIGN1cnJlbnRMYXllci5yaWdodEV2ZW50PyB0aGVuIGN1cnJlbnRMYXllci5yaWdodEV2ZW50KClcbm1vdmVVcCA9IC0+XG5cdGlmIGN1cnJlbnRMYXllci51cEV2ZW50PyB0aGVuIGN1cnJlbnRMYXllci51cEV2ZW50KClcbm1vdmVEb3duID0gLT5cblx0aWYgY3VycmVudExheWVyLmRvd25FdmVudD8gdGhlbiBjdXJyZW50TGF5ZXIuZG93bkV2ZW50KClcbnByZXNzT0sgPSAtPlxuXHRpZiBjdXJyZW50TGF5ZXIub2tFdmVudD8gdGhlbiBjdXJyZW50TGF5ZXIub2tFdmVudCgpXG5wcmVzc0JhY2sgPSAtPlxuXHRpZiBjdXJyZW50TGF5ZXIuYmFja0V2ZW50PyB0aGVuIGN1cnJlbnRMYXllci5iYWNrRXZlbnQoKVxuXG5rLm9uS2V5KGsubGVmdCwgbW92ZUxlZnQpXG5rLm9uS2V5KGsucmlnaHQsIG1vdmVSaWdodClcbmsub25LZXkoay51cCwgbW92ZVVwKVxuay5vbktleShrLmRvd24sIG1vdmVEb3duKVxuay5vbktleShrLmVudGVyLCBwcmVzc09LKVxuay5vbktleShrLmIsIHByZXNzQmFjaykiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREFBLElBQUE7O0FBQUEsQ0FBQSxHQUFJLE9BQUEsQ0FBUSxVQUFSOztBQUVKLEtBQUEsR0FBUSxTQUFDLEtBQUQ7RUFDUCxJQUFHLEtBQUEsWUFBaUIsT0FBakIsS0FBNEIsSUFBL0I7QUFDQyxXQUFPLEtBRFI7O0VBRUEsSUFBRyxLQUFBLFlBQWlCLFFBQWpCLEtBQTZCLElBQWhDO0FBQ0MsV0FBTyxLQURSOztBQUVBLFNBQU87QUFMQTs7QUFPUixZQUFBLEdBQWU7O0FBRWYsT0FBTyxDQUFDLFVBQVIsR0FBcUIsU0FBQyxTQUFEO0VBQ3BCLFNBQVMsQ0FBQyxDQUFWLEdBQWM7RUFDZCxTQUFTLENBQUMsQ0FBVixHQUFjO0VBQ2QsU0FBUyxDQUFDLFlBQVYsQ0FBQTtTQUNBLFlBQUEsR0FBZTtBQUpLOztBQU1yQixpQkFBQSxHQUFvQixDQUFBLFNBQUEsS0FBQTtTQUFBLFNBQUMsS0FBRDtBQUNuQixRQUFBO0lBQUEsT0FBQSxHQUFVO0lBQ1YsT0FBQSxHQUFVO0FBQ1Y7QUFBQSxTQUFBLDZDQUFBOztNQUNDLElBQUcsS0FBQSxDQUFNLEtBQU4sQ0FBQSxLQUFnQixLQUFuQjtRQUNDLElBQUcsS0FBSyxDQUFDLENBQU4sS0FBVyxLQUFLLENBQUMsQ0FBcEI7VUFDQyxPQUFPLENBQUMs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
