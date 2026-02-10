
// 搜索功能示例
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('input[type="text"]');
  const searchButton = document.querySelector('.fa-search').parentElement;

  searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    if (query) {
      alert(`搜索关键词: ${query}`);
    } else {
      alert('请输入搜索关键词');
    }
  });

  // 回车搜索
  searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });
});
