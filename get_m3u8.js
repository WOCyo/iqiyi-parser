const {exec} = require('child_process')

// exec_cmd('python3 tencent.py https://v.qq.com/x/page/f0032noyz1m.html').then(console.log).catch(console.error)
function exec_cmd(cmd) {
  // console.log('exec_cmd: ', cmd)
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      const e = err || stderr
      e ? reject(e) : resolve(stdout)
    })
  })
}

// get_m3u8('https://v.qq.com/x/page/f0032noyz1m.html').then(console.log).catch(console.error)
async function get_m3u8 (uri) {
  const cmd = `python3 tencent.py ${uri}`
  let result = await exec_cmd(cmd)
  // console.log('result:', result)
  result = result.replace(/'/g, '"')
  return JSON.parse(result)
}

module.exports = get_m3u8
