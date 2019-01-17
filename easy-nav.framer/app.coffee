e = require "EasyNav"

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