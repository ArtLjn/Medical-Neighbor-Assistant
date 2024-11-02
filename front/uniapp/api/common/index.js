import upload from "../../utils/upload";

export function uploadFile(file) {
  return upload({
    url: '/upload',
	filePath: file,
	headers: {
	  isToken: false
	},
  })
}