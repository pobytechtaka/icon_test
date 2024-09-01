const path = require("path");
const fs = require("fs");

const basePath = path.resolve(__dirname, "..");
const componentPath = path.resolve(basePath, "src");
const outputFilePath = path.join(componentPath, "index.ts");

const getResultCode = (tsxFiles) => {
  // 모든 컴포넌트를 import 하는 코드
  const importCode = tsxFiles
    .map((fileName) => `import ${fileName} from "./${fileName}";`)
    .join("\n");

  // 모든 컴포넌트를 export 하는 코드
  const exportCode = tsxFiles
    .map(
      (fileName) => `export { default as ${fileName} } from "./${fileName}";`
    )
    .join("\n");

  // 모든 컴포넌트를 객체에 담아 default Export 하는 코드
  const exportDefaultCode = [
    "export default {",
    ...tsxFiles.map((fileName) => `  ${fileName},`),
    "};",
  ].join("\n");

  return `${importCode}

${exportCode}

${exportDefaultCode}
  `;
};

// index.ts에서 src 내부의 tsx 파일을 export 하도록 수정
fs.readdir(componentPath, (err, files) => {
  if (err) {
    return console.error(err);
  }

  // 변환할 .tsx 파일의 이름을 배열에 담기
  const tsxFiles = files
    .filter((file) => path.extname(file) === ".tsx")
    .map((file) => path.basename(file, ".tsx"));

  // index.ts에 저장할 코드 생성
  const resultCode = getResultCode(tsxFiles);

  // 결과를 index.ts에 저장
  fs.writeFile(outputFilePath, resultCode, (err) => {
    if (err) return console.error(err);
  });
});
