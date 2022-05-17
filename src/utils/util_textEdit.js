export default function textEdit(string){
return string.replace(/&quot;/g, " ").replace(/&#039;s/g, " ").replace(/&#039;/g, " ");
}