export function removeTags(content: string): string {
  // HTML 태그 제거
  let newContent = content.replace(/<[^>]*>/g, "");
  // Markdown 태그 제거
  newContent = newContent.replace(/(\*|\#|\_|`)/g, "");
  // 개행 제거
  newContent = newContent.replace(/\n/g, " ");
  return newContent;
}
