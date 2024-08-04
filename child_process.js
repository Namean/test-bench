var exec = require('child_process').exec;
var child;



function get_ip() {
  const command = 'get-ip';
  const child = exec(command,
    function (error, stdout, stderr) {
      //console.log('stdout: ' + stdout);
      // console.log('stderr: ' + stderr);

      const result = stdout.split('/')[0];

      stdout ? console.log(result) : undefined;
      stderr ? console.log(stderr) : undefined;
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
}


get_ip()


