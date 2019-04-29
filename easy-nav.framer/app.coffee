e = require "EasyNav"

backgroundFeed = new VideoLayer
	size: Screen
	video: 'http://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/index_3_av.m3u8'
backgroundFeed.player.play()
backgroundFeed.sendToBack()

first.okEvent = ->
	e.setCurrent( redLayer )
    # OK is mapped to enter

redLayer.backEvent = ->
	e.setCurrent( first )
    # Back is mapped to b

bottom_layer.downEvent = ->
	next_option.animate
		backgroundColor: "red"
	# This also works with upEvent, rightEvent and leftEvents