function markupPrevButton(page) {
  //варіант коли кнопка є, але не клікабельна
  return `<button type="button"
  class="arrow pagination__button ${page === 1 ? 'no-active' : ''}"
  data-page="${page - 1}"><</button>`;
  //варіант коли стрілка зліва прибирається з рендеру
  // return `${
  //   page !== 1
  //     ? `<button class="arrow pagination__button" type="button" data-page="${
  //         page - 1
  //       }"><</button>`
  //     : ''
  // }`;
}

function markupNextButton(page, maxPages) {
  //варіант коли кнопка є, але не клікабельна
  return `<button type="button"
  class="arrow pagination__button ${page === maxPages ? 'no-active' : ''}"
  data-page="${page + 1}">></button>`;
  // варіант коли стрілка зправа прибирається з рендеру
  // return `${
  //   page === maxPages
  //     ? ''
  //     : `<button class="arrow pagination__button" type="button" data-page="${
  //         page + 1
  //       }">></button>`
  // }`;
}

function arrayHelp(startIteration, finishIteration) {
  const result = [];
  for (let i = startIteration; i <= finishIteration; i++) {
    result.push(i);
  }
  return result;
}

function markupButtons(page, maxPages) {
  if (maxPages <= 9) {
    return arrayHelp(1, maxPages);
  }
  if (page > maxPages - 2) {
    return [1, '...', ...arrayHelp(maxPages - 4, maxPages)];
  }
  if (page >= maxPages - 4) {
    return [
      1,
      '...',
      ...arrayHelp(page - 2, page + 4).filter(item => item <= maxPages),
    ];
  }
  if (page >= 6) {
    return [1, '...', ...arrayHelp(page - 2, page + 2), '...', maxPages];
  }
  if (page < 6 && page >= 3) {
    return [
      ...arrayHelp(page - 4, page + 2).filter(item => item >= 1),
      '...',
      maxPages,
    ];
  }
  if (page < 3) {
    return [...arrayHelp(1, 5), '...', maxPages];
  }
}

function markupPaginationList(page, maxPages) {
  const markupButtonsList = markupButtons(page, maxPages)
    .map(item => {
      return `<button type="button" class="pagination__button ${
        page === item ? 'current' : ''
      } ${
        item === '...' ? 'no-active' : ''
      }" data-page="${item}">${item}</button>`;
    })
    .join(' ');
  if (maxPages <= 1) {
    return markupButtonsList;
  }
  return (
    markupPrevButton(page) +
    markupButtonsList +
    markupNextButton(page, maxPages)
  );
}

export { markupPaginationList };
