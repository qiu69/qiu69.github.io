<h2>📝 Publications & Preprints</h2>
<p>My full paper list can be found at <a href="你的GoogleScholar链接">Google Scholar</a>.</p>

<h3 style="margin-top: 30px; border-bottom: 1px solid #eee;">📈 Time Series Forecasting</h3>
<ul style="list-style: none; padding-left: 0;">
  {% for link in site.data.publications.forecasting %}
  <li style="margin-bottom: 20px;">
    <strong>{{ link.conference_short }}</strong> {% if link.notes %}<span style="color: #d9534f;">({{ link.notes }})</span>{% endif %}<br>
    <span style="font-size: 1.1em; color: #224b8d; font-weight: bold;">{{ link.title }}</span><br>
    {{ link.authors }}<br>
    {% if link.pdf %}<a href="{{ link.pdf }}">[Paper]</a>{% endif %}
    {% if link.code %}<a href="{{ link.code }}">[Code]</a>{% endif %}
    {% if link.blog %}<a href="{{ link.blog }}">[Blog]</a>{% endif %}
  </li>
  {% endfor %}
</ul>

<h3 style="margin-top: 30px; border-bottom: 1px solid #eee;">🔍 Anomaly Detection & Imputation</h3>
<ul style="list-style: none; padding-left: 0;">
  {% for link in site.data.publications.anomaly_imputation %}
  <li style="margin-bottom: 20px;">
    <strong>{{ link.conference_short }}</strong><br>
    <span style="font-size: 1.1em; color: #224b8d; font-weight: bold;">{{ link.title }}</span><br>
    {{ link.authors }}<br>
    {% if link.pdf %}<a href="{{ link.pdf }}">[Paper]</a>{% endif %}
    {% if link.code %}<a href="{{ link.code }}">[Code]</a>{% endif %}
  </li>
  {% endfor %}
</ul>

<h3 style="margin-top: 30px; border-bottom: 1px solid #eee;">📊 Benchmarks & Surveys</h3>
<ul style="list-style: none; padding-left: 0;">
  {% for link in site.data.publications.benchmarks_surveys %}
  <li style="margin-bottom: 20px;">
    <strong>{{ link.conference_short }}</strong><br>
    <span style="font-size: 1.1em; color: #224b8d; font-weight: bold;">{{ link.title }}</span><br>
    {{ link.authors }}<br>
    {% if link.pdf %}<a href="{{ link.pdf }}">[Paper]</a>{% endif %}
  </li>
  {% endfor %}
</ul>
