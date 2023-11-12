jQuery.fn.dataTableExt.oApi.fnSortPriorities = function(oSettings) {
  const $this = $(this);

  $this.find('> thead tr th').each((i, v) => {
    v.innerHTML = '<div class="dataTable-sort-priority"></div>' + v.innerHTML;
  });

  const checkSort = (sorts) => {
    const $priorities = $this.find('> thead tr th div.dataTable-sort-priority');
    $priorities.html('');
    if (sorts && sorts.length > 1) {
      for (let i = 0; i < sorts.length; ++i)
        $priorities[sorts[i][0]].innerHTML = (i + 1);
    }
  };

  $this.on('order.dt', (ev, oSettings) => {
    checkSort(oSettings.aaSorting);
  });

  // Check for initial multisort
  checkSort(oSettings.aaSorting);
};
