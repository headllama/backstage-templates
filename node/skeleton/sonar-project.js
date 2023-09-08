const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'SONAR-URL',
  token: "SONAR-TOKEN",
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' 
       },
}, () => {});
