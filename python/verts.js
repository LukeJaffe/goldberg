function initBuffers(vertexBuffers, colorBuffers)
{
vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.206011, 0.000000, 1.000000,
-0.206011, 0.000000, 1.000000,
-0.412023, -0.333333, 0.872678,
-0.206011, -0.666667, 0.745356,
0.206011, -0.666667, 0.745356,
0.412023, -0.333333, 0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.206011, 0.000000, -1.000000,
-0.206011, 0.000000, -1.000000,
-0.412023, 0.333333, -0.872678,
-0.206011, 0.666667, -0.745356,
0.206011, 0.666667, -0.745356,
0.412023, 0.333333, -0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.206011, 0.000000, 1.000000,
0.206011, 0.000000, 1.000000,
0.412023, 0.333333, 0.872678,
0.206011, 0.666667, 0.745356,
-0.206011, 0.666667, 0.745356,
-0.412023, 0.333333, 0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.206011, 0.000000, -1.000000,
0.206011, 0.000000, -1.000000,
0.412023, -0.333333, -0.872678,
0.206011, -0.666667, -0.745356,
-0.206011, -0.666667, -0.745356,
-0.412023, -0.333333, -0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
1.000000, 0.206011, 0.000000,
1.000000, -0.206011, 0.000000,
0.872678, -0.412023, -0.333333,
0.745356, -0.206011, -0.666667,
0.745356, 0.206011, -0.666667,
0.872678, 0.412023, -0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
1.000000, -0.206011, 0.000000,
1.000000, 0.206011, 0.000000,
0.872678, 0.412023, 0.333333,
0.745356, 0.206011, 0.666667,
0.745356, -0.206011, 0.666667,
0.872678, -0.412023, 0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-1.000000, 0.206011, 0.000000,
-1.000000, -0.206011, 0.000000,
-0.872678, -0.412023, 0.333333,
-0.745356, -0.206011, 0.666667,
-0.745356, 0.206011, 0.666667,
-0.872678, 0.412023, 0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-1.000000, -0.206011, 0.000000,
-1.000000, 0.206011, 0.000000,
-0.872678, 0.412023, -0.333333,
-0.745356, 0.206011, -0.666667,
-0.745356, -0.206011, -0.666667,
-0.872678, -0.412023, -0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 1.000000, 0.206011,
0.000000, 1.000000, -0.206011,
-0.333333, 0.872678, -0.412023,
-0.666667, 0.745356, -0.206011,
-0.666667, 0.745356, 0.206011,
-0.333333, 0.872678, 0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 1.000000, -0.206011,
0.000000, 1.000000, 0.206011,
0.333333, 0.872678, 0.412023,
0.666667, 0.745356, 0.206011,
0.666667, 0.745356, -0.206011,
0.333333, 0.872678, -0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -1.000000, 0.206011,
0.000000, -1.000000, -0.206011,
0.333333, -0.872678, -0.412023,
0.666667, -0.745356, -0.206011,
0.666667, -0.745356, 0.206011,
0.333333, -0.872678, 0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -1.000000, -0.206011,
0.000000, -1.000000, 0.206011,
-0.333333, -0.872678, 0.412023,
-0.666667, -0.745356, 0.206011,
-0.666667, -0.745356, -0.206011,
-0.333333, -0.872678, -0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412023, 0.333333, 0.872678,
0.745356, 0.206011, 0.666667,
0.872678, 0.412023, 0.333333,
0.666667, 0.745356, 0.206011,
0.333333, 0.872678, 0.412023,
0.206011, 0.666667, 0.745356,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412023, 0.333333, -0.872678,
0.206011, 0.666667, -0.745356,
0.333333, 0.872678, -0.412023,
0.666667, 0.745356, -0.206011,
0.872678, 0.412023, -0.333333,
0.745356, 0.206011, -0.666667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412023, -0.333333, 0.872678,
0.206011, -0.666667, 0.745356,
0.333333, -0.872678, 0.412023,
0.666667, -0.745356, 0.206011,
0.872678, -0.412023, 0.333333,
0.745356, -0.206011, 0.666667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412023, -0.333333, -0.872678,
0.745356, -0.206011, -0.666667,
0.872678, -0.412023, -0.333333,
0.666667, -0.745356, -0.206011,
0.333333, -0.872678, -0.412023,
0.206011, -0.666667, -0.745356,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412023, 0.333333, 0.872678,
-0.206011, 0.666667, 0.745356,
-0.333333, 0.872678, 0.412023,
-0.666667, 0.745356, 0.206011,
-0.872678, 0.412023, 0.333333,
-0.745356, 0.206011, 0.666667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412023, 0.333333, -0.872678,
-0.745356, 0.206011, -0.666667,
-0.872678, 0.412023, -0.333333,
-0.666667, 0.745356, -0.206011,
-0.333333, 0.872678, -0.412023,
-0.206011, 0.666667, -0.745356,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412023, -0.333333, 0.872678,
-0.745356, -0.206011, 0.666667,
-0.872678, -0.412023, 0.333333,
-0.666667, -0.745356, 0.206011,
-0.333333, -0.872678, 0.412023,
-0.206011, -0.666667, 0.745356,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412023, -0.333333, -0.872678,
-0.206011, -0.666667, -0.745356,
-0.333333, -0.872678, -0.412023,
-0.666667, -0.745356, -0.206011,
-0.872678, -0.412023, -0.333333,
-0.745356, -0.206011, -0.666667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.206011, 0.000000, 1.000000,
0.412023, -0.333333, 0.872678,
0.745356, -0.206011, 0.666667,
0.745356, 0.206011, 0.666667,
0.412023, 0.333333, 0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.206011, 0.000000, -1.000000,
0.412023, 0.333333, -0.872678,
0.745356, 0.206011, -0.666667,
0.745356, -0.206011, -0.666667,
0.412023, -0.333333, -0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.206011, 0.000000, 1.000000,
-0.412023, 0.333333, 0.872678,
-0.745356, 0.206011, 0.666667,
-0.745356, -0.206011, 0.666667,
-0.412023, -0.333333, 0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.206011, 0.000000, -1.000000,
-0.412023, -0.333333, -0.872678,
-0.745356, -0.206011, -0.666667,
-0.745356, 0.206011, -0.666667,
-0.412023, 0.333333, -0.872678,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
1.000000, 0.206011, 0.000000,
0.872678, 0.412023, -0.333333,
0.666667, 0.745356, -0.206011,
0.666667, 0.745356, 0.206011,
0.872678, 0.412023, 0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
1.000000, -0.206011, 0.000000,
0.872678, -0.412023, 0.333333,
0.666667, -0.745356, 0.206011,
0.666667, -0.745356, -0.206011,
0.872678, -0.412023, -0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-1.000000, 0.206011, 0.000000,
-0.872678, 0.412023, 0.333333,
-0.666667, 0.745356, 0.206011,
-0.666667, 0.745356, -0.206011,
-0.872678, 0.412023, -0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-1.000000, -0.206011, 0.000000,
-0.872678, -0.412023, -0.333333,
-0.666667, -0.745356, -0.206011,
-0.666667, -0.745356, 0.206011,
-0.872678, -0.412023, 0.333333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 1.000000, 0.206011,
-0.333333, 0.872678, 0.412023,
-0.206011, 0.666667, 0.745356,
0.206011, 0.666667, 0.745356,
0.333333, 0.872678, 0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 1.000000, -0.206011,
0.333333, 0.872678, -0.412023,
0.206011, 0.666667, -0.745356,
-0.206011, 0.666667, -0.745356,
-0.333333, 0.872678, -0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -1.000000, 0.206011,
0.333333, -0.872678, 0.412023,
0.206011, -0.666667, 0.745356,
-0.206011, -0.666667, 0.745356,
-0.333333, -0.872678, 0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -1.000000, -0.206011,
-0.333333, -0.872678, -0.412023,
-0.206011, -0.666667, -0.745356,
0.206011, -0.666667, -0.745356,
0.333333, -0.872678, -0.412023,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 3;

}
