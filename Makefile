commit:
	@echo "Running git on octave_frontend"
	git add -A
	git commit -m $(COMMENT)
	git push origin master
