function setWidjet() {
	this.TagList = function(node, tags) {
		var module = document.createElement('div');
		module.className = 'form-wrapper';
		module.innerHTML = '<form action="">'+
			'<input type="text" class="newTagInput" placeholder="New Tag Name">'+
		'</form><div class="add-tag-btn btn">'+
			'<a href="#" class="btn-link add" onclick="newList.addNewTag()">Add Tag</a>'+
		'</div><div class="edit-tag-btn btn">'+
			'<a href="#" class="btn-link get" onclick="newList.startEdit()">Edit Mode</a>'+
		'</div><div class="stop-tag-btn btn">'+
			'<a href="#" class="btn-link get" onclick="newList.stopEdit()">Close Edit Mode</a>'+
		'</div></div><div class="tagList-wrapper">'+
		'<div class="tagList"></div>';
		node.appendChild(module);
		document.querySelector('.newTagInput').addEventListener('keypress', function (e) {
		    var key = e.which || e.keyCode;
		    if (key == 13) {
		    	newList.addNewTag();
		    }
		});
		if(tags.length){
			tagsList = tags;
			for(var i = 0;i < tagsList.length; i++){
				var el = document.createElement('p');
				el.className = 'tagItem';
				el.innerHTML = tagsList[i];
				document.querySelector('.tagList').appendChild(el);
			}
		}
	}
		this.addNewTag = function(){
			var val = document.querySelector('.newTagInput').value;
			document.querySelector('.newTagInput').value = '';
			if(val){
				for(var i = 0; i < tagsList.length; i++) {
					if(tagsList[i] == val) {
						return;
					}
				}
				tagsList.push(val);
				var el = document.createElement('p');
				el.className = 'tagItem';
				el.innerHTML = val;
				document.querySelector('.tagList').appendChild(el);
			}
			console.log(tagsList);
		}
		 this.startEdit = function() {
			document.querySelector('.edit-tag-btn').style.display = 'none'; 
			document.querySelector('.stop-tag-btn').style.display = 'block'; 
			var tagItem = document.querySelectorAll('.tagItem');
			for(var i = 0; i < tagItem.length; i++) {
				var el = document.createElement('span');
				el.className = 'del';
				el.innerHTML = 'X';
				el.addEventListener('click', function() {
					document.querySelector('.tagList').removeChild(this.parentNode);
				});
				tagItem[i].appendChild(el);
			}
		}
		this.stopEdit = function() {
			document.querySelector('.edit-tag-btn').style.display = 'block'; 
			document.querySelector('.stop-tag-btn').style.display = 'none';
			var del = document.querySelectorAll('.del');
			for(var i = 0; i < del.length; i++) {
				del[i].parentNode.removeChild(del[i]);
			}
		}
		this.getTagList = function() {
			return tags;
		}
	}