k = require "Keyboard"

isSVG = (layer) ->
	if layer instanceof SVGPath == true
		return true
	if layer instanceof SVGLayer == true
		return true
	return false

currentLayer = ""

exports.setCurrent = (tempFrame) ->
	tempFrame.x = 0
	tempFrame.y = 0
	tempFrame.bringToFront()
	currentLayer = tempFrame

setAdjacentLayers = (layer) =>
	xLayers = []
	yLayers = []
	for child, i in Framer.CurrentContext.layers
		if isSVG(child) == false
			if child.x == layer.x
				yLayers.push(child)
			if child.y == layer.y
				xLayers.push(child)
	xLayers.sort( (a,b) -> 
		return a.x - b.x
	)
	yLayers.sort( (a,b) ->
		return a.y - b.y
	)
	for child, i in xLayers
		if layer == child
            if xLayers[i-1]?
                leftLayer = xLayers[i-1]
                child.leftEvent = => @.setCurrent(leftLayer)
            if xLayers[i+1]?
                rightLayer = xLayers[i+1] 
                child.rightEvent = => @.setCurrent(rightLayer)
	for child, i in yLayers
		if layer == child
            if yLayers[i-1]?
                upLayer = yLayers[i-1]
                child.upEvent = => @.setCurrent(upLayer)
            if yLayers[i+1]?
                downLayer = yLayers[i+1]
                child.downEvent = => @.setCurrent(downLayer)

for child, i in Framer.CurrentContext.layers
	if isSVG(child) == false
		setAdjacentLayers(child)

@.setCurrent(first)

moveLeft = ->
	if currentLayer.leftEvent? then currentLayer.leftEvent()
moveRight = ->
	if currentLayer.rightEvent? then currentLayer.rightEvent()
moveUp = ->
	if currentLayer.upEvent? then currentLayer.upEvent()
moveDown = ->
	if currentLayer.downEvent? then currentLayer.downEvent()
pressOK = ->
	if currentLayer.okEvent? then currentLayer.okEvent()
pressBack = ->
	if currentLayer.backEvent? then currentLayer.backEvent()

k.onKey(k.left, moveLeft)
k.onKey(k.right, moveRight)
k.onKey(k.up, moveUp)
k.onKey(k.down, moveDown)
k.onKey(k.enter, pressOK)
k.onKey(k.b, pressBack)