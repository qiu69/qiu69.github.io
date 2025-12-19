## 📝 Publications & Preprints

<div class="publications">
<ol class="bibliography">

  <h3 class="category-title" style="margin: 30px 0 15px 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Time Series Forecasting</h3>
  {% for link in site.data.publications.forecasting %}
  <li>
    <div class="pub-row">
      <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
        {% if link.image %} <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100;height:40%"> {% endif %}
        {% if link.conference_short %} <abbr class="badge">{{ link.conference_short }}</abbr> {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
          <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a> {% endif %}
          {% if link.page %} <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a> {% endif %}
          {% if link.bibtex %} <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a> {% endif %}
          {% if link.blog %} <a href="{{ link.blog }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Blog</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  <br>
  {% endfor %}

  <h3 class="category-title" style="margin: 40px 0 15px 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Anomaly Detection & Imputation</h3>
  {% for link in site.data.publications.anomaly_detection %}
  <li>
    <div class="pub-row">
      <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
        {% if link.image %} <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100;height:40%"> {% endif %}
        {% if link.conference_short %} <abbr class="badge">{{ link.conference_short }}</abbr> {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
          <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a> {% endif %}
          {% if link.blog %} <a href="{{ link.blog }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Blog</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  <br>
  {% endfor %}

  <h3 class="category-title" style="margin: 40px 0 15px 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">Benchmarks, Surveys & Others</h3>
  {% for link in site.data.publications.benchmarks_others %}
  <li>
    <div class="pub-row">
      <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
        {% if link.image %} <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width:100;height:40%"> {% endif %}
        {% if link.conference_short %} <abbr class="badge">{{ link.conference_short }}</abbr> {% endif %}
      </div>
      <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
          <div class="title"><a href="{{ link.pdf }}">{{ link.title }}</a></div>
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
        <div class="links">
          {% if link.pdf %} <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a> {% endif %}
          {% if link.bibtex %} <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a> {% endif %}
          {% if link.blog %} <a href="{{ link.blog }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Blog</a> {% endif %}
          {% if link.notes %} <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong> {% endif %}
        </div>
      </div>
    </div>
  </li>
  <br>
  {% endfor %}

</ol>
</div>
