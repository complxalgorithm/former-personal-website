$(document).ready(function () {
  var url;
  var http = "http://";
  var ss = "stephensanders.me";

  if(window.location.href.indexOf(ss) > -1) {
    page = pageName;

    if (page !== "index.html") {
      url = http + ss + "/pages/" + page;
      window.location.href = url;
    }
  }
});

var pageName = (function () {
  var a = window.location.href,
      b = a.lastIndexOf("/");

  if (b !== "index.html") {
    return a.substr(b + 1);
  }

  return 0;
}());
