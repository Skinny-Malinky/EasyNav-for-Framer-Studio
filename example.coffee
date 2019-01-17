# This module mostly manifests itself in the design view and is best understood by looking at the example project from Github

# To use it, add a target to a frame and name it "first"

# To add movement to the right, add a Frame to the right of the frame with the same y position. 
# This also works if you add a frame to the left.

# To add movement down, add a frame underneath the first frame and make sure it has the same x position.
# This also works if you add a frame above.

# In this example e is the module
first.okEvent = ->
	e.setCurrent( redLayer )
    # OK is mapped to enter

redLayer.backEvent = ->
	e.setCurrent( first )
    # Back is mapped to b

first.downEvent = ->
	print "override KABLAM!"
	# This also works with upEvent, rightEvent and leftEvent