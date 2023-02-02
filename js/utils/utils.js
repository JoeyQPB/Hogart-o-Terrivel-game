Array.prototype.parse2D = function () {
  const rows = [];
  for (let i = 0; i < this.length; i += 16) {
    rows.push(this.slice(i, i + 16));
  }

  return rows;
};

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];

  this.forEach((row, indexY) => {
    row.forEach((el, indexX) => {
      if (el === 250 || el === 292) {
        //push a new collision into collision block array
        objects.push(
          new CollisionBlock({
            position: {
              x: indexX * 64,
              y: indexY * 64,
            },
          })
        );
      }
    });
  });

  return objects;
};
