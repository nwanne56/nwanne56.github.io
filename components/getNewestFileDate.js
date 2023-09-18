import fs from "fs";

const getNewestFileDate = (path) => {
  const files = fs.readdirSync(path);
  var out = [];
  var dates = [];
  files.forEach(function(file) {
    if(file.startsWith(".") || file=="node_modules") {
      return;
    }
    var stats = fs.statSync(path + "/" + file);
    if(stats.isFile()) {
      out.push(stats.mtime);
    }
    if(fs.existsSync(file) && fs.lstatSync(file).isDirectory()) {
      out.push(getNewestFileDate(file))
    }
  });
  out.sort(function(a,b) {
    return b - a;
  })
  return (out.length>0) ? out[0] : "";
}

export default getNewestFileDate;