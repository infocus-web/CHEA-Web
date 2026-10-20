# Graph Report - chea-web-repo  (2026-10-20)

## Corpus Check
- 23 files · ~444,340 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 39 file(s) not represented in the graph (top: .css 22, .eot 4, .ttf 4)

## Summary
- 559 nodes · 1163 edges · 40 communities (24 shown, 16 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 91 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dcb25a68`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Be
- jquery-3.6.0.min.js
- remove
- bootstrap.bundle.min.js
- gsap.js
- ye
- ScrollTrigger.js
- Y
- SplitText.js
- _e
- n
- swiper.min.js
- x
- qc
- Ve
- o
- jarallax.min.js
- Tween
- ub
- dc
- p
- ua
- Nb
- Fa
- $a
- J
- Ia
- jquery.validate.min.js
- Sitio web CHEA S.A.
- CLAUDE.md

## God Nodes (most connected - your core abstractions)
1. `Be` - 40 edges
2. `ye` - 36 edges
3. `Y` - 28 edges
4. `remove()` - 26 edges
5. `_e` - 23 edges
6. `x()` - 18 edges
7. `n()` - 17 edges
8. `qc()` - 16 edges
9. `Kt()` - 15 edges
10. `qe` - 15 edges

## Surprising Connections (you probably didn't know these)
- `y()` --indirect_call--> `h()`  [INFERRED]
  assets/vendors/jarallax/jarallax.min.js → assets/vendors/bootstrap/js/bootstrap.bundle.min.js
- `l()` --indirect_call--> `h()`  [INFERRED]
  assets/vendors/aos/aos.js → assets/vendors/bootstrap/js/bootstrap.bundle.min.js
- `y()` --indirect_call--> `S()`  [INFERRED]
  assets/vendors/gsap/SplitText.js → assets/vendors/bootstrap/js/bootstrap.bundle.min.js
- `gd()` --indirect_call--> `rt()`  [INFERRED]
  assets/vendors/gsap/gsap.js → assets/vendors/bootstrap/js/bootstrap.bundle.min.js
- `tb()` --indirect_call--> `rt()`  [INFERRED]
  assets/vendors/gsap/gsap.js → assets/vendors/bootstrap/js/bootstrap.bundle.min.js

## Import Cycles
- None detected.

## Communities (40 total, 16 thin omitted)

### Community 0 - "Be"
Cohesion: 0.08
Nodes (3): Be, Fe, trigger()

### Community 1 - "jquery-3.6.0.min.js"
Cohesion: 0.08
Nodes (31): A(), at(), b(), be(), ce(), e(), Ee(), fe() (+23 more)

### Community 2 - "remove"
Cohesion: 0.10
Nodes (4): I, j, Oe, P

### Community 3 - "bootstrap.bundle.min.js"
Cohesion: 0.13
Nodes (37): at(), bt(), C(), D(), dt(), ft(), getDataAttributes(), gt() (+29 more)

### Community 4 - "gsap.js"
Cohesion: 0.07
Nodes (18): ab(), Ad(), ae(), Bd(), Cd(), dd(), ga(), ha() (+10 more)

### Community 5 - "ye"
Cohesion: 0.08
Nodes (4): qe, remove(), ye, Ke()

### Community 6 - "ScrollTrigger.js"
Cohesion: 0.07
Nodes (7): Aa(), hb(), N(), O(), q(), za(), zb()

### Community 8 - "SplitText.js"
Cohesion: 0.12
Nodes (14): nd(), ScrollTrigger(), k(), n(), o(), s(), SplitText(), t() (+6 more)

### Community 10 - "n"
Cohesion: 0.31
Nodes (19): a(), e(), i(), n(), c(), d(), f(), i() (+11 more)

### Community 11 - "swiper.min.js"
Cohesion: 0.26
Nodes (12): h(), a(), d(), e(), G(), H(), l(), n() (+4 more)

### Community 13 - "qc"
Cohesion: 0.19
Nodes (13): gc(), Qj(), ic(), Jb(), jc(), Ka(), mc(), nb() (+5 more)

### Community 14 - "Ve"
Cohesion: 0.23
Nodes (13): af(), B(), df(), E(), L(), M(), Qe(), Se() (+5 more)

### Community 15 - "o"
Cohesion: 0.21
Nodes (12): ca(), $d(), ed(), Gb(), ia(), o(), od(), ra() (+4 more)

### Community 16 - "jarallax.min.js"
Cohesion: 0.24
Nodes (8): a(), c(), f(), l(), s(), u(), v(), y()

### Community 17 - "Tween"
Cohesion: 0.33
Nodes (10): _assertThisInitialized(), $b(), da(), ka(), oa(), pa(), q(), t() (+2 more)

### Community 18 - "ub"
Cohesion: 0.29
Nodes (8): ea(), gd(), N(), rb(), sb(), tb(), ub(), xb()

### Community 19 - "dc"
Cohesion: 0.29
Nodes (8): db(), dc(), fc(), Ha(), I(), Ja(), lc(), tb()

### Community 20 - "p"
Cohesion: 0.33
Nodes (7): aa(), eb(), fd(), p(), r(), Un(), v()

### Community 21 - "ua"
Cohesion: 0.33
Nodes (6): ba(), kb(), La(), sc(), ua(), uc()

### Community 22 - "Nb"
Cohesion: 0.33
Nodes (4): Lb(), mb(), Nb(), ta()

### Community 23 - "Fa"
Cohesion: 0.70
Nodes (5): Ba(), Ca(), Fa(), ub(), y()

### Community 24 - "$a"
Cohesion: 0.50
Nodes (4): $a(), na(), s(), u()

### Community 25 - "J"
Cohesion: 0.50
Nodes (3): F(), J(), z()

### Community 26 - "Ia"
Cohesion: 0.50
Nodes (4): Ia(), ib(), La(), Ma()

## Knowledge Gaps
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `ie()` connect `bootstrap.bundle.min.js` to `jquery-3.6.0.min.js`, `gsap.js`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Should `Be` be split into smaller, more focused modules?**
  _Cohesion score 0.07616892911010557 - nodes in this community are weakly interconnected._
- **Why does `h()` connect `swiper.min.js` to `Be`, `jarallax.min.js`, `n`, `bootstrap.bundle.min.js`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `jquery-3.6.0.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07955596669750231 - nodes in this community are weakly interconnected._
- **Why does `xt()` connect `bootstrap.bundle.min.js` to `J`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Should `remove` be split into smaller, more focused modules?**
  _Cohesion score 0.0960591133004926 - nodes in this community are weakly interconnected._
- **Should `bootstrap.bundle.min.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12846068660022147 - nodes in this community are weakly interconnected._