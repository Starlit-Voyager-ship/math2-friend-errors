/* 朋友错题：2015—2020，共 92 道（含证明题，页面可单列） */
window.ERROR_LENS_DATA = {
  "meta": {
    "title": "朋友错题",
    "paper": "朋友错题",
    "subtitle": "2015—2020",
    "demo": false
  },
  "chapters": [
    {
      "id": "limit",
      "index": "01",
      "name": "极限与连续",
      "part": "高等数学",
      "short": "极限",
      "kps": [
        "洛必达法则",
        "等价无穷小",
        "极限计算",
        "连续与间断",
        "数列极限"
      ]
    },
    {
      "id": "diff",
      "index": "02",
      "name": "一元函数微分学",
      "part": "高等数学",
      "short": "微分",
      "kps": [
        "闭区间最值",
        "极值",
        "导数定义",
        "中值定理",
        "单调性与凹凸性"
      ]
    },
    {
      "id": "integral",
      "index": "03",
      "name": "一元函数积分学",
      "part": "高等数学",
      "short": "积分",
      "kps": [
        "换元积分法",
        "分部积分法",
        "定积分几何应用",
        "定积分计算",
        "变限积分"
      ]
    },
    {
      "id": "multidiff",
      "index": "04",
      "name": "多元函数微分学",
      "part": "高等数学",
      "short": "多元微分",
      "kps": [
        "偏导数",
        "全微分",
        "复合函数链式法则",
        "多元极值"
      ]
    },
    {
      "id": "multiint",
      "index": "05",
      "name": "多元函数积分学",
      "part": "高等数学",
      "short": "重积分",
      "kps": [
        "二重积分计算",
        "极坐标",
        "对称性",
        "交换积分次序"
      ]
    },
    {
      "id": "ode",
      "index": "06",
      "name": "常微分方程",
      "part": "高等数学",
      "short": "微分方程",
      "kps": [
        "一阶线性微分方程",
        "积分因子",
        "可分离变量",
        "二阶常系数方程"
      ]
    },
    {
      "id": "matrix",
      "index": "07",
      "name": "行列式与矩阵",
      "part": "线性代数",
      "short": "矩阵",
      "kps": [
        "行列式计算",
        "初等变换",
        "矩阵的秩",
        "伴随矩阵",
        "逆矩阵"
      ]
    },
    {
      "id": "linear",
      "index": "08",
      "name": "向量与线性方程组",
      "part": "线性代数",
      "short": "方程组",
      "kps": [
        "非齐次线性方程组",
        "解的结构",
        "线性相关性",
        "秩-零化度"
      ]
    },
    {
      "id": "eigen",
      "index": "09",
      "name": "特征值与二次型",
      "part": "线性代数",
      "short": "特征值",
      "kps": [
        "特征值性质",
        "矩阵多项式",
        "相似对角化",
        "二次型正定"
      ]
    },
    {
      "id": "unclassified",
      "index": "—",
      "name": "待整理",
      "part": "未分类",
      "short": "待整理",
      "kps": [
        "待整理"
      ]
    }
  ],
  "questions": [
    {
      "year": 2015,
      "no": "2",
      "type": "选择题",
      "chapter": "limit",
      "kps": [
        "连续与间断",
        "极限计算"
      ],
      "stem": "函数 $f(x)=\\displaystyle\\lim _{t \\rightarrow 0}\\left(1+\\displaystyle\\frac{\\sin t}{x}\\right)^{\\displaystyle\\frac{x^{2}}{t}}$ 在 $(-\\infty,+\\infty)$ 内",
      "options": [
        "连续．",
        "有可去间断点。",
        "有跳跃间断点。",
        "有无穷间断点．"
      ],
      "source": "2015 数二 · 选择题 2"
    },
    {
      "year": 2015,
      "no": "3",
      "type": "选择题",
      "chapter": "limit",
      "kps": [
        "连续与间断"
      ],
      "stem": "设函数 $f(x)=\\left\\{\\begin{array}{ll}x^{\\alpha} \\cos \\displaystyle\\frac{1}{x^{\\beta}}, & x\\gt 0, \\\\ 0, & x \\leqslant 0\\end{array}(\\alpha\\gt 0, \\beta\\gt 0)\\right.$ ．若 $f^{\\prime}(x)$ 在 $x=0$ 处连续，则",
      "options": [
        "$\\alpha-\\beta\\gt 1$ ．",
        "$0\\lt\\alpha-\\beta \\leqslant 1$ ．",
        "$\\alpha-\\beta\\gt 2$ ．",
        "$0\\lt\\alpha-\\beta \\leqslant 2$ ．"
      ],
      "source": "2015 数二 · 选择题 3"
    },
    {
      "year": 2015,
      "no": "4",
      "type": "选择题",
      "chapter": "diff",
      "kps": [
        "凹凸与拐点"
      ],
      "stem": "设函数在 $(-\\infty,+\\infty)$ 内连续，其 2 阶导函数 $f^{\\prime \\prime}(x)$ 的图形如右图所示，则曲线 $y=f(x)$ 的拐点个数为",
      "options": [
        "0．",
        "1 ．",
        "2．",
        "3．"
      ],
      "source": "2015 数二 · 选择题 4"
    },
    {
      "year": 2015,
      "no": "7",
      "type": "选择题",
      "chapter": "linear",
      "kps": [
        "线性方程组"
      ],
      "stem": "设矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}1 & 1 & 1 \\\\ 1 & 2 & a \\\\ 1 & 4 & a^{2}\\end{array}\\right), \\boldsymbol{b}=\\left(\\begin{array}{c}1 \\\\ d \\\\ d^{2}\\end{array}\\right)$ ．若集合 $\\Omega=\\{1,2\\}$ ，则线性方程组 $\\boldsymbol{A} \\boldsymbol{x}=\\boldsymbol{b}$ 有无穷多解的充分必要条件为",
      "options": [
        "$a \\notin \\Omega, d \\notin \\Omega$ ．",
        "$a \\notin \\Omega, d \\in \\Omega$ ．",
        "$a \\in \\Omega, d \\notin \\Omega$ ．",
        "$a \\in \\Omega, d \\in \\Omega$ 。"
      ],
      "source": "2015 数二 · 选择题 7"
    },
    {
      "year": 2015,
      "no": "8",
      "type": "选择题",
      "chapter": "eigen",
      "kps": [
        "二次型",
        "相似对角化"
      ],
      "stem": "设二次型 $f\\left(x_{1}, x_{2}, x_{3}\\right)$ 在正交变换 $\\boldsymbol{x}=\\boldsymbol{P} \\boldsymbol{y}$ 下的标准形为 $2 y_{1}^{2}+y_{2}^{2}-y_{3}^{2}$ ，其中 $\\boldsymbol{P}=\\left(\\boldsymbol{e}_{1}, \\boldsymbol{e}_{2}, \\boldsymbol{e}_{3}\\right)$ 。若 $\\boldsymbol{Q}=\\left(\\boldsymbol{e}_{1},-\\boldsymbol{e}_{3}, \\boldsymbol{e}_{2}\\right)$ ，则 $f\\left(x_{1}, x_{2}, x_{3}\\right)$ 在正交变换 $\\boldsymbol{x}=\\boldsymbol{Q} \\boldsymbol{y}$ 下的标准形为",
      "options": [
        "$2 y_{1}^{2}-y_{2}^{2}+y_{3}^{2}$ ．",
        "$2 y_{1}^{2}+y_{2}^{2}-y_{3}^{2}$ ．",
        "$2 y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$ ．",
        "$2 y_{1}^{2}+y_{2}^{2}$"
      ],
      "source": "2015 数二 · 选择题 8"
    },
    {
      "year": 2015,
      "no": "10",
      "type": "填空题",
      "chapter": "diff",
      "kps": [
        "高阶导数"
      ],
      "stem": "函数 $f(x)=x^{2} 2^{x}$ 在 $x=0$ 处的 $n$ 阶导数 $f^{(n)}(0)=$ $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2015 数二 · 填空题 10"
    },
    {
      "year": 2015,
      "no": "14",
      "type": "填空题",
      "chapter": "eigen",
      "kps": [
        "特征值"
      ],
      "stem": "设3阶矩阵 $\\boldsymbol{A}$ 的特征值为 $2,-2,1, \\boldsymbol{B}=\\boldsymbol{A}^{2}-\\boldsymbol{A}+\\boldsymbol{E}$ ，其中 $\\boldsymbol{E}$ 为3阶单位矩阵，则行列式 $|\\boldsymbol{B}|=$",
      "options": [],
      "source": "2015 数二 · 填空题 14"
    },
    {
      "year": 2015,
      "no": "15",
      "type": "解答题",
      "chapter": "limit",
      "kps": [
        "等价无穷小"
      ],
      "stem": "设函数 $f(x)=x+a \\ln (1+x)+b x \\sin x, g(x)=k x^{3}$ 。若 $f(x)$ 与 $g(x)$ 在 $x \\rightarrow 0$ 时是等价无穷小，求 $a, b, k$ 的值。",
      "options": [],
      "source": "2015 数二 · 解答题 15"
    },
    {
      "year": 2015,
      "no": "17",
      "type": "解答题",
      "chapter": "multidiff",
      "kps": [
        "多元极值",
        "偏导数"
      ],
      "stem": "已知函数 $f(x, y)$ 满足 $f_{x y}^{\\prime \\prime}(x, y)=2(y+1) \\mathrm{e}^{x}, f_{x}^{\\prime}(x, 0)=(x+1) \\mathrm{e}^{x}, f(0, y)=y^{2}+2 y$ ，求 $f(x, y)$ 的极值．",
      "options": [],
      "source": "2015 数二 · 解答题 17"
    },
    {
      "year": 2015,
      "no": "18",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "计算二重积分 $\\displaystyle\\iint_{D} x(x+y) \\mathrm{d} x \\mathrm{~d} y$ ，其中 $D=\\left\\{(x, y) \\mid x^{2}+y^{2} \\leqslant 2, y \\geqslant x^{2}\\right\\}$ ．",
      "options": [],
      "source": "2015 数二 · 解答题 18"
    },
    {
      "year": 2015,
      "no": "19",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "已知函数 $f(x)=\\displaystyle\\int_{x}^{1} \\sqrt{1+t^{2}} \\mathrm{~d} t+\\displaystyle\\int_{1}^{x^{2}} \\sqrt{1+t} \\mathrm{~d} t$ ，求 $f(x)$ 零点的个数．",
      "options": [],
      "source": "2015 数二 · 解答题 19"
    },
    {
      "year": 2015,
      "no": "20",
      "type": "解答题",
      "chapter": "ode",
      "kps": [
        "微分方程"
      ],
      "stem": "已知高温物体置于低温介质中，任一时刻该物体温度对时间的变化率与该时刻物体和介质的温差成正比。现将一初始温度为 $120^{\\circ} \\mathrm{C}$ 的物体在 $20^{\\circ} \\mathrm{C}$ 的恒温介质中冷却， 30 min 后该物体温度降至 $30^{\\circ} \\mathrm{C}$ ，若要将该物体的温度继续降至 $21^{\\circ} \\mathrm{C}$ ，还需冷却多长时间？",
      "options": [],
      "source": "2015 数二 · 解答题 20"
    },
    {
      "year": 2015,
      "no": "21",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "中值定理",
        "切线"
      ],
      "stem": "已知函数 $f(x)$ 在区间 $[a,+\\infty)$ 上具有 2 阶导数，$f(a)=0, f^{\\prime}(x)\\gt 0, f^{\\prime \\prime}(x)\\gt 0$ 。设 $b\\gt a$ ，曲线 $y=f(x)$ 在点 $(b, f(b))$ 处的切线与 $x$ 轴的交点是 $\\left(x_{0}, 0\\right)$ ，证明 $a\\lt x_{0}\\lt b$ 。",
      "options": [],
      "source": "2015 数二 · 解答题 21"
    },
    {
      "year": 2015,
      "no": "22",
      "type": "解答题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "设矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}a & 1 & 0 \\\\ 1 & a & -1 \\\\ 0 & 1 & a\\end{array}\\right)$ ，且 $\\boldsymbol{A}^{3}=\\boldsymbol{O}$ ．\n（ I ）求 $a$ 的值；\n（II）若矩阵 $\\boldsymbol{X}$ 满足 $\\boldsymbol{X}-\\boldsymbol{X} \\boldsymbol{A}^{2}-\\boldsymbol{A} \\boldsymbol{X}+\\boldsymbol{A} \\boldsymbol{X} \\boldsymbol{A}^{2}=\\boldsymbol{E}$ ，其中 $\\boldsymbol{E}$ 为 3 阶单位矩阵，求 $\\boldsymbol{X}$ 。",
      "options": [],
      "source": "2015 数二 · 解答题 22"
    },
    {
      "year": 2015,
      "no": "23",
      "type": "解答题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "逆矩阵",
        "矩阵运算"
      ],
      "stem": "设矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}0 & 2 & -3 \\\\ -1 & 3 & -3 \\\\ 1 & -2 & a\\end{array}\\right)$ 相似于矩阵 $\\boldsymbol{B}=\\left(\\begin{array}{ccc}1 & -2 & 0 \\\\ 0 & b & 0 \\\\ 0 & 3 & 1\\end{array}\\right)$ ．\n（I）求 $a, b$ 的值；\n（II）求可逆矩阵 $\\boldsymbol{P}$ ，使 $\\boldsymbol{P}^{-1} \\boldsymbol{A P}$ 为对角矩阵。",
      "options": [],
      "source": "2015 数二 · 解答题 23"
    },
    {
      "year": 2016,
      "no": "1",
      "type": "选择题",
      "chapter": "limit",
      "kps": [
        "极限计算"
      ],
      "stem": "设 $\\alpha_{1}=x(\\cos \\sqrt{x}-1), \\alpha_{2}=\\sqrt{x} \\ln (1+\\sqrt[3]{x}), \\alpha_{3}=\\sqrt[3]{x+1}-1$ 。当 $x \\rightarrow 0^{+}$时，以上 3 个无穷小量按照从低阶到高阶的排序是",
      "options": [
        "$\\alpha_{1}, \\alpha_{2}, \\alpha_{3}$ ．",
        "$\\alpha_{2}, \\alpha_{3}, \\alpha_{1}$ ．",
        "$\\alpha_{2}, \\alpha_{1}, \\alpha_{3}$ ．",
        "$\\alpha_{3}, \\alpha_{2}, \\alpha_{1}$ ．"
      ],
      "source": "2016 数二 · 选择题 1"
    },
    {
      "year": 2016,
      "no": "4",
      "type": "选择题",
      "chapter": "diff",
      "kps": [
        "极值与最值",
        "凹凸与拐点"
      ],
      "stem": "设函数 $f(x)$ 在 $(-\\infty,+\\infty)$ 内连续，其导函数的图形如图所示，则",
      "options": [
        "函数 $f(x)$ 有 2 个极值点，曲线 $y=f(x)$ 有 2 个拐点．",
        "函数 $f(x)$ 有 2 个极值点，曲线 $y=f(x)$ 有 3 个拐点。",
        "函数 $f(x)$ 有 3 个极值点，曲线 $y=f(x)$ 有 1 个拐点。",
        "函数 $f(x)$ 有 3 个极值点，曲线 $y=f(x)$ 有 2 个拐点。"
      ],
      "source": "2016 数二 · 选择题 4"
    },
    {
      "year": 2016,
      "no": "7",
      "type": "选择题",
      "chapter": "matrix",
      "kps": [
        "逆矩阵",
        "矩阵运算"
      ],
      "stem": "设 $\\boldsymbol{A}, \\boldsymbol{B}$ 是可逆矩阵，且 $\\boldsymbol{A}$ 与 $\\boldsymbol{B}$ 相似，则下列结论错误的是（",
      "options": [
        "$\\mathbf{A}^{\\mathrm{T}}$ 与 $\\mathbf{B}^{\\mathrm{T}}$ 相似．",
        "$\\mathbf{A}^{-1}$ 与 $\\mathbf{B}^{-1}$ 相似。",
        "$\\mathbf{A}+\\mathbf{A}^{\\mathrm{T}}$ 与 $\\mathbf{B}+\\mathbf{B}^{\\mathrm{T}}$ 相似。",
        "$\\mathbf{A}+\\mathbf{A}^{-1}$ 与 $\\mathbf{B}+\\mathbf{B}^{-1}$ 相似。"
      ],
      "source": "2016 数二 · 选择题 7"
    },
    {
      "year": 2016,
      "no": "8",
      "type": "选择题",
      "chapter": "eigen",
      "kps": [
        "二次型"
      ],
      "stem": "设二次型 $f\\left(x_{1}, x_{2}, x_{3}\\right)=a\\left(x_{1}^{2}+x_{2}^{2}+x_{3}^{2}\\right)+2 x_{1} x_{2}+2 x_{2} x_{3}+2 x_{1} x_{3}$ 的正、负惯性指数分别为 1,2 ，则",
      "options": [
        "$a\\gt 1$ ．",
        "$a\\lt-2$ ．",
        "$-2\\lt a\\lt 1$ ．",
        "$a=$"
      ],
      "source": "2016 数二 · 选择题 8"
    },
    {
      "year": 2016,
      "no": "11",
      "type": "填空题",
      "chapter": "ode",
      "kps": [
        "一阶微分方程",
        "微分方程"
      ],
      "stem": "以 $y=x^{2}-\\mathrm{e}^{x}$ 和 $y=x^{2}$ 为特解的一阶非齐次线性微分方程为 $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2016 数二 · 填空题 11"
    },
    {
      "year": 2016,
      "no": "13",
      "type": "填空题",
      "chapter": "diff",
      "kps": [
        "相关变化率"
      ],
      "stem": "已知动点 $P$ 在曲线 $y=x^{3}$ 上运动，记坐标原点与点 $P$ 间的距离为 $l$ ．若点 $P$ 的横坐标对时间的变化率为常数 $v_{0}$ ，则当点 $P$ 运动到点 $(1,1)$ 时，$l$ 对时间的变化率是 $\\_\\_\\_\\_$。",
      "options": [],
      "source": "2016 数二 · 填空题 13"
    },
    {
      "year": 2016,
      "no": "14",
      "type": "填空题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "设矩阵 $\\left(\\begin{array}{ccc}a & -1 & -1 \\\\ -1 & a & -1 \\\\ -1 & -1 & a\\end{array}\\right)$ 与矩阵 $\\left(\\begin{array}{ccc}1 & 1 & 0 \\\\ 0 & -1 & 1 \\\\ 1 & 0 & 1\\end{array}\\right)$ 等价，则 $a=$",
      "options": [],
      "source": "2016 数二 · 填空题 14"
    },
    {
      "year": 2016,
      "no": "16",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "设函数 $f(x)=\\displaystyle\\int_{0}^{1}\\left|t^{2}-x^{2}\\right| \\mathrm{d} t(x\\gt 0)$ ，求 $f^{\\prime}(x)$ ，并求 $f(x)$ 的最小值．",
      "options": [],
      "source": "2016 数二 · 解答题 16"
    },
    {
      "year": 2016,
      "no": "17",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "隐函数求导",
        "极值与最值"
      ],
      "stem": "已知函数 $z=z(x, y)$ 由方程 $\\left(x^{2}+y^{2}\\right) z+\\ln z+2(x+y+1)=0$ 确定，求 $z=z(x, y)$ 的极值。",
      "options": [],
      "source": "2016 数二 · 解答题 17"
    },
    {
      "year": 2016,
      "no": "18",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "设 $D$ 是由直线 $y=1, y=x, y=-x$ 围成的有界区域，计算二重积分 $\\displaystyle\\iint_{D} \\displaystyle\\frac{x^{2}-x y-y^{2}}{x^{2}+y^{2}} \\mathrm{~d} x \\mathrm{~d} y$ 。",
      "options": [],
      "source": "2016 数二 · 解答题 18"
    },
    {
      "year": 2016,
      "no": "19",
      "type": "解答题",
      "chapter": "linear",
      "kps": [
        "解的结构"
      ],
      "stem": "已知 $y_{1}(x)=\\mathrm{e}^{x}, y_{2}(x)=u(x) \\mathrm{e}^{x}$ 是二阶微分方程 $(2 x-1) y^{\\prime \\prime}-(2 x+1) y^{\\prime}+2 y=0$ 的两个解。若 $u(-1)=\\mathrm{e}, u(0)=-1$ ，求 $u(x)$ ，并写出该微分方程的通解。",
      "options": [],
      "source": "2016 数二 · 解答题 19"
    },
    {
      "year": 2016,
      "no": "20",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "旋转体体积",
        "平面图形面积"
      ],
      "stem": "设 $D$ 是由曲线 $y=\\sqrt{1-x^{2}}(0 \\leqslant x \\leqslant 1)$ 与 $\\left\\{\\begin{array}{l}x=\\cos ^{3} t \\\\ y=\\sin ^{3} t\\end{array}\\left(0 \\leqslant t \\leqslant \\displaystyle\\frac{\\pi}{2}\\right)\\right.$ 围成的平面区域，求 $D$ 绕 $x$ 轴旋转一周所得旋转体的体积和表面积。",
      "options": [],
      "source": "2016 数二 · 解答题 20"
    },
    {
      "year": 2016,
      "no": "21",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分应用",
        "零点定理"
      ],
      "stem": "已知函数 $f(x)$ 在 $\\left[0, \\displaystyle\\frac{3 \\pi}{2}\\right]$ 上连续，在 $\\left(0, \\displaystyle\\frac{3 \\pi}{2}\\right)$ 内是函数 $\\displaystyle\\frac{\\cos x}{2 x-3 \\pi}$ 的一个原函数，且 $f(0)=0$ ．\n（I）求 $f(x)$ 在区间 $\\left[0, \\displaystyle\\frac{3 \\pi}{2}\\right]$ 上的平均值；\n（II）证明 $f(x)$ 在区间 $\\left(0, \\displaystyle\\frac{3 \\pi}{2}\\right)$ 内存在唯一零点．",
      "options": [],
      "source": "2016 数二 · 解答题 21"
    },
    {
      "year": 2016,
      "no": "22",
      "type": "解答题",
      "chapter": "linear",
      "kps": [
        "解的结构",
        "线性方程组"
      ],
      "stem": "设矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}1 & 1 & 1-a \\\\ 1 & 0 & a \\\\ a+1 & 1 & a+1\\end{array}\\right), \\boldsymbol{\\beta}=\\left(\\begin{array}{c}0 \\\\ 1 \\\\ 2 a-2\\end{array}\\right)$ ，且方程组 $\\boldsymbol{A} \\boldsymbol{x}=\\boldsymbol{\\beta}$ 无解．\n（I）求 $a$ 的值；\n（II）求方程组 $\\boldsymbol{A}^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}=\\boldsymbol{A}^{\\mathrm{T}} \\boldsymbol{\\beta}$ 的通解。",
      "options": [],
      "source": "2016 数二 · 解答题 22"
    },
    {
      "year": 2016,
      "no": "23",
      "type": "解答题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "已知矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}0 & -1 & 1 \\\\ 2 & -3 & 0 \\\\ 0 & 0 & 0\\end{array}\\right)$ ．\n（I）求 $\\boldsymbol{A}^{99}$ ；\n（II）设3阶矩阵 $\\boldsymbol{B}=\\left(\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}\\right)$ 满足 $\\boldsymbol{B}^{2}=\\boldsymbol{B} \\boldsymbol{A}$ 。记 $\\boldsymbol{B}^{100}=\\left(\\boldsymbol{\\beta}_{1}, \\boldsymbol{\\beta}_{2}, \\boldsymbol{\\beta}_{3}\\right)$ ，将 $\\boldsymbol{\\beta}_{1}, \\boldsymbol{\\beta}_{2}, \\boldsymbol{\\beta}_{3}$ 分别表示为 $\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}$ 的线性组合。",
      "options": [],
      "source": "2016 数二 · 解答题 23"
    },
    {
      "year": 2017,
      "no": "2",
      "type": "选择题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "设二阶可导函数 $f(x)$ 满足 $f(1)=f(-1)=1, f(0)=-1$ 且 $f^{\\prime \\prime}(x)\\gt 0$ ，则",
      "options": [
        "$\\displaystyle\\int_{-1}^{1} f(x) \\mathrm{d} x\\gt 0$ ．",
        "$\\displaystyle\\int_{-1}^{1} f(x) \\mathrm{d} x\\lt 0$ ．",
        "$\\displaystyle\\int_{-1}^{0} f(x) \\mathrm{d} x\\gt\\displaystyle\\int_{0}^{1} f(x) \\mathrm{d} x$ ．",
        "$\\displaystyle\\int_{-1}^{0} f(x) \\mathrm{d} x\\lt\\displaystyle\\int_{0}^{1} f(x) \\mathrm{d} x$."
      ],
      "source": "2017 数二 · 选择题 2"
    },
    {
      "year": 2017,
      "no": "3",
      "type": "选择题",
      "chapter": "limit",
      "kps": [
        "数列极限",
        "极限计算"
      ],
      "stem": "设数列 $\\left\\{x_{n}\\right\\}$ 收敛，则",
      "options": [
        "当 $\\displaystyle\\lim _{n \\rightarrow \\infty} \\sin x_{n}=0$ 时， $\\displaystyle\\lim _{n \\rightarrow \\infty} x_{n}=0$ ．",
        "当 $\\displaystyle\\lim _{n \\rightarrow \\infty}\\left(x_{n}+\\sqrt{\\left|x_{n}\\right|}\\right)=0$ 时， $\\displaystyle\\lim _{n \\rightarrow \\infty} x_{n}=0$ ．",
        "当 $\\displaystyle\\lim _{n \\rightarrow \\infty}\\left(x_{n}+x_{n}^{2}\\right)=0$ 时， $\\displaystyle\\lim _{n \\rightarrow \\infty} x_{n}=0$ ．",
        "当 $\\displaystyle\\lim _{n \\rightarrow \\infty}\\left(x_{n}+\\sin x_{n}\\right)=0$ 时， $\\displaystyle\\lim _{n \\rightarrow \\infty} x_{n}=0$ ．"
      ],
      "source": "2017 数二 · 选择题 3"
    },
    {
      "year": 2017,
      "no": "6",
      "type": "选择题",
      "chapter": "integral",
      "kps": [
        "平面图形面积"
      ],
      "stem": "甲，乙两人赛跑，计时开始时，甲在乙前方 10 （单位：m）处，图中，实线表示甲的速度曲线 $v=v_{1}(t)$（单位： $\\mathrm{m} / \\mathrm{s}$ ），虚线表示乙的速度曲线 $v=v_{2}(t)$ ，三块阴影部分面积的数值依次为 $10,20,3$ 。计时开始后乙追上甲的时刻记为 $t_{0}$（单位： s ），则",
      "options": [
        "$t_{0}=10$ ．",
        "$15\\lt t_{0}\\lt 20$ ．",
        "$t_{0}\\gt 25$ ．",
        "$t_{0}=25$ ．"
      ],
      "source": "2017 数二 · 选择题 6"
    },
    {
      "year": 2017,
      "no": "7",
      "type": "选择题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "逆矩阵",
        "矩阵运算"
      ],
      "stem": "设 $\\boldsymbol{A}$ 为3阶矩阵， $\\boldsymbol{P}=\\left(\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}\\right)$ 为可逆矩阵，使得 $\\boldsymbol{P}^{-1} \\boldsymbol{A} \\boldsymbol{P}=\\left(\\begin{array}{ccc}0 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 2\\end{array}\\right)$ ，则\n$$\n\\boldsymbol{A}\\left(\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}+\\boldsymbol{\\alpha}_{3}\\right)=(\\quad)\n$$",
      "options": [
        "$\\mathbf{\\alpha}_{1}+\\mathbf{\\alpha}_{2}$ ．",
        "$\\mathbf{\\alpha}_{2}+2 \\mathbf{\\alpha}_{3}$.",
        "$\\mathbf{\\alpha}_{2}+\\mathbf{\\alpha}_{3}$.",
        "$\\mathbf{\\alpha}_{1}+2 \\mathbf{\\alpha}_{2}$ ．"
      ],
      "source": "2017 数二 · 选择题 7"
    },
    {
      "year": 2017,
      "no": "8",
      "type": "选择题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "已知矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{lll}2 & 0 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 1\\end{array}\\right), \\boldsymbol{B}=\\left(\\begin{array}{lll}2 & 1 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 1\\end{array}\\right), \\boldsymbol{C}=\\left(\\begin{array}{lll}1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2\\end{array}\\right)$ ，则（ ）",
      "options": [
        "$\\mathbf{A}$ 与 $\\mathbf{C}$ 相似， $\\mathbf{B}$ 与 $\\mathbf{C}$ 相似。",
        "$\\mathbf{A}$ 与 $\\mathbf{C}$ 相似， $\\mathbf{B}$ 与 $\\mathbf{C}$ 不相似。",
        "$\\mathbf{A}$ 与 $\\mathbf{C}$ 不相似， $\\mathbf{B}$ 与 $\\mathbf{C}$ 相似。",
        "$\\mathbf{A}$ 与 $\\mathbf{C}$ 不相似， $\\mathbf{B}$ 与 $\\boldsy$"
      ],
      "source": "2017 数二 · 选择题 8"
    },
    {
      "year": 2017,
      "no": "9",
      "type": "填空题",
      "chapter": "diff",
      "kps": [
        "渐近线"
      ],
      "stem": "曲线 $y=x\\left(1+\\arcsin \\displaystyle\\frac{2}{x}\\right)$ 的斜渐近线方程为 $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2017 数二 · 填空题 9"
    },
    {
      "year": 2017,
      "no": "11",
      "type": "填空题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{0}^{+\\infty} \\displaystyle\\frac{\\ln (1+x)}{(1+x)^{2}} \\mathrm{~d} x=$ $\\_\\_\\_\\_$。",
      "options": [],
      "source": "2017 数二 · 填空题 11"
    },
    {
      "year": 2017,
      "no": "13",
      "type": "填空题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{0}^{1} \\mathrm{~d} y \\displaystyle\\int_{y}^{1} \\displaystyle\\frac{\\tan x}{x} \\mathrm{~d} x=$ $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2017 数二 · 填空题 13"
    },
    {
      "year": 2017,
      "no": "14",
      "type": "填空题",
      "chapter": "eigen",
      "kps": [
        "特征值"
      ],
      "stem": "设矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}4 & 1 & -2 \\\\ 1 & 2 & a \\\\ 3 & 1 & -1\\end{array}\\right)$ 的一个特征向量为 $\\left(\\begin{array}{l}1 \\\\ 1 \\\\ 2\\end{array}\\right)$ ，则 $a=$",
      "options": [],
      "source": "2017 数二 · 填空题 14"
    },
    {
      "year": 2017,
      "no": "15",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "求 $\\displaystyle\\lim _{x \\rightarrow 0^{+}} \\displaystyle\\frac{\\displaystyle\\int_{0}^{x} \\sqrt{x-t} \\mathrm{e}^{t} \\mathrm{~d} t}{\\sqrt{x^{3}}}$ ．",
      "options": [],
      "source": "2017 数二 · 解答题 15"
    },
    {
      "year": 2017,
      "no": "16",
      "type": "解答题",
      "chapter": "multidiff",
      "kps": [
        "偏导数"
      ],
      "stem": "设函数 $f(u, v)$ 具有 2 阶连续偏导数，$y=f\\left(\\mathrm{e}^{x}, \\cos x\\right)$ ，求 $\\left.\\displaystyle\\frac{\\mathrm{d} y}{\\mathrm{~d} x}\\right|_{x=0},\\left.\\displaystyle\\frac{\\mathrm{~d}^{2} y}{\\mathrm{~d} x^{2}}\\right|_{x=0}$ ．",
      "options": [],
      "source": "2017 数二 · 解答题 16"
    },
    {
      "year": 2017,
      "no": "19",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "中值定理"
      ],
      "stem": "设函数 $f(x)$ 在区间 $[0,1]$ 上具有 2 阶导数，且 $f(1)\\gt 0, \\displaystyle\\lim _{x \\rightarrow 0^{+}} \\displaystyle\\frac{f(x)}{x}\\lt 0$ 。证明：\n（I）方程 $f(x)=0$ 在区间 $(0,1)$ 内至少存在一个实根；\n（II）方程 $f(x) f^{\\prime \\prime}(x)+\\left[f^{\\prime}(x)\\right]^{2}=0$ 在区间 $(0,1)$ 内至少存在两个不同实根。",
      "options": [],
      "source": "2017 数二 · 解答题 19"
    },
    {
      "year": 2017,
      "no": "20",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "已知平面区域 $D=\\left\\{(x, y) \\mid x^{2}+y^{2} \\leqslant 2 y\\right\\}$ ，计算二重积分 $\\displaystyle\\iint_{D}(x+1)^{2} \\mathrm{~d} x \\mathrm{~d} y$ ．",
      "options": [],
      "source": "2017 数二 · 解答题 20"
    },
    {
      "year": 2017,
      "no": "21",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "导数定义"
      ],
      "stem": "设 $y(x)$ 是区间 $\\left(0, \\displaystyle\\frac{3}{2}\\right)$ 内的可导函数，且 $y(1)=0$ 。点 $P$ 是曲线 $l: y=y(x)$ 上的任意一点， $l$ 在点 $P$ 处的切线与 $y$ 轴相交于点 $\\left(0, Y_{P}\\right)$ ，法线与 $x$ 轴相交于点 $\\left(X_{P}, 0\\right)$ ，若 $X_{P}=Y_{P}$ ，求 $l$ 上点的坐标 $(x, y)$ 满足的方程。",
      "options": [],
      "source": "2017 数二 · 解答题 21"
    },
    {
      "year": 2017,
      "no": "22",
      "type": "解答题",
      "chapter": "eigen",
      "kps": [
        "特征值"
      ],
      "stem": "设3阶矩阵 $\\boldsymbol{A}=\\left(\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}\\right)$ 有3个不同的特征值，且 $\\boldsymbol{\\alpha}_{3}=\\boldsymbol{\\alpha}_{1}+2 \\boldsymbol{\\alpha}_{2}$ ．\n（I）证明 $r(\\boldsymbol{A})=2$ ；\n（II）若 $\\boldsymbol{\\beta}=\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}+\\boldsymbol{\\alpha}_{3}$ ，求方程组 $\\boldsymbol{A} \\boldsymbol{x}=\\boldsymbol{\\beta}$ 的通解．",
      "options": [],
      "source": "2017 数二 · 解答题 22"
    },
    {
      "year": 2017,
      "no": "23",
      "type": "解答题",
      "chapter": "eigen",
      "kps": [
        "二次型",
        "相似对角化"
      ],
      "stem": "设二次型 $f\\left(x_{1}, x_{2}, x_{3}\\right)=2 x_{1}^{2}-x_{2}^{2}+a x_{3}^{2}+2 x_{1} x_{2}-8 x_{1} x_{3}+2 x_{2} x_{3}$ 在正交变换 $\\boldsymbol{x}=\\boldsymbol{Q} \\boldsymbol{y}$ 下的标准形为 $\\lambda_{1} y_{1}^{2}+\\lambda_{2} y_{2}^{2}$ ，求 $a$ 的值及一个正交矩阵 $\\boldsymbol{Q}$ 。",
      "options": [],
      "source": "2017 数二 · 解答题 23"
    },
    {
      "year": 2018,
      "no": "1",
      "type": "选择题",
      "chapter": "limit",
      "kps": [
        "极限计算"
      ],
      "stem": "若 $\\displaystyle\\lim _{x \\rightarrow 0}\\left(\\mathrm{e}^{x}+a x^{2}+b x\\right)^{\\displaystyle\\frac{1}{x^{2}}}=1$ ，则 $($",
      "options": [
        "$a=\\displaystyle\\frac{1}{2}, b=-1$ ．",
        "$a=-\\displaystyle\\frac{1}{2}, b=-1$ ．",
        "$a=\\displaystyle\\frac{1}{2}, b=1$ 。",
        "$a=-\\displaystyle\\frac{1}{2}, b=1$ ．"
      ],
      "source": "2018 数二 · 选择题 1"
    },
    {
      "year": 2018,
      "no": "6",
      "type": "选择题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{-1}^{0} \\mathrm{~d} x \\displaystyle\\int_{-x}^{2-x^{2}}(1-x y) \\mathrm{d} y+\\displaystyle\\int_{0}^{1} \\mathrm{~d} x \\displaystyle\\int_{x}^{2-x^{2}}(1-x y) \\mathrm{d} y=$ ）",
      "options": [
        "$\\displaystyle\\frac{5}{3}$ ．",
        "$\\displaystyle\\frac{5}{6}$ ．",
        "$\\displaystyle\\frac{7}{3}$ ．",
        "$\\displaystyle\\frac{7}{6}$ ．"
      ],
      "source": "2018 数二 · 选择题 6"
    },
    {
      "year": 2018,
      "no": "7",
      "type": "选择题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "下列矩阵中，与矩阵 $\\left(\\begin{array}{lll}1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{array}\\right)$ 相似的为",
      "options": [
        "$\\left(\\begin{array}{ccc}1 & 1 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{array}\\right)$ ．",
        "$\\left(\\begin{array}{ccc}1 & 0 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1\\end{array}\\right)$ ．",
        "$\\left(\\begin{array}{ccc}1 & 1 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right)$ ．",
        "$\\left(\\begin{array}{ccc}1 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right)$ ．"
      ],
      "source": "2018 数二 · 选择题 7"
    },
    {
      "year": 2018,
      "no": "8",
      "type": "选择题",
      "chapter": "matrix",
      "kps": [
        "矩阵的秩",
        "矩阵运算"
      ],
      "stem": "设 $\\boldsymbol{A}, \\boldsymbol{B}$ 为 $n$ 阶矩阵，记 $r(\\boldsymbol{X})$ 为矩阵 $\\boldsymbol{X}$ 的秩，（ $\\boldsymbol{X}, \\boldsymbol{Y}$ ）表示分块矩阵，则（ ）",
      "options": [
        "$r(\\boldsymbol{A}, \\boldsymbol{A B})=r(\\boldsymbol{A})$ ．",
        "$r(\\boldsymbol{A}, \\boldsymbol{B A})=r(\\boldsymbol{A})$．",
        "$r(\\boldsymbol{A}, \\boldsymbol{B})=\\max \\{r(\\boldsymbol{A}), r(\\boldsymbol{B})\\}$．",
        "$r(\\boldsymbol{A}, \\boldsymbol{B})=r\\left(\\boldsymbol{A}^{\\mathrm{T}}, \\boldsymbol{B}^{\\mathrm{T}}\\right)$"
      ],
      "source": "2018 数二 · 选择题 8"
    },
    {
      "year": 2018,
      "no": "11",
      "type": "填空题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{5}^{+\\infty} \\displaystyle\\frac{1}{x^{2}-4 x+3} \\mathrm{~d} x=$ $\\_\\_\\_\\_$。",
      "options": [],
      "source": "2018 数二 · 填空题 11"
    },
    {
      "year": 2018,
      "no": "12",
      "type": "填空题",
      "chapter": "diff",
      "kps": [
        "曲率"
      ],
      "stem": "曲线 $\\left\\{\\begin{array}{l}x=\\cos ^{3} t \\\\ y=\\sin ^{3} t\\end{array}\\right.$ 在 $t=\\displaystyle\\frac{\\pi}{4}$ 对应点处的曲率为 $\\_\\_\\_\\_$ .",
      "options": [],
      "source": "2018 数二 · 填空题 12"
    },
    {
      "year": 2018,
      "no": "14",
      "type": "填空题",
      "chapter": "eigen",
      "kps": [
        "特征值"
      ],
      "stem": "设 $A$ 为3阶矩阵，$\\alpha_1, \\alpha_2, \\alpha_3$ 为线性无关的向量组。若 $A\\alpha_1=2\\alpha_1+\\alpha_2+\\alpha_3$，$A\\alpha_2=\\alpha_2+2\\alpha_3$，$A\\alpha_3=-\\alpha_2+\\alpha_3$，则 $A$ 的实特征值为____。",
      "options": [],
      "source": "2018 数二 · 填空题 14"
    },
    {
      "year": 2018,
      "no": "16",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分应用",
        "定积分计算"
      ],
      "stem": "已知连续函数 $f(x)$ 满足 $\\displaystyle\\int_{0}^{x} f(t) \\mathrm{d} t+\\displaystyle\\int_{0}^{x} t f(x-t) \\mathrm{d} t=a x^{2}$ ．\n（I）求 $f(x)$ ；\n（II）若 $f(x)$ 在区间 $[0,1]$ 上的平均值为 1 ，求 $a$ 的值．",
      "options": [],
      "source": "2018 数二 · 解答题 16"
    },
    {
      "year": 2018,
      "no": "17",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "设平面区域 $D$ 由曲线 $\\left\\{\\begin{array}{l}x=t-\\sin t, \\\\ y=1-\\cos t\\end{array} \\quad(0 \\leqslant t \\leqslant 2 \\pi)\\right.$ 与 $x$ 轴围成，计算二重积分 $\\displaystyle\\iint_{D}(x+2 y) \\mathrm{d} x \\mathrm{~d} y$.",
      "options": [],
      "source": "2018 数二 · 解答题 17"
    },
    {
      "year": 2018,
      "no": "18",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "中值定理"
      ],
      "stem": "已知常数 $k \\geqslant \\ln 2-1$ ．证明：$(x-1)\\left(x-\\ln ^{2} x+2 k \\ln x-1\\right) \\geqslant 0$ ．",
      "options": [],
      "source": "2018 数二 · 解答题 18"
    },
    {
      "year": 2018,
      "no": "19",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "平面图形面积"
      ],
      "stem": "将长为 2 m 的铁丝分成三段，依次围成圆、正方形与正三角形．三个图形的面积之和是否存在最小值？若存在，求出最小值。",
      "options": [],
      "source": "2018 数二 · 解答题 19"
    },
    {
      "year": 2018,
      "no": "20",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "平面图形面积",
        "相关变化率"
      ],
      "stem": "已知曲线 $L: y=\\displaystyle\\frac{4}{9} x^{2}(x \\geqslant 0)$ ，点 $O(0,0)$ ，点 $A(0,1)$ 。设 $P$ 是 $L$ 上的动点，$S$ 是直线 $O A$ 与直线 $A P$ 及曲线 $L$ 所围图形的面积．若 $P$ 运动到点 $(3,4)$ 时沿 $x$ 轴正向的速度是 4 ，求此时 $S$ 关于时间 $t$ 的变化率．",
      "options": [],
      "source": "2018 数二 · 解答题 20"
    },
    {
      "year": 2018,
      "no": "21",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "中值定理"
      ],
      "stem": "设数列 $\\left\\{x_{n}\\right\\}$ 满足：$x_{1}\\gt 0, x_{n} \\mathrm{e}^{x_{n+1}}=\\mathrm{e}^{x_{n}}-1(n=1,2, \\cdots)$ 。证明 $\\left\\{x_{n}\\right\\}$ 收敛，并求 $\\displaystyle\\lim _{n \\rightarrow \\infty} x_{n}$ 。",
      "options": [],
      "source": "2018 数二 · 解答题 21"
    },
    {
      "year": 2018,
      "no": "22",
      "type": "解答题",
      "chapter": "eigen",
      "kps": [
        "二次型"
      ],
      "stem": "设实二次型 $f\\left(x_{1}, x_{2}, x_{3}\\right)=\\left(x_{1}-x_{2}+x_{3}\\right)^{2}+\\left(x_{2}+x_{3}\\right)^{2}+\\left(x_{1}+a x_{3}\\right)^{2}$ ，其中 $a$ 是参数。\n（I）求 $f\\left(x_{1}, x_{2}, x_{3}\\right)=0$ 的解；\n（II）求 $f\\left(x_{1}, x_{2}, x_{3}\\right)$ 的规范形．",
      "options": [],
      "source": "2018 数二 · 解答题 22"
    },
    {
      "year": 2018,
      "no": "23",
      "type": "解答题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "逆矩阵",
        "矩阵运算"
      ],
      "stem": "已知 $a$ 是常数，且矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}1 & 2 & a \\\\ 1 & 3 & 0 \\\\ 2 & 7 & -a\\end{array}\\right)$ 可经初等列变换化为矩阵 $\\boldsymbol{B}=\\left(\\begin{array}{ccc}1 & a & 2 \\\\ 0 & 1 & 1 \\\\ -1 & 1 & 1\\end{array}\\right)$ ．\n（I）求 $a$ ；\n（II）求满足 $\\boldsymbol{A P}=\\boldsymbol{B}$ 的可逆矩阵 $\\boldsymbol{P}$ ．",
      "options": [],
      "source": "2018 数二 · 解答题 23"
    },
    {
      "year": 2019,
      "no": "2",
      "type": "选择题",
      "chapter": "diff",
      "kps": [
        "凹凸与拐点"
      ],
      "stem": "曲线 $y=x \\sin x+2 \\cos x\\left(-\\displaystyle\\frac{\\pi}{2}\\lt x\\lt 2 \\pi\\right)$ 的拐点坐标为（ ）",
      "options": [
        "（0，2）．",
        "$(\\pi,-2)$ ．",
        "$\\left(\\displaystyle\\frac{\\pi}{2}, \\displaystyle\\frac{\\pi}{2}\\right)$ ．",
        "$\\left(\\displaystyle\\frac{3 \\pi}{2},-\\displaystyle\\frac{3 \\pi}{2}\\right)$ ．"
      ],
      "source": "2019 数二 · 选择题 2"
    },
    {
      "year": 2019,
      "no": "3",
      "type": "选择题",
      "chapter": "integral",
      "kps": [
        "反常积分",
        "定积分计算"
      ],
      "stem": "下列反常积分发散的是（ ）",
      "options": [
        "$\\displaystyle\\int_{0}^{+\\infty} x \\mathrm{e}^{-x} \\mathrm{~d} x$ ．",
        "$\\displaystyle\\int_{0}^{+\\infty} x \\mathrm{e}^{-x^{2}} \\mathrm{~d} x$ ．",
        "$\\displaystyle\\int_{0}^{+\\infty} \\displaystyle\\frac{\\arctan x}{1+x^{2}} \\mathrm{~d} x$ ．",
        "$\\displaystyle\\int_{0}^{+\\infty} \\displaystyle\\frac{x}{1+x^{2}} \\mathrm{~d} x$ ．"
      ],
      "source": "2019 数二 · 选择题 3"
    },
    {
      "year": 2019,
      "no": "6",
      "type": "选择题",
      "chapter": "diff",
      "kps": [
        "导数定义",
        "曲率"
      ],
      "stem": "已知 $f(x), g(x) 2$ 阶可导且 2 阶导函数在 $x=a$ 处连续，则 $\\displaystyle\\lim _{x \\rightarrow a} \\displaystyle\\frac{f(x)-g(x)}{(x-a)^{2}}=0$ 是曲线 $y=f(x)$ 和 $y=g(x)$ 在 $x=a$ 对应的点处相切且曲率相等的（ ）",
      "options": [
        "充分非必要条件。",
        "充分必要条件。",
        "必要非充分条件。",
        "既非充分又非必要条件．"
      ],
      "source": "2019 数二 · 选择题 6"
    },
    {
      "year": 2019,
      "no": "7",
      "type": "选择题",
      "chapter": "linear",
      "kps": [
        "线性相关性",
        "解的结构",
        "线性方程组"
      ],
      "stem": "设 $\\boldsymbol{A}$ 是 4 阶矩阵， $\\boldsymbol{A}^{*}$ 是 $\\boldsymbol{A}$ 的伴随矩阵，若线性方程组 $\\boldsymbol{A} \\boldsymbol{x}=\\mathbf{0}$ 的基础解系中只有 2 个向量，则 $r\\left(\\boldsymbol{A}^{*}\\right)=(\\quad)$",
      "options": [
        "0 ．",
        "1．",
        "2．",
        "3．"
      ],
      "source": "2019 数二 · 选择题 7"
    },
    {
      "year": 2019,
      "no": "8",
      "type": "选择题",
      "chapter": "eigen",
      "kps": [
        "二次型"
      ],
      "stem": "（8）设 $\\boldsymbol{A}$ 是 3 阶实对称矩阵， $\\boldsymbol{E}$ 是 3 阶单位矩阵．若 $\\boldsymbol{A}^2+\\boldsymbol{A}=2\\boldsymbol{E}$ ，且 $|\\boldsymbol{A}|=4$ ，则二次型 $\\boldsymbol{x}^\\mathrm{T}\\boldsymbol{A}\\boldsymbol{x}$ 的规范形为",
      "options": [
        "$y_1^2+y_2^2+y_3^2$ ．",
        "$y_1^2+y_2^2-y_3^2$ ．",
        "$y_1^2-y_2^2-y_3^2$ ．",
        "$-y_1^2-y_2^2-y_3^2$ ．"
      ],
      "source": "2019 数二 · 选择题 8"
    },
    {
      "year": 2019,
      "no": "9",
      "type": "填空题",
      "chapter": "limit",
      "kps": [
        "极限计算"
      ],
      "stem": "$\\displaystyle\\lim _{x \\rightarrow 0}\\left(x+2^{x}\\right)^{\\displaystyle\\frac{2}{x}}=$ $\\_\\_\\_\\_$。",
      "options": [],
      "source": "2019 数二 · 填空题 9"
    },
    {
      "year": 2019,
      "no": "11",
      "type": "填空题",
      "chapter": "multidiff",
      "kps": [
        "偏导数"
      ],
      "stem": "设函数 $f(u)$ 可导，$z=y f\\left(\\displaystyle\\frac{y^{2}}{x}\\right)$ ，则 $2 x \\displaystyle\\frac{\\partial z}{\\partial x}+y \\displaystyle\\frac{\\partial z}{\\partial y}=$ $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2019 数二 · 填空题 11"
    },
    {
      "year": 2019,
      "no": "14",
      "type": "填空题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "矩阵运算"
      ],
      "stem": "已知矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{cccc}1 & -1 & 0 & 0 \\\\ -2 & 1 & -1 & 1 \\\\ 3 & -2 & 2 & -1 \\\\ 0 & 0 & 3 & 4\\end{array}\\right), A_{i j}$ 表示 $|\\boldsymbol{A}|$ 中 $(i, j)$ 元的代数余子式，则 $A_{11}-A_{12}=$",
      "options": [],
      "source": "2019 数二 · 填空题 14"
    },
    {
      "year": 2019,
      "no": "15",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "极值与最值"
      ],
      "stem": "已知函数 $f(x)=\\left\\{\\begin{array}{ll}x^{2 x}, & x\\gt 0, \\\\ x \\mathrm{e}^{x}+1, & x \\leqslant 0 .\\end{array}\\right.$ 求 $f^{\\prime}(x)$ ，并求 $f(x)$ 的极值．",
      "options": [],
      "source": "2019 数二 · 解答题 15"
    },
    {
      "year": 2019,
      "no": "17",
      "type": "解答题",
      "chapter": "ode",
      "kps": [
        "一阶微分方程",
        "旋转体体积"
      ],
      "stem": "设函数 $y(x)$ 是微分方程 $y^{\\prime}-x y=\\displaystyle\\frac{1}{2 \\sqrt{x}} \\mathrm{e}^{\\displaystyle\\frac{x^{2}}{2}}$ 满足条件 $y(1)=\\sqrt{\\mathrm{e}}$ 的特解．\n（I）求 $y(x)$ ；\n（ II ）设平面区域 $D=\\{(x, y) \\mid 1 \\leqslant x \\leqslant 2,0 \\leqslant y \\leqslant y(x)\\}$ ，求 $D$ 绕 $x$ 轴旋转所得旋转体的体积。",
      "options": [],
      "source": "2019 数二 · 解答题 17"
    },
    {
      "year": 2019,
      "no": "18",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "已知平面区域 $D=\\left\\{(x, y)| | x \\mid \\leqslant y,\\left(x^{2}+y^{2}\\right)^{3} \\leqslant y^{4}\\right\\}$ ，计算二重积分 $\\displaystyle\\iint_{D} \\displaystyle\\frac{x+y}{\\sqrt{x^{2}+y^{2}}} \\mathrm{~d} x \\mathrm{~d} y$.",
      "options": [],
      "source": "2019 数二 · 解答题 18"
    },
    {
      "year": 2019,
      "no": "19",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "平面图形面积"
      ],
      "stem": "设 $n$ 为正整数，记 $S_{n}$ 为曲线 $y=\\mathrm{e}^{-x} \\sin x(0 \\leqslant x \\leqslant n \\pi)$ 与 $x$ 轴所围图形的面积，求 $S_{n}$ ，并求 $\\displaystyle\\lim _{n \\rightarrow \\infty} S_{n}$ ．",
      "options": [],
      "source": "2019 数二 · 解答题 19"
    },
    {
      "year": 2019,
      "no": "20",
      "type": "解答题",
      "chapter": "multidiff",
      "kps": [
        "偏导数"
      ],
      "stem": "已知函数 $u(x, y)$ 满足 $2 \\displaystyle\\frac{\\partial^{2} u}{\\partial x^{2}}-2 \\displaystyle\\frac{\\partial^{2} u}{\\partial y^{2}}+3 \\displaystyle\\frac{\\partial u}{\\partial x}+3 \\displaystyle\\frac{\\partial u}{\\partial y}=0$ ，求 $a, b$ 的值，使得在变换 $u(x, y)= v(x, y) \\mathrm{e}^{a x+b y}$ 下，上述等式可化为 $v(x, y)$ 不含一阶偏导数的等式。",
      "options": [],
      "source": "2019 数二 · 解答题 20"
    },
    {
      "year": 2019,
      "no": "21",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "已知函数 $f(x)$ 在 $[0,1]$ 上具有 2 阶导数，且 $f(0)=0, f(1)=1, \\displaystyle\\int_{0}^{1} f(x) \\mathrm{d} x=1$ ，证明：\n（ I ）存在 $\\xi \\in(0,1)$ ，使得 $f^{\\prime}(\\xi)=0$ ；\n（II）存在 $\\eta \\in(0,1)$ ，使得 $f^{\\prime \\prime}(\\eta)\\lt-2$ 。",
      "options": [],
      "source": "2019 数二 · 解答题 21"
    },
    {
      "year": 2019,
      "no": "22",
      "type": "解答题",
      "chapter": "linear",
      "kps": [
        "线性相关性"
      ],
      "stem": "已知向量组 I ： $\\boldsymbol{\\alpha}_{1}=\\left(\\begin{array}{l}1 \\\\ 1 \\\\ 4\\end{array}\\right), \\boldsymbol{\\alpha}_{2}=\\left(\\begin{array}{l}1 \\\\ 0 \\\\ 4\\end{array}\\right), \\boldsymbol{\\alpha}_{3}=\\left(\\begin{array}{c}1 \\\\ 2 \\\\ a^{2}+3\\end{array}\\right)$ 与 II ： $\\boldsymbol{\\beta}_{1}=\\left(\\begin{array}{c}1 \\\\ 1 \\\\ a+3\\end{array}\\right), \\boldsymbol{\\beta}_{2}=\\left(\\begin{array}{c}0 \\\\ 2 \\\\ 1-a\\end{array}\\right)$ ，\n$\\boldsymbol{\\beta}_{3}=\\left(\\begin{array}{c}1 \\\\ 3 \\\\ a^{2}+3\\end{array}\\right)$ ．若向量组 I 与 II 等价，求 $a$ 的取值，并将 $\\boldsymbol{\\beta}_{3}$ 用 $\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}$ 线性表示．",
      "options": [],
      "source": "2019 数二 · 解答题 22"
    },
    {
      "year": 2019,
      "no": "23",
      "type": "解答题",
      "chapter": "matrix",
      "kps": [
        "行列式计算",
        "逆矩阵",
        "矩阵运算"
      ],
      "stem": "已知矩阵 $\\boldsymbol{A}=\\left(\\begin{array}{ccc}-2 & -2 & 1 \\\\ 2 & x & -2 \\\\ 0 & 0 & -2\\end{array}\\right)$ 与 $\\boldsymbol{B}=\\left(\\begin{array}{ccc}2 & 1 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & y\\end{array}\\right)$ 相似。\n（I）求 $x, y$ ；\n（II）求可逆矩阵 $\\boldsymbol{P}$ ，使得 $\\boldsymbol{P}^{-1} \\boldsymbol{A P}=\\boldsymbol{B}$ ．",
      "options": [],
      "source": "2019 数二 · 解答题 23"
    },
    {
      "year": 2020,
      "no": "3",
      "type": "选择题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{0}^{1} \\displaystyle\\frac{\\arcsin \\sqrt{x}}{\\sqrt{x(1-x)}} \\mathrm{d} x=$ ．",
      "options": [
        "$\\displaystyle\\frac{\\pi^{2}}{4}$",
        "$\\displaystyle\\frac{\\pi^{2}}{8}$",
        "$\\displaystyle\\frac{\\pi}{4}$",
        "$\\displaystyle\\frac{\\pi}{8}$"
      ],
      "source": "2020 数二 · 选择题 3"
    },
    {
      "year": 2020,
      "no": "4",
      "type": "选择题",
      "chapter": "diff",
      "kps": [
        "高阶导数"
      ],
      "stem": "设 $f(x)=x^{2} \\ln (1-x)$ ，当 $n \\geqslant 3$ 时，$f^{(n)}(0)=($ ．",
      "options": [
        "$-\\displaystyle\\frac{n!}{n-2}$",
        "$\\displaystyle\\frac{n!}{n-2}$",
        "$-\\displaystyle\\frac{(n-2)!}{n}$",
        "$\\displaystyle\\frac{(n-2)!}{n}$"
      ],
      "source": "2020 数二 · 选择题 4"
    },
    {
      "year": 2020,
      "no": "5",
      "type": "选择题",
      "chapter": "multidiff",
      "kps": [
        "偏导数"
      ],
      "stem": "关于函数 $f(x, y)=\\left\\{\\begin{array}{ll}x y, & x y \\neq 0, \\\\ x, & y=0, \\\\ y, & x=0,\\end{array}\\right.$ 给出如下结论\n（1）$\\left.\\displaystyle\\frac{\\partial f}{\\partial x}\\right|_{(0,0)}=1$ ；\n（2）$\\left.\\displaystyle\\frac{\\partial^{2} f}{\\partial x \\partial y}\\right|_{(0,0)}=1$ ；\n（3） $\\displaystyle\\lim _{(x, y) \\rightarrow(0,0)} f(x, y)=0$ ；\n（4） $\\operatorname{limlim}_{y \\rightarrow 0} f(x, y)=0$ ．\n其中正确的个数是 ．",
      "options": [
        "4",
        "3",
        "2",
        "1"
      ],
      "source": "2020 数二 · 选择题 5"
    },
    {
      "year": 2020,
      "no": "7",
      "type": "选择题",
      "chapter": "linear",
      "kps": [
        "线性相关性",
        "解的结构",
        "线性方程组"
      ],
      "stem": "设4阶矩阵 $\\boldsymbol{A}=\\left(a_{i j}\\right)_{4 \\times 4}$ 不可逆，$a_{12}$ 的代数余子式 $A_{12} \\neq 0, \\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}, \\boldsymbol{\\alpha}_{3}, \\boldsymbol{\\alpha}_{4}$ 为矩阵 $\\boldsymbol{A}$ 的列向量组， $\\boldsymbol{A}^{*}$ 为 $\\boldsymbol{A}$ 的伴随矩阵，则方程组 $\\boldsymbol{A}^{*} \\boldsymbol{X}=\\mathbf{0}$ 的通解为（ ）。",
      "options": [
        "$\\mathbf{X}=k_{1} \\mathbf{\\alpha}_{1}+k_{2} \\mathbf{\\alpha}_{2}+k_{3} \\mathbf{\\alpha}_{3}$ ，其中 $k_{1}, k_{2}, k_{3}$ 为任意常数",
        "$\\mathbf{X}=k_{1} \\mathbf{\\alpha}_{1}+k_{2} \\mathbf{\\alpha}_{2}+k_{3} \\mathbf{\\alpha}_{4}$ ，其中 $k_{1}, k_{2}, k_{3}$ 为任意常数",
        "$\\mathbf{X}=k_{1} \\mathbf{\\alpha}_{1}+k_{2} \\mathbf{\\alpha}_{3}+k_{3} \\mathbf{\\alpha}_{4}$ ，其中 $k_{1}, k_{2}, k_{3}$ 为任意常数",
        "$\\mathbf{X}=k_{1} \\mathbf{\\alpha}_{2}+k_{2} \\mathbf{\\alpha}_{3}+k_{3} \\mathbf{\\alpha}_{4}$ ，其中 $k_{1}, k_{2}, k_{3}$ 为任意常数"
      ],
      "source": "2020 数二 · 选择题 7"
    },
    {
      "year": 2020,
      "no": "8",
      "type": "选择题",
      "chapter": "eigen",
      "kps": [
        "特征值"
      ],
      "stem": "设 $\\boldsymbol{A}$ 为 3 阶矩阵， $\\boldsymbol{\\alpha}_{1}, \\boldsymbol{\\alpha}_{2}$ 为 $\\boldsymbol{A}$ 的属于特征值 1 的线性无关的特征向量， $\\boldsymbol{\\alpha}_{3}$ 为 $\\boldsymbol{A}$ 的属于特征值 -1 的特征向量，则使得 $\\boldsymbol{P}^{-1} \\boldsymbol{A P}=\\left(\\begin{array}{ccc}1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right)$ 的可逆矩阵 $\\boldsymbol{P}$ 为（ ）。",
      "options": [
        "$\\left(\\mathbf{\\alpha}_{1}+\\mathbf{\\alpha}_{3}, \\mathbf{\\alpha}_{2},-\\mathbf{\\alpha}_{3}\\right)$",
        "$\\left(\\mathbf{\\alpha}_{1}+\\mathbf{\\alpha}_{2}, \\mathbf{\\alpha}_{2},-\\mathbf{\\alpha}_{3}\\right)$",
        "$\\left(\\mathbf{\\alpha}_{1}+\\mathbf{\\alpha}_{3},-\\mathbf{\\alpha}_{3}, \\mathbf{\\alpha}_{2}\\right)$",
        "$\\left(\\mathbf{\\alpha}_{1}+\\mathbf{\\alpha}_{2},-\\mathbf{\\alpha}_{3}, \\mathbf{\\alpha}_{2}\\right)$\\right)"
      ],
      "source": "2020 数二 · 选择题 8"
    },
    {
      "year": 2020,
      "no": "10",
      "type": "填空题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "$\\displaystyle\\int_{0}^{1} \\mathrm{~d} y \\displaystyle\\int_{\\sqrt{y}}^{1} \\sqrt{x^{3}+1} \\mathrm{~d} x=$ $\\_\\_\\_\\_$ ．",
      "options": [],
      "source": "2020 数二 · 填空题 10"
    },
    {
      "year": 2020,
      "no": "12",
      "type": "填空题",
      "chapter": "integral",
      "kps": [
        "定积分应用",
        "水压力"
      ],
      "stem": "斜边长为 $2 a$ 的等腰直角三角形平板铅直地沉人水中，且斜边与水面相齐，记重力加速度为 $g$ ，水密度为 $\\rho$ ，则该平板一侧所受的水压力为 $\\_\\_\\_\\_$。",
      "options": [],
      "source": "2020 数二 · 填空题 12"
    },
    {
      "year": 2020,
      "no": "15",
      "type": "解答题",
      "chapter": "diff",
      "kps": [
        "渐近线"
      ],
      "stem": "（本题满分 10 分）\n求曲线 $y=\\displaystyle\\frac{x^{1+x}}{(1+x)^{x}}(x\\gt 0)$ 的斜渐近线方程．",
      "options": [],
      "source": "2020 数二 · 解答题 15"
    },
    {
      "year": 2020,
      "no": "16",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "定积分计算"
      ],
      "stem": "已知函数 $f(x)$ 连续且 $\\displaystyle\\lim _{x \\rightarrow 0} \\displaystyle\\frac{f(x)}{x}=1, g(x)=\\displaystyle\\int_{0}^{1} f(x t) \\mathrm{d} t$ ，求 $g^{\\prime}(x)$ ，并证明 $g^{\\prime}(x)$ 在 $x=0$处连续．",
      "options": [],
      "source": "2020 数二 · 解答题 16"
    },
    {
      "year": 2020,
      "no": "17",
      "type": "解答题",
      "chapter": "multidiff",
      "kps": [
        "多元极值",
        "偏导数"
      ],
      "stem": "（本题满分 10 分）\n求函数 $f(x, y)=x^{3}+8 y^{3}-x y$ 的极值．",
      "options": [],
      "source": "2020 数二 · 解答题 17"
    },
    {
      "year": 2020,
      "no": "18",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "旋转体体积"
      ],
      "stem": "设函数 $f(x)$ 的定义域为 $(0,+\\infty)$ 且满足 $2 f(x)+x^{2} f\\left(\\displaystyle\\frac{1}{x}\\right)=\\displaystyle\\frac{x^{2}+2 x}{\\sqrt{1+x^{2}}}$ ，求 $f(x)$ ，并求曲线 $y=f(x), y=\\displaystyle\\frac{1}{2}, y=\\displaystyle\\frac{\\sqrt{3}}{2}$ 及 $y$ 轴所围图形绕 $x$ 轴旋转所成旋转体的体积．",
      "options": [],
      "source": "2020 数二 · 解答题 18"
    },
    {
      "year": 2020,
      "no": "19",
      "type": "解答题",
      "chapter": "multiint",
      "kps": [
        "二重积分"
      ],
      "stem": "平面区域 $D$ 由直线 $x=1, x=2, y=x$ 与 $x$ 轴围成，计算 $\\displaystyle\\iint_{D} \\displaystyle\\frac{\\sqrt{x^{2}+y^{2}}}{x} \\mathrm{~d} x \\mathrm{~d} y$ ．",
      "options": [],
      "source": "2020 数二 · 解答题 19"
    },
    {
      "year": 2020,
      "no": "21",
      "type": "解答题",
      "chapter": "integral",
      "kps": [
        "平面图形面积"
      ],
      "stem": "设曲线 $y=f(x)$ 可导，且 $f^{\\prime}(x)\\gt 0$ ，曲线 $y=f(x)(x \\geqslant 0)$ 经过坐标原点 $O$ ，其上任意一点 $M$ 处的切线与 $x$ 轴交于 $T$ ，又 $M P$ 垂直 $x$ 轴于点 $P$ ，已知由曲线 $y=f(x)$ ，直线 $M P$以及 $x$ 轴所围图形的面积与 $\\triangle M T P$ 的面积之比恒为 $3: 2$ ，求满足上述条件的曲线方程．",
      "options": [],
      "source": "2020 数二 · 解答题 21"
    },
    {
      "year": 2020,
      "no": "22",
      "type": "解答题",
      "chapter": "eigen",
      "kps": [
        "二次型"
      ],
      "stem": "设二次型 $f\\left(x_{1}, x_{2}, x_{3}\\right)=x_{1}^{2}+x_{2}^{2}+x_{3}^{2}+2 a x_{1} x_{2}+2 a x_{1} x_{3}+2 a x_{2} x_{3}$ 经可逆线性变换 $x=P y$ 化为二次型 $g\\left(y_{1}, y_{2}, y_{3}\\right)=y_{1}^{2}+y_{2}^{2}+4 y_{3}^{2}+2 y_{1} y_{2}$ 。\n（I）求 $a$ 的值；\n（II）求可逆矩阵 $P$ 。",
      "options": [],
      "source": "2020 数二 · 解答题 22"
    },
    {
      "year": 2020,
      "no": "23",
      "type": "解答题",
      "chapter": "eigen",
      "kps": [
        "相似对角化",
        "特征值"
      ],
      "stem": "设 $\\boldsymbol{A}$ 为 2 阶矩阵， $\\boldsymbol{P}=(\\boldsymbol{\\alpha}, \\boldsymbol{A} \\boldsymbol{\\alpha})$ ，其中 $\\boldsymbol{\\alpha}$ 是非零向量且不是 $\\boldsymbol{A}$ 的特征向量．\n（I）证明： $\\boldsymbol{P}$ 为可逆矩阵；\n（II）若 $\\boldsymbol{A}^{2} \\boldsymbol{\\alpha}+\\boldsymbol{A} \\boldsymbol{\\alpha}-6 \\boldsymbol{\\alpha}=\\mathbf{0}$ ，求 $\\boldsymbol{P}^{-1} \\boldsymbol{A} \\boldsymbol{P}$ ，并判断 $\\boldsymbol{A}$ 是否相似于对角矩阵．",
      "options": [],
      "source": "2020 数二 · 解答题 23"
    }
  ]
};
