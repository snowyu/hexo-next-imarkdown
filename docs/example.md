---
title: Interactive Markdown Example
date: 2019-11-23 22:22:00
updated: 2019-11-23 22:22:00
author: Riceball LEE
categories:
  - Thinking
  - Reactive
  - Document
  - Markdown
tags : [interactive, reactive, document, javascript, markdown]
reactive:
  editable: true
---

## Demo

Pythagoran theorem is $$a^2 + b^2 = c^2$$.

Bayes theorem:

$$$
P(A | B) = (P(B | A)P(A)) / P(B)
$$$

**Parameters**：[X Coor:10]{rx:10..}，[Y Coor:18]{ry:10..}，[Width:100]{rw:1..}，[Height:50]{rh:1..}

Following will show howto draw a rect with Raphael animation library, Click the `play` button to begin:

```output
# demo how to draw a rect.
paper = @canvas # NOTE: IT WILL BE CHANGED IN THE FUTURE (Raphael will not be buildin)

|
~~~
tooltip: set the canvas size:200X100 ::: Init
type:paper.setSize(200,100)\n
tooltip: clear canvas
type:paper.clear()\n
tooltip: init x/y coor, width/height parameters coming from document
type:@rx ||=10\n
type:@ry ||=18\n
type:@rw ||=100\n
type:@rh ||=50\n
tooltip: drawing rect nowing ::: Draw rect
type:rect = paper.rect(@rx, @ry, @rw, @rh)\n
tooltip: fill red for the rect
type:rect.attr('fill', 'red')
moveTo: 8:13
tooltip: you can try it by youself now
```
----

