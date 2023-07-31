import { ref } from "vue";
import { BASE_URL } from "@/api/index";

window.URL = window.URL || window.webkitURL;

// 讀取 image 資料
function useImageFilePreview(file) {
  return window.URL.createObjectURL(file);
}

// 本地預覽
function useQueuePreview(fileArr) {
  // 多圖多影片列表
  const previewMap = [];

  // 排序索引
  let idx = 0;
  for (const file of fileArr) {
    const fileData = {
      idx: idx,
      fileName: file.name,
      fileUrl: useImageFilePreview(file),
      fileData: file,
    };
    previewMap[idx] = fileData;
    idx++;
  }

  return previewMap;
}

export function useFileUpdate() {
  // 預覽用檔案
  const previewMap = ref([]);

  // 初始化
  const initData = () => {
    previewMap.value = [];
  };
  // 選擇多個檔案
  const setFile = async (file = []) => {
    initData();
    previewMap.value = useQueuePreview(file);
    console.log(previewMap.value);
  };

  const addFile = async (fileArr = []) => {
    let idx = 0;
    for (const file of fileArr) {
      const fileData = {
        idx: idx,
        fileName: file.name,
        fileUrl: useImageFilePreview(file),
        fileData: file,
      };
      previewMap.value = [...previewMap.value, fileData];
      idx++;
    }
    console.log(previewMap.value);
  };

  const showOldFile = (url) => {
    const fileData = {
      idx: 0,
      fileName: "oldImage",
      fileUrl: url,
      fileData: "",
    };
    previewMap.value[0] = fileData;
  };

  const showOldFiles = (files) => {
    for (let i = 0; i <= files.length; i++) {
      if (files[i] !== undefined) {
        const fileData = {
          idx: i,
          fileName: "oldImage" + String(i),
          fileUrl: BASE_URL + files[i].fileUrl,
          fileData: "",
        };
        previewMap.value[i] = fileData;
      }
    }
  };

  const removeData = (index) => {
    previewMap.value.splice(index, 1);
    previewMap.value.forEach((e, i) => {
      e.idx = i;
    });
  };

  const convertBase64 = async (imageFile) => {
    const result = await Promise.all(
      imageFile.map(
        (image) =>
          new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = (file) => {
              resolve(file.target.result.split(",")[1]);
            };

            fileReader.onerror = (error) => reject(error);

            fileReader.readAsDataURL(image.fileData);
          })
      )
    );
    return result;
  };

  return {
    addFile,
    setFile,
    showOldFile,
    showOldFiles,
    previewMap,
    removeData,
    initData,
    convertBase64,
  };
}
