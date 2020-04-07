const m = 10;

const animations = {
  center: {
    x: [[1, 0], [1, 0]],
    y: [[1, 0], [1, 0]],
    z: -30,
    scale: [[0, 0.5, 0.8, 1], [10, 5, 1, 1]]
  },
  topLeft: {
    x: [[0, 1], [0, -200 * m]],
    y: [[1, 0], [0, -150]],
    z: -100,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  topRight: {
    x: [[0, 1], [0, 100 * m]],
    y: [[1, 0], [0, -200]],
    z: -60,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  rightTop: {
    x: [[0, 1], [0, 220 * m]],
    y: [[1, 0], [0, -50]],
    z: -50,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  rightBottom: {
    x: [[0, 1], [0, 180 * m]],
    y: [[1, 0], [0, 100]],
    z: -100,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  bottomRight: {
    x: [[0, 1], [0, 250 * m]],
    y: [[1, 0], [0, 250]],
    z: -100,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  bottomLeft: {
    x: [[0, 1], [0, 100 * m]],
    y: [[1, 0], [0, 180]],
    z: -50,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  leftBottom: {
    x: [[0, 1], [0, -300 * m]],
    y: [[1, 0], [0, 50]],
    z: -100,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  },
  leftTop: {
    x: [[0, 1], [0, -150 * m]],
    y: [[1, 0], [0, -50]],
    z: -60,
    scale: [[0, 0.3, 0.6, 1], [10, 5, 1, 1]]
  }
};

export default animations;