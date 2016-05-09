engines = {
  sogou: {title:'Sogou', url: 'https://www.sogou.com/web?query=@@@&ie=utf8'}
}

safari.application.addEventListener('beforeSearch', function(e) {
  e.preventDefault();
  var url = engines['sogou'].url;
  url = url.replace('@@@', encodeURIComponent(e.query).replace(/%20/g, '+'));
  e.target.url = url;
}, false);
