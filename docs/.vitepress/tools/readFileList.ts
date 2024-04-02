import { resolve } from "path"
import  { existsSync, lstatSync, readdirSync } from "fs"

interface FileType {
  text: string
  link: string
}

export function readFileList(year, moon) {
  const fileList: FileType[] = [];
  const dirPath = resolve(`./docs/${year}/${moon}/`);
  const isDir = existsSync(dirPath) && lstatSync(dirPath).isDirectory();
  if (!isDir) {
    return fileList;
  }

  const files = readdirSync(dirPath);

  files.forEach((item) => {
    const currentFile = (/.+[^(\.md)]/.exec(item))?.[0]
    fileList.push({
      text: `${year}.${moon}.${currentFile}`,
      link: `/${year}/${moon}/${currentFile}`
    })
    
  });
  return [{
    text: `${year}.${moon}`,
    collapsed: false,
    items: fileList.reverse()
  }]
}
