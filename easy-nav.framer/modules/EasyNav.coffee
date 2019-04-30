k = require "Keyboard"

isRootLayer = (layer) ->
	if layer.parent == null
		return true
	else
		return false

exports.currentLayer = ""

exports.setCurrent = ( tempFrame ) ->
	exports.currentLayer.visible = false
	tempFrame.x = 0
	tempFrame.y = 0
	tempFrame.bringToFront()
	tempFrame.visible = true
	exports.currentLayer = tempFrame

setAdjacentLayers = (layer) =>
	xLayers = []
	yLayers = []
	for child, i in Framer.CurrentContext.layers
		if isRootLayer(child) == true
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
                child.leftEvent = => @.setCurrent(leftLayer, child)
            if xLayers[i+1]?
                rightLayer = xLayers[i+1] 
                child.rightEvent = => @.setCurrent(rightLayer, child)
	for child, i in yLayers
		if layer == child
            if yLayers[i-1]?
                upLayer = yLayers[i-1]
                child.upEvent = => @.setCurrent(upLayer, child)
            if yLayers[i+1]?
                downLayer = yLayers[i+1]
                child.downEvent = => @.setCurrent(downLayer, child)

for child, i in Framer.CurrentContext.layers
	if isRootLayer(child) == true
		setAdjacentLayers(child)
		child.visible = false

if first?
	@.setCurrent( first )
else throw "You need a layer targeted as 'first'"

moveLeft = ->
	if exports.currentLayer.leftEvent? then exports.currentLayer.leftEvent()
moveRight = ->
	if exports.currentLayer.rightEvent? then exports.currentLayer.rightEvent()
moveUp = ->
	if exports.currentLayer.upEvent? then exports.currentLayer.upEvent()
moveDown = ->
	if exports.currentLayer.downEvent? then exports.currentLayer.downEvent()
pressOK = ->
	if exports.currentLayer.okEvent? then exports.currentLayer.okEvent()
pressBack = ->
	if exports.currentLayer.backEvent? then exports.currentLayer.backEvent()

k.onKey(k.left, moveLeft)
k.onKey(k.right, moveRight)
k.onKey(k.up, moveUp)
k.onKey(k.down, moveDown)
k.onKey(k.enter, pressOK)
k.onKey(k.b, pressBack)