{%- if imarkdown.math %}
<script src="//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js?config=MML_CHTML" ></script>
{%- endif %}

{%- if imarkdown.highlight %}
<link rel='stylesheet' href='//cdn.jsdelivr.net/npm/highlight.js@9/styles/github.css'>
{%- endif %}
{%- if page.reactive %}
<link rel='stylesheet' href='/assets/imarkdown/imarkdown-{{imarkdown.version}}-min.css'>
{%- endif %}
