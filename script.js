// bootstrap qw from runeappslib.js since minimap.js uses it
qw = function(){};

var playerDot = null;
var itemDot = null;
var npcDot = null;
ImageData.fromBase64(function (result) { 
    playerDot = result; 
}, "iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4QTM1NUY4OUZBMTFFNzkyQjlGNjQ3NkUwM0EzREEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4QTM1NjA4OUZBMTFFNzkyQjlGNjQ3NkUwM0EzREEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNDhBMzU1RDg5RkExMUU3OTJCOUY2NDc2RTAzQTNEQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNDhBMzU1RTg5RkExMUU3OTJCOUY2NDc2RTAzQTNEQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiMMl8AAAAAuSURBVHjaYvz//z8DEIAJIGBk/A8V+fHjB8OL5y+AUkD+54+f/9+/ex8sBxBgACzPGwWqEqJHAAAAAElFTkSuQmCC");
ImageData.fromBase64(function (result) { 
    itemDot = result; 
}, "iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkFGMjlDRjc4NkQwMTFFN0I2MkFFMkVDQkVBNTFCM0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkFGMjlDRjg4NkQwMTFFN0I2MkFFMkVDQkVBNTFCM0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QUYyOUNGNTg2RDAxMUU3QjYyQUUyRUNCRUE1MUIzQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QUYyOUNGNjg2RDAxMUU3QjYyQUUyRUNCRUE1MUIzQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnRBPSIAAAAySURBVHjaYvj//z/Df22t//85OP6D2Az/FeT//xcV+/+DheX/AyCXAST6EsoBsQECDADnBRxpBbwm9gAAAABJRU5ErkJggg==");
ImageData.fromBase64(function (result) { 
    npcDot = result; 
}, "iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ3MDdGRUQ4NkNGMTFFN0JGQkRDNTVCRUEwQUZDQ0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ3MDdGRUU4NkNGMTFFN0JGQkRDNTVCRUEwQUZDQ0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDcwN0ZFQjg2Q0YxMUU3QkZCREM1NUJFQTBBRkNDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDcwN0ZFQzg2Q0YxMUU3QkZCREM1NUJFQTBBRkNDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PioW1V0AAAA2SURBVHjaYvr//z/D79/s/0EYxGb584fj/58/PxlA4PYdxv9MLCw/GN++Y2AAYU2N/4wAAQYAG9MaqlrUvYgAAAAASUVORK5CYII=");


var minimapReader = new MinimapReader();
var minimap = null;
var Status = {
    STARTING: {
        id: "STARTING",
        text: "Starting...",
        class: "paused"
    },
    PAUSED: {
        id: "PAUSED",
        text: "Paused",
        class: "paused"
    },
    RUNNING: {
        id: "RUNNING",
        text: "OK",
        class: "ok"
    },
    ALERT: {
    	text: "Something Detected!",
    	class: "alert",
    	p: {
	        id: "ALERT",
	        text: "PLAYERS DETECTED!",
	        class: "alert",
	        status: "players"
	    },
	    n: {
	        id: "ALERT",
	        text: "NPC DETECTED!",
	        class: "alert",
	        status: "npcs"

    	},
    	i: {
	        id: "ALERT",
	        text: "Item DETECTED!",
	        class: "alert",
	        status: "items"

	    }
    },
};
var settings = {
	sText: "Starting up...",
	status: Status.PAUSED,
	npcs: false,
	items: false,
	players: false,
	draw: false,
	dSize: 5,
	fRefresh: 500,
	mRefresh: 10000
};

var statusText = null;
var container = null;
var stateButton = null;

function start() {
	a1lib.identifyUrl("https://raw.githubusercontent.com/notgoodalso/PlayerSpotter/master/appconfig.json");
	loadStorage();
	statusText = document.getElementById("status");
    if (!window.alt1) {
        statusText.innerText = "Alt1 not detected!";
        return false;
    }
    
    container = document.getElementById("container");
    stateButton = document.getElementById("state-button");
    
    setStatus(Status.STARTING);
    findMinimap();
	mapInterval();
	searchInterval();
}

