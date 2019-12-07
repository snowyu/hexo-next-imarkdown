{%- if page.reactive %}
{% set vCollapsed = page.reactive.editable != true %}
<script src='/assets/imarkdown/imarkdown-{{imarkdown.version}}-min.js'></script><script>
window.iMarkdown.makeActive({"collapsed_code":{{vCollapsed}},"debug":false,"filename":"{{page.title}}.md"});</script>
{%- endif %}

