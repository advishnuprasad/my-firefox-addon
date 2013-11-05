var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var widget = widgets.Widget({
  id: "jb-id",
  label: 'justbooksclc',
  contentURL: "http://justbooksclc.com/favicon.ico",
  contentScriptFile: self.data.url("listener.js")
});
widget.port.on("left-click", function(){
  console.log("left-click");
});
widget.port.on("right-click", function(){
  console.log("right");
});
var panel = require("sdk/panel");
var htmlPanel = panel.Panel({
  width: 215,
  height: 160,
  contentURL: self.data.url("name.html")
});

var html_widget = widgets.Widget({
  id: "html-id",
  label: "html",
  contentURL: self.data.url("star.png"),
  panel: htmlPanel
});