function changeState() {
    if (settings.status.id != Status.PAUSED.id) {
        setStatus(Status.PAUSED);
        elid(Status.ALERT.n.status).innerText = '';
	    elid(Status.ALERT.i.status).innerText = '';
	    elid(Status.ALERT.p.status).innerText = '';
    } else {
        setStatus(Status.RUNNING);
    }
    updateMainStatus();
}
var prevSearch = null;
var prevMap = null;
function mapInterval() {
	if(prevMap) {
		clearInterval(prevMap);
	}
	prevMap = setInterval(function() {
        	findMinimap();
    	}, settings.mRefresh);

}
function searchInterval() {
	if(prevSearch) {
        clearInterval(prevSearch);
    }
    prevSearch = setInterval(function() {
    	if (!minimap || settings.status.id == Status.PAUSED.id) {
    		setStatusText("Paused");
    		return;
    	}    
        var minimapRegion = a1lib.getregion(minimap.x, minimap.y, minimap.w, minimap.h);
        var alert = false;
        if(settings.players) {
	        var players = find(minimapRegion, playerDot);
	        if(settings.draw)
	        for( var a in players ) {
	        	alt1.overLayRect(a1lib.mixcolor(255, 0, 0), minimap.x + players[a].x, minimap.y + players[a].y, 5, 5, 100, settings.dSize);
	        }
	        if(players.length > 0) alert = true;
	        setStatus(players.length > 0 ? Status.ALERT.p : Status.RUNNING, players.length);
	    }
        if(settings.npcs) {
	        var npcs = find(minimapRegion, npcDot);
	        if(settings.draw)
	        for( var a in npcs) {
	        	alt1.overLayRect(a1lib.mixcolor(255, 0, 0), minimap.x + npcs[a].x, minimap.y + npcs[a].y, 5, 5, 100,settings.dSize);
	        }
	        if(npcs.length > 0) alert = true;
	        setStatus(npcs.length > 0 ? Status.ALERT.n : Status.RUNNING, npcs.length);
	    }
        if(settings.items) {
	        var items = find(minimapRegion, itemDot);
	        if(settings.draw)
	        for( var a in items ) {
	        	alt1.overLayRect(a1lib.mixcolor(255, 0, 0), minimap.x + items[a].x, minimap.y + items[a].y, 5, 5, 100, settings.dSize);
	        }
	        if(items.length > 0) alert = true;
	        setStatus(items.length > 0 ? Status.ALERT.i : Status.RUNNING, items.length);
	    }
	    if(alert) {
	    	setStatus(Status.ALERT);
	    }
    }, settings.fRefresh);
}
function settingsMenu() {
	var buttons = [].concat(
		{ t: "header", text: "Detection" },
		{ t: "subregion/4:detectionsub" },
		{ t: "h/12" },
		createUservarInput("npcs", settings.npcs, { t: "bool", n: "NPC's",  }),
		createUservarInput("items", settings.items, { t: "bool", n: "Item's" }),
		createUservarInput("players", settings.players, { t: "bool", n: "Player's" }),
		{ t: "header", text: "Settings" },
		{ t: "subregion/10:settingssub" },
		createUservarInput("draw", settings.draw, { t: "bool", n: "Draw on Map" }),
		createUservarInput("dSize", settings.dSize, { t: "int", n: "Draw Size" }),
		createUservarInput("fRefresh", settings.fRefresh, { t: "int", n: "Find Refresh Rate (ms)" }),
		createUservarInput("mRefresh", settings.mRefresh, { t: "int", n: "Map Find Refresh Rate (ms)" }),
		{ t: "h/11" },
		{ t: "button:confirm", text: "Confirm" },
		{ t: "button:cancel", text: "cancel" }
	);

	var box = promptbox2({ title: "Settings", style: "popup", width: 300, stylesheets: ["runeappslib.css"] }, buttons);
	console.log(box);
	box.cancel.onclick = box.frame.close.b();
	box.confirm.onclick = function () {
		settings.npcs = box.npcs.getValue();
		settings.items = box.items.getValue();
		settings.players = box.players.getValue();
		settings.draw = box.draw.getValue();
		settings.dSize = box.dSize.getValue();
		settings.fRefresh = box.fRefresh.getValue();
		settings.mRefresh = box.mRefresh.getValue();
		updateMainStatus();
		mapInterval();
		searchInterval();
		saveStorage();
		box.frame.close();
	}
}

function updateMainStatus() {
	var text = '';
	if(settings.npcs)
		text += 'NPCS ';
	else
		elid(Status.ALERT.n.status).innerText = '';
	if(settings.items)
		text += 'ITEMS ';
	else
		elid(Status.ALERT.i.status).innerText = '';
	if(settings.players)
		text += 'PLAYERS ';
	else
		elid(Status.ALERT.p.status).innerText = '';

	setStatusText(text != '' ? 'Search: '+ text : 'Currently not Searching');
	if(text == '') 
		setStatus(Status.PAUSED);
}

function createUservarInput(id, value, meta) {
	if (["string", "int", "number", "color"].indexOf(meta.t) != -1) {
		return [
			{ t: "h/11" },
			{ t: "text", text: meta.n },
			{ t: meta.t, id: id, v: value }
		];
	}
	else if (meta.t == "dropdown") {
		return [
			{ t: "h/11" },
			{ t: "text", text: meta.n },
			{ t: "dropdown", id: id, options: meta.options || meta.getOptions(), v: value }
		]
	}
	else if (meta.t == "bool") { return [{ t: "bool", id: id, v: value, text: meta.n }]; }
}

function setStatusText(status) {
	settings.sText = status;
	setStatus(settings.status);
}
function setStatus(status, num) {
	if(status.status) {
		elid(status.status).innerText = status.text + ' - ' + num;
	}
    if (statusText) {
        statusText.innerText = settings.sText;
    }
    if (container) {
    	container.className = status.class;
    }
    if (stateButton) {
        var stateButtonText = settings.status.id == Status.PAUSED.id ? "Start" : "Pause";
        stateButton.innerText = stateButtonText;
    }
    settings.status = status;
}

function find(minimapRegion, dot) {
    if (!minimap) {
        return null;
    }
    return a1lib.findsubimg(minimapRegion, dot);
}

function findMinimap() {
    minimap = minimapReader.find();
}
function loadStorage() {
	//global settings
	var settingsImport=jsonDecode( localStorage.spotter_settings);
	console.log(settingsImport);
	if (settingsImport) {
		for (var a in settingsImport) {
			if (typeof settings[a] != "undefined") { settings[a] = settingsImport[a]; }
		}
	}
}

function saveStorage() {
	//global settings
	localStorage.spotter_settings = jsonEncode(settings);
}