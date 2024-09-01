const path = require("path");
const fs = require("fs");
const svgr = require("@svgr/core");

const basePath = path.resolve(__dirname, "..");
const componentPath = path.resolve(basePath, "src");
const svgPath = path.resolve(basePath, "assets");

const fileNameExtensionValidator = (fileName) => {
  return /[a-z\-]*\.svg/.test(fileName);
};

const fileNameToComponentName = (fileName) => {
  return fileName
    .replace(".svg", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const transformSvgToComponentCode = async (svgCode, componentName) => {
  const component = await svgr.transform(
    svgCode,
    {
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      typescript: true,
      ref: true,
    },
    { componentName }
  );

  return (
    component
      .slice(`import * as React from "react";\n`.length)
      .replace(/fillOpacity={.+?}/g, "")
      // 색상 주입을 위해 fill, stroke 속성을 currentColor로 변경
      .replace(/fill="((?!none).+?)"/g, 'fill="currentColor"')
      .replace(/stroke="((?!none).+?)"/g, 'stroke="currentColor"')
  );
};

fs.readdirSync(svgPath).forEach(async (fileName) => {
  if (!fileNameExtensionValidator(fileName)) {
    return console.log(
      `${fileName} 파일이름 규칙이 잘못되어 변환에 실패하였습니다. 파일이름은 소문자, -(대시) 만 가능하며, 확장자는 svg만 허용합니다.`
    );
  }

  const filePath = path.join(svgPath, fileName);
  const componentName = fileNameToComponentName(fileName);
  const componentFilePath = path.join(componentPath, `${componentName}.tsx`);
  const svgCode = fs.readFileSync(filePath, "utf-8");

  const componentCode = await transformSvgToComponentCode(
    svgCode,
    componentName
  );

  await fs.writeFile(componentFilePath, componentCode, (error) => {
    if (error) console.error(error);
  });

  console.log(`${componentName} 컴포넌트 생성완료`);
});
