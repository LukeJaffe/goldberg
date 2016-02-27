C = []
V = []
F = []

f = open("DualGeodesicIcosahedron1.txt", "r")

for line in f:
    # Constant
    if line.startswith("C"):
        c = line.split()
        C.append(float(c[2]))
    # Vertex
    elif line.startswith("V"):
        V.append([])
        v = line.split()
        for i in [-1, -2, -3]:
            s = v[i].strip("\n")
            s = s.strip("(,)")
            if s.find("C") == -1:
                V[-1].insert(0, float(s))
            else:
                n = s.replace("C", "")
                if n.startswith("-"):
                    V[-1].insert(0, -C[int(n.strip("-"))])
                else:
                    V[-1].insert(0, C[int(n)])
    # Face
    elif line.startswith("{"):
        F.append([])
        s = line.strip("\n").strip("{}").split()
        for n in s:
            n = n.strip(",")
            F[-1].append(V[int(n)])

# Reorder face vertices to draw with triangle strip
"""
for f in F:
    # Hexagon
    if len(f) == 6:
        f[3], f[5] = f[5], f[3]
        f[2], f[3] = f[3], f[2]
    # Pentagon
    elif len(f) == 5:
        f[3], f[4] = f[4], f[3]
        f[2], f[3] = f[3], f[2]
"""

def write_face_vertices(out, f):
    out.write("vertexBuffers.push(gl.createBuffer());\n")
    out.write("gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);\n")
    out.write("var vertices =\n") 
    out.write("[\n")
    for v in f:  
        out.write("%f, %f, %f,\n" % tuple(v))
    out.write("];\n")
    out.write("gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n")
    out.write("vertexBuffers[vertexBuffers.length - 1].itemSize = 3;\n");
    out.write("vertexBuffers[vertexBuffers.length - 1].numItems = "+str(len(f))+";\n\n");

def write_face_colors(out, f, c):
    out.write("colorBuffers.push(gl.createBuffer());\n")
    out.write("gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);\n")
    out.write("var colors =\n") 
    out.write("[\n")
    for v in f:  
        out.write("%f, %f, %f, %f,\n" % c)
    out.write("];\n")
    out.write("gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);\n")
    out.write("colorBuffers[colorBuffers.length - 1].itemSize = 4;\n");
    out.write("colorBuffers[colorBuffers.length - 1].numItems = 3;\n\n");

# Create the javascript initBuffers() function, write it to a file
out = open("verts.js", "wb")
out.write("function initBuffers(vertexBuffers, colorBuffers)\n{\n")
for f in F:
    write_face_vertices(out, f)
    write_face_colors(out, f, (0.0, 1.0, 0.0, 1.0))
out.write("}\n");
