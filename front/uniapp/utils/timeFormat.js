export function formatTimestamp(timestamp) {
  // 创建一个 Date 对象
  const date = new Date(timestamp);

  // 获取年份、月份、日期、小时、分钟
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是从 0 开始的，所以需要加 1
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // 返回格式化后的字符串
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